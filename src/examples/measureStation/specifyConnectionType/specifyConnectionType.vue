<template>
    <div id="cesiumContainer" class="cesium-container"></div>
    <div class="btn-class">
        <button>多个起点的脉冲线</button>
        <button @click="cone">圆锥</button>
        <button>脉冲圆锥</button>
        <button @click="transmitLine">脉冲线</button>
        <button @click="staticLines">静态线</button>
        <button @click="dashedLine">虚线</button>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { SpecifyConnectionType, Station }  from './function.js';

let viewer;
let stationOne;
let stationTwo;
let stationThree;
let satellite;

onMounted(() => {
    const script = document.createElement('script');
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';
    script.onload = () => {
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'

        viewer = new window.Cesium.Viewer('cesiumContainer', {
            infoBox: false,
            shouldAnimate: true
        });

        let siteInfoOne = {
            id: 'site1',
            position: [20, 20, 250],
            ellipsoid: {
                radii: [500000, 500000, 500000],
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
        let siteInfoTwo = {
            id: 'site2',
            position: [120, -10, 250],
            ellipsoid: {
                radii: [500000, 500000, 500000],
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
        let siteInfoThree = {
            id: 'site3',
            position: [-70, 10, 250],
            ellipsoid: {
                radii: [500000, 500000, 500000],
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
        // 地面测站实例
        stationOne = new Station(viewer, siteInfoOne.id, siteInfoOne);
        stationTwo = new Station(viewer, siteInfoTwo.id, siteInfoTwo);
        stationThree = new Station(viewer, siteInfoThree.id, siteInfoThree);

        // 轨道卫星实例
        satellite = new SpecifyConnectionType(viewer, stationOne, stationTwo, stationThree);

    };
    document.head.appendChild(script);
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cesium.com/downloads/cesiumjs/releases/1.119/Build/Cesium/Widgets/widgets.css';
    document.head.appendChild(link);
});

// 连接方式为脉冲圆锥类方法的调用
function cone() {
    satellite.toggleCone();
}

// 连接方式为脉冲线类方法的调用
function transmitLine() {
    satellite.toggleTransmitLine();
}

// 连接方式为静态线类方法的调用
function staticLines() {
    satellite.toggleStaticLines();
}

// 连接方式为虚线类方法的调用
function dashedLine() {
    satellite.toggleDashedLine();
}
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