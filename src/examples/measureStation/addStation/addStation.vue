<template>
    <div id="cesiumContainer" class="cesium-container"></div>
    <div class="btn-class">
        <button @click="changeShow">测站显示/隐藏</button>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Station from './function.js'; // 确保路径正确

let viewer;
let station;

function cesiumInit() {
    const script = document.createElement('script');
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';
    script.onload = () => {
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'

        viewer = new window.Cesium.Viewer('cesiumContainer', {
            infoBox: false,
            shouldAnimate: true
        });

        let siteInfo = {
            id: 'site',
            position: [20, 20, 250],
            ellipsoid: {
                radii: [50000, 50000, 50000],
                innerRadii: [1, 1, 1],
                minimumClock: 45,
                maximumClock: 90,
                minimumCone: 45,
                maximumCone: 75,
                outline: false,
                fill: true,
            },
            label: {
                text: ''
            },
        };
        station = new Station(viewer, siteInfo.id, siteInfo);

    };
    document.head.appendChild(script);
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';
    document.head.appendChild(link);
}

function changeShow(){
    // 获取站点实体
    const siteEntity = viewer.entities.getById('site');
    // 切换站点可见性
    station.setSiteVisible(siteEntity, !siteEntity.show);
}

onMounted(() => {
    cesiumInit()
});
</script>

<style>
.cesium-container {
    width: 100%;
    height: 100vh;
}
.btn-class {
    position: absolute;
    top: 10px;
    left: 10px;
}
</style>