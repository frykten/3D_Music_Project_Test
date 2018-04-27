<template lang="html">
  <div>
    <h1>My First Google Map</h1>
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
// Need to "npm i -s vue2-google-maps" the module

// Need to Import it in the Main.js
// And then to
// Vue.use(name, {
//   load: { 
//     bunch of object stuff like,
//     key: 'AIzaSyCkPCXQNeptCoA_ThDoqakpQgN9xDTrI2Y',
//   }
// })

export default {
    data () {
      return {
        center: {lat: 48.861238, lng: 2.342987},
        zoom: 12,
        markers: [{
            position: {lat: 48.8889782, lng: 2.3811902},
            label: "smurf",
            title: "smurf"
        }, {
            position: {lat: 48.8828927, lng: 2.3430529},
        }, {
            position: {lat: 48.8878242, lng: 2.3901249},
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