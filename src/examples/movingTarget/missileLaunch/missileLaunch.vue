<template>
    <div id="cesiumContainer" class="cesium-container"></div>
</template>

<script setup>
import { onMounted } from 'vue';
import { addMissileLaunch } from './function';

let viewer;

onMounted(() => {
    const script = document.createElement('script');
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';
    script.onload = () => {
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'
  
        viewer = new Cesium.Viewer('cesiumContainer', {
          shouldAnimate: true  // 一开始就播放动画
        });  

        addMissileLaunch(viewer)

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
</style>