<template lang="html">
	<section id="main">
		<p>Ceci est une guitare</p>
		<svg id="canvas" :width="wF" :height="hF + 100">
		    <rect :x="0" :y="0" :width="wF" :height="hF"/>
		    
            <g v-for="ch in nbCh">
                <line x1="0" :y1="hF / (nbCh+1) * ch" :x2="wF" :y2="hF / (nbCh+1) * ch"/>
                <g v-for="key in nbKeys" @mousedown="activeBtn($event)" @mouseup="unActiveBtn($event)">
                    <circle :cx="wF / (nbKeys + 1) * key" :cy="hF / (nbCh+1) * ch" class="special" v-if="ch == 1 ? 6 < key && key < 13 : 8 < key && key < 17"/>
                    <circle :cx="wF / (nbKeys + 1) * key" :cy="hF / (nbCh+1) * ch" v-else/>
                    
                    <g>
                        <text :x="wF / (nbKeys + 1) * key" :y="hF / (nbCh+1) * ch" v-if="ch == 1">{{6 >= key ? chord1[key-1] : chord1[key-7]}}</text>
                        <text :x="wF / (nbKeys + 1) * key" :y="hF / (nbCh+1) * ch" v-if="ch == 2">{{8 >= key ? chord2[key-1] : chord2[key-9]}}</text>
                        <text :x="wF / (nbKeys + 1) * key" :y="hF / (nbCh+1) * ch" v-if="ch == 4">{{8 >= key ? chord3[key-1] : chord3[key-9]}}</text>
                        <text :x="wF / (nbKeys + 1) * key" :y="hF / (nbCh+1) * ch" v-if="ch == 3">{{8 >= key ? chord4[key-1] : chord4[key-9]}}</text>
                        <text :x="wF / (nbKeys + 1) * key" :y="hF / (nbCh+1) * ch" v-if="ch == 5">{{8 >= key ? chord5[key-1] : chord5[key-9]}}</text>
                        <text :x="wF / (nbKeys + 1) * key" :y="hF / (nbCh+1) * ch" v-if="ch == 6">{{8 >= key ? chord6[key-1] : chord6[key-9]}}</text>
                    </g>
                </g>
		    </g>
		</svg>
	</section>
</template>

<script>
	export default {
		data() {
			return {
				wF: 640,
                hF: 200,
                nbCh: 6,
                nbKeys: 21,
                chord1: [
                    ")", "^", "ù", "=", "$", "*",
                ],
                chord2: [
                    "ç", "o", "l", ":", "à", "p", "m", "!",
                ],
                chord3: [
                    "è", "u", "j", ",", "_", "i", "k", ";",
                ],
                chord4: [
                    "(", "t", "g", "b", "-", "y", "h", "n",
                ],
                chord5: [
                    '"', "e", "d", "c", "'", "r", "f", "v",
                ],
                chord6: [
                    "&", "a", "q", "w", "é", "z", "s", "x",
                ],
			}
		},
        props: ['childInstr'],
        methods: {
			activeBtn(event) {
                let target = event.target.closest("circle");
                target.classList.add("active");
                
                let instr = this.childInstr;
                let key = target.dataset.id;
                
                let sound = control.getSound(instr, key, this.isShift);
			},
			unActiveBtn(event) {
                event.target.closest("circle").classList.remove("active");
			},
        }
	}
</script>

<style lang="scss" scoped>
	#main {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
    
    #canvas {
        max-height: 50vh;
        max-width: 80vw;
        min-height: 30vh;
        min-width: 50vw;
    }
    
    rect {
        fill: #692b18;
    }
    
    line {
        stroke: #f2ad29;
        stroke-width: 2;
        box-shadow: 10px 10px 10px black;
    }
    
    circle {
        fill: rgba(0, 0, 0, 0.5);
        stroke: red;
        stroke-width: 2;
        r: 12px;
    }
    .special {
        fill: rgba(0, 100, 150, 0.5);
    }
    .active {
        fill: rgba(150, 0, 0, 0.5);
    }
    
    text {
        dy: .3em;
        fill: white;
        font-size: 1rem;
        font-weight: bold;
/*
        stroke: white;
        stroke-width: 1;
*/
        text-anchor: middle;
        transform: translateY(6px);
    }
</style>
