<template>
    <div id="cesiumContainer" class="cesium-container"></div>
</template>

<script setup>
import { onMounted } from 'vue';
import { addShip } from './function';

let viewer;

onMounted(() => {
    const script = document.createElement('script');
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';
    script.onload = () => {
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'

        viewer = new window.Cesium.Viewer('cesiumContainer', {
            baseLayerPicker: false,  // 影像切换
            animation: true,  //是否显示动画控件
            timeline: false, //是否显示时间线控件
            infoBox: false, //是否显示点击要素之后显示的信息
            geocoder: false, //是否显示地名查找控件
            timeline: true, //是否启用时间线控件
            fullscreenButton: false,
            shouldAnimate: true,
            navigationHelpButton: false, //是否显示帮助信息控件
            terrainProvider: Cesium.createWorldTerrain({
                requestWaterMask: true, // required for water effects
                requestVertexNormals: true // required for terrain lighting
            })
        });
        
        addShip(viewer)

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