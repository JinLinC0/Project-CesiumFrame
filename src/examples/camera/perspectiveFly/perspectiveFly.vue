<template>
    <div id="cesiumContainer" class="cesium-container"></div>
    <div class="item-class">
        <span style="background-color: aliceblue; margin: 2px;">跳转到指定位置</span>
        <div>
            <input v-model="inputLongitude" style="width: 52px; margin-top: 5px; margin-left: 2px;" placeholder="经度:" />
            <input v-model="inputLatitude" style="width: 52px; margin-top: 5px; margin-left: 2px;" placeholder="纬度:" />
            <input v-model="inputAltitude" style="width: 52px; margin-top: 5px; margin-left: 2px;" placeholder="高度:" />
        </div>
        <div style="margin: 2px;">
            <button type="primary" @click="perspectiveFly(viewer, inputLongitude, inputLatitude, inputAltitude)">跳转</button>
            <button @click="reset()">重置</button>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { perspectiveFly } from './function';

let viewer;
const inputLongitude = ref('')
const inputLatitude = ref('')
const inputAltitude = ref('')

function reset() {
    inputLongitude.value = '';
    inputLatitude.value = '';
    inputAltitude.value = '';
}

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

<style>
.cesium-container {
    width: 100%;
    height: 100vh;
}
.item-class {
    position: absolute;
    top: 10px;
    left: 10px;
}
</style>