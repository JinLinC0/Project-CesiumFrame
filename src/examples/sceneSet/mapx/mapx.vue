<template>
    <div id="cesiumContainer" class="cesium-container"></div>
    <div id="eye" class="eye-container"></div>
</template>

<script setup>
import { onMounted } from 'vue';
import { addMapx } from './function';

let viewerMain;
let viewerEye;

onMounted(() => {
    const script = document.createElement('script');
    script.src = 'https://cesium.com/downloads/cesiumjs/releases/1.99/Build/Cesium/Cesium.js';
    script.onload = () => {
        window.Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3Njg4ZWU5Yi1iZDhiLTRhYmUtOTRiYS04YjM5NmUwNjVmMDMiLCJpZCI6MjI3MzQ3LCJpYXQiOjE3MjA1MjA4Mjh9.E5XW4LnwgfVAaBC-znaYr61m4yK0-j2qEQhi9qwFFPE'

        viewerMain = new window.Cesium.Viewer('cesiumContainer', {
            infoBox: false,
        });

        viewerEye = new window.Cesium.Viewer('eye', {
            infoBox: false,
            // 禁用所有小组件
            baseLayerPicker: false,  // 是否显示图层选择控件
            animation: false, // 是否显示动画控件
            timeline: false,  // 是否显示时间轴控件，和cesuim中的click进行挂接的
            fullscreenButton: false, // 是否显示全屏按钮
            geocoder: false, // 是否显示搜索按钮
            homeButton: false, // 是否显示主页按钮(回到地球初始化的状态)
            navigationHelpButton: false, // 是否显示帮助提示按钮
            sceneModePicker: false,  // 是否显示投影方式按钮
            infoBox: false,  // 是否显示信息框，显示实体相关的属性信息
        });

        addMapx(viewerMain, viewerEye)

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
.eye-container {
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 180px;
    height: 180px;
}
</style>