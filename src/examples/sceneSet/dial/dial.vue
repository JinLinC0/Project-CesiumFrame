<template>
  <div id="cesiumContainer" class="cesium-container"></div>
  <div class="time">

  </div>
  <div class="time">
    <img src="https://raw.githubusercontent.com/jinlinchao123/Cesium-assets/main/time.png"
      style="width: 100%; height: 100%;">
    <button class="button1" @click="forward(viewer)">▶</button>
    <button class="button2" v-on:click="start(viewer)">◼</button>
    <button class="button3" v-on:click="back(viewer)">◀</button>
    <button class="button4" v-on:click="multiplier(viewer)">X2</button>
    <button class="button5" v-on:click="divide(viewer)">X-2</button>
    <button class="button6" v-on:click="reset(viewer)">⚪</button>
    <p class="bei">X{{ bei }}</p>
    <p class="time-text"> {{ timetext }}</p>
  </div>
</template>
<script setup>
import { onMounted,ref, watch } from 'vue';
import { addDial, divide, multiplier, back, start, forward, reset } from './function';
let viewer=ref();
let bei = ref(66)
let timetext=ref('')
onMounted(() => {
  const script = document.createElement('script');
  script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';
  script.onload = () => {
    window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'
    viewer = new window.Cesium.Viewer('cesiumContainer', {
      animation: false,
      baseLayerPicker: false,
      fullscreenButton: false,
      vrButton: false,
      geocoder: false,
      homeButton: false,
      infoBox: false,
      sceneModePicker: false,
      selectionIndicator: false,
      timeline: true,
      navigationHelpButton: false,
    });
    timetext=addDial(viewer, timetext)
    bei.value = viewer.clockViewModel.multiplier
  };
  document.head.appendChild(script);
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';
  document.head.appendChild(link);
});

</script>

<style>
.cesium-container {
width: 100%;
height: 100vh;
}
.time {
  width: 180px;
  height: 100px;
  position: absolute;
  bottom: 0px;
  left: 0px;
}

.button1 {
  position: absolute;
  bottom: 0px;
  left: 120px;
}

.button2 {
  position: absolute;
  bottom: 0px;
  left: 85px;
}

.button3 {
  position: absolute;
  bottom: 0px;
  left: 50px;
}

.button4 {
  position: absolute;
  bottom: 0px;
  left: 150px;
}

.button5 {
  position: absolute;
  bottom: 0px;
  left: 10px;
}

.button6 {

  position: absolute;
  bottom: 85px;
  left: 10px;
}

.bei {
  color: aliceblue;
  font-size: 15px;
  position: absolute;
  bottom: 40px;
  left: 80px;
}

.time-text {
  color: aliceblue;
  font-size: 15px;
  position: absolute;
  bottom: 30px;
  left: 40px;
}
</style>