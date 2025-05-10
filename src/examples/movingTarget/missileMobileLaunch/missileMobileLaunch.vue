<template>
    <div id="cesiumContainer" class="cesium-container"></div>
    <div class="itemClass">
        <div>
            <input type="string" class="inputClass" v-model="startLon" placeholder="起点的经度：" />
            <input type="string" class="inputClass" v-model="startLat" placeholder="起点的纬度：" />
            <input type="string" class="inputClass" v-model="startHeight" placeholder="起点的高度：" />
        </div>
        <div>
            <input type="string" class="inputClass" v-model="endLon" placeholder="终点的经度：" />
            <input type="string" class="inputClass" v-model="endLat" placeholder="终点的纬度：" />
            <input type="string" class="inputClass" v-model="endHeight" placeholder="终点的高度：" />
        </div>
        <div>
            <button @click="launchMissile" style="margin: 1px;">发射导弹</button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { addMissileMobileLaunch } from './function';

const startLon = ref(120);
const startLat = ref(30);
const startHeight = ref(0);
const endLon = ref(180);
const endLat = ref(60);
const endHeight = ref(1000000);

let missileId = 0;

onMounted(() => {
    addMissileMobileLaunch(startLon.value, startLat.value, startHeight.value, endLon.value, endLat.value, endHeight.value, missileId++);
});

const launchMissile = () => {
    addMissileMobileLaunch(startLon.value, startLat.value, startHeight.value, endLon.value, endLat.value, endHeight.value, missileId++);
};
</script>

<style>
.cesium-container {
    width: 100%;
    height: 100vh;
}
.itemClass {
    position: absolute;
    top: 10px;
    left: 10px;
}
.inputClass {
    width: 80px;
    height: 15px;
    margin: 1px;
}
</style>