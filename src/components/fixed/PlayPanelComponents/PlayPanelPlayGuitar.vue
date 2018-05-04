<template lang="html">
	<section id="main">
		<p>Ceci est une guitare</p>
		<svg id="canvas" :width="wF" :height="hF + 100">
		    <rect :x="0" :y="0" :width="wF" :height="hF"/>
		    
            <g v-for="ch in nbCh">
                <line x1="0" :y1="hF / (nbCh+1) * ch" :x2="wF" :y2="hF / (nbCh+1) * ch" :stroke-width="ch" :stroke="ch <= 2 ? 'silver' : '#f2ad29'"/>
                <g v-for="key in nbKeys" @mousedown="activeBtn(((ch-1)*-22+110) + (key-1), (ch-1)*22 + (key-1))" @mouseup="unActiveBtn((ch-1)*22 + (key-1))" :class="'chord-' +ch">
                    <circle :cx="wF / (nbKeys + 1) * key" :cy="hF / (nbCh+1) * ch" class="special" ref="note" v-if="ch == 1 ? 6 < key && key < 13 : 8 < key && key < 17"/>
                    <circle :cx="wF / (nbKeys + 1) * key" :cy="hF / (nbCh+1) * ch" ref="note" v-else/>
                    
                    <text :x="wF / (nbKeys + 1) * key" :y="8" v-if="key == 1 || key == 4 || key == 6 || key == 8 || key == 10 || key == 13 || key == 16 || key == 18 || key == 20">{{key - 1}}</text>
                    <g>
                        <text :x="wF / (nbKeys + 1) * key" :y="hF / (nbCh+1) * ch" v-if="ch == 1">{{6 >= key ? chord1[key-1] : chord1[key-7]}}</text>
                        <text :x="wF / (nbKeys + 1) * key" :y="hF / (nbCh+1) * ch" v-if="ch == 2">{{8 >= key ? chord2[key-1] : chord2[key-9]}}</text>
                        <text :x="wF / (nbKeys + 1) * key" :y="hF / (nbCh+1) * ch" v-if="ch == 3">{{8 >= key ? chord3[key-1] : chord3[key-9]}}</text>
                        <text :x="wF / (nbKeys + 1) * key" :y="hF / (nbCh+1) * ch" v-if="ch == 4">{{8 >= key ? chord4[key-1] : chord4[key-9]}}</text>
                        <text :x="wF / (nbKeys + 1) * key" :y="hF / (nbCh+1) * ch" v-if="ch == 5">{{8 >= key ? chord5[key-1] : chord5[key-9]}}</text>
                        <text :x="wF / (nbKeys + 1) * key" :y="hF / (nbCh+1) * ch" v-if="ch == 6">{{8 >= key ? chord6[key-1] : chord6[key-9]}}</text>
                    </g>
                </g>
		    </g>
		</svg>
	</section>
</template>

<script>
    const control = require("./PlayControllerGuitar.js")
    
	export default {
		data() {
			return {
				wF: 640,
                hF: 200,
                nbCh: 6,
                nbKeys: 22,
                note: [],
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
			activeBtn(keys, btn) {
                let target = this.$refs.note[btn];
                target.classList.add("active");
                
                let instr = this.childInstr;
                let key = keys;
                
                let sound = control.getSound(instr, key, this.isShift);
			},
			unActiveBtn(btn) {
                let target = this.$refs.note[btn];
                target.classList.remove("active");
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
        fill: #53281b;
    }
    
    line {
/*        stroke: #f2ad29;*/
        box-shadow: 10px 10px 10px black;
    }
    
    .chord-6 circle {
        stroke: hsl(15, 65%, 45%);
    }
    .chord-5 circle {
        stroke: hsl(355, 60%, 40%);
    }
    .chord-4 circle {
        stroke: hsl(335, 50%, 55%);
    }
    .chord-3 circle {
        stroke: hsl(315, 45%, 40%);
    }
    .chord-2 circle {
        stroke: hsl(135, 55%, 35%);
    }
    .chord-1 circle {
        stroke: hsl(70, 50%, 45%);
    }
    circle {
        fill: rgba(0, 0, 0, 0.75);
        stroke: red;
        stroke-width: 2.5;
        r: 12px;
    }
    .special {
        fill: rgba(0, 75, 125, 0.75);
    }
    .active {
        fill: rgba(250, 0, 0, 0.75);
    }
    
    text {
        cursor: default;
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
