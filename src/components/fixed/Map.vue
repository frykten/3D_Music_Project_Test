<template lang="html">
    <div>
        <div id="container">
            <gmap-map :center="center" :zoom="zoom" id="googleMap" :draggable="false" disableDefaultUI="true">
                <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="m.clickable" :draggable="m.draggable" @click="center=m.position, zoom=15" :title="m.title">
                    <gmap-info-window>{{m.label}}</gmap-info-window>
                </gmap-marker>
            </gmap-map>
        </div>
    </div>
</template>

<script>
export default {
    data () {
      return {
        center: {lat: 48.861238, lng: 2.342987},
        zoom: 12,
        markers: [{
            position: {lat: 48.8889782, lng: 2.3811902},
        }]
      }
    }
}
</script>

<style lang="scss" scoped>
#container {
  display: flex;
  justify-content: center;
}

#googleMap {
  width: 80vw;
  height: 60vh;
}
</style>