<template>
    <div id="cesiumContainer" style="width: 100vw; height: 100vh"></div>
    <div class="itemClass">
        <div>
            <input type="string" class="inputClass" v-model="longitude" placeholder="经度：" />
            <input type="string" class="inputClass" v-model="latitude" placeholder="纬度：" />
            <input type="string" class="inputClass" v-model="height" placeholder="高度：" />
        </div>
        <div>
            <button @click="changeCoordinate(viewer, longitude, latitude, height)" style="margin: 1px">转换坐标</button>
        </div>
    </div>
</template>

<script setup>

import { onMounted, ref } from "vue";
import { changeCoordinate } from  './function.js'

const longitude = ref();
const latitude = ref();
const height = ref();
let viewer;

onMounted(() => {
    const script = document.createElement('script');
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';
    script.onload = () => {
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'

        viewer = new window.Cesium.Viewer('cesiumContainer', {
            infoBox: false,
        });
    };
    document.head.appendChild(script);
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';
    document.head.appendChild(link);
});
</script>

<style scoped>
.itemClass {
    position: absolute;
    top: 10px;
    left: 10px;
}
</style>
