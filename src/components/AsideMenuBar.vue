<template>
    <el-aside>
        <el-scrollbar>
            <el-menu unique-opened :collapse="isCollapse">
                <a href="/" class="logo">
                    <img src="@/assets/vue.svg" alt="">
                    <h1> + Cesium</h1>
                </a>
                <el-sub-menu index="1">
                    <template #title>
                        <el-icon><MapLocation /></el-icon>
                        <span>太空任务</span>
                    </template>
                    <el-menu-item v-for="item in elementSpaceMissions" :key="item.id" :index="item.title" @click="goAnchor(item.title)">
                        <el-icon><View /></el-icon>
                        <span>{{item.title}}</span>
                    </el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="6">
                    <template #title>
                        <el-icon><Grid /></el-icon>
                        <span>测站</span>
                    </template>
                    <el-menu-item v-for="item in elementStation" :key="item.id" :index="item.title" @click="goAnchor(item.title)">
                        <el-icon><View /></el-icon>
                        <span>{{item.title}}</span>
                    </el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="7">
                    <template #title>
                        <el-icon><Grid /></el-icon>
                        <span>动目标</span>
                    </template>
                    <el-menu-item v-for="item in elementMoving" :key="item.id" :index="item.title" @click="goAnchor(item.title)">
                        <el-icon><View /></el-icon>
                        <span>{{item.title}}</span>
                    </el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="8">
                    <template #title>
                        <el-icon><Grid /></el-icon>
                        <span>可见性</span>
                    </template>
                    <el-menu-item v-for="item in elementVisible" :key="item.id" :index="item.title" @click="goAnchor(item.title)">
                        <el-icon><View /></el-icon>
                        <span>{{item.title}}</span>
                    </el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="9">
                    <template #title>
                        <el-icon><Grid /></el-icon>
                        <span>特效</span>
                    </template>
                    <el-menu-item v-for="item in elementSpecialEffect" :key="item.id" :index="item.title" @click="goAnchor(item.title)">
                        <el-icon><View /></el-icon>
                        <span>{{item.title}}</span>
                    </el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="10">
                    <template #title>
                        <el-icon><MapLocation /></el-icon>
                        <span>图元</span>
                    </template>
                    <el-menu-item v-for="item in elementGraphic" :key="item.id" :index="item.title" @click="goAnchor(item.title)">
                        <el-icon><View /></el-icon>
                        <span>{{item.title}}</span>
                    </el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="13">
                    <template #title>
                        <el-icon><MapLocation /></el-icon>
                        <span>场景设置</span>
                    </template>
                    <el-menu-item v-for="item in elementSceneSet" :key="item.id" :index="item.title" @click="goAnchor(item.title)">
                        <el-icon><View /></el-icon>
                        <span>{{item.title}}</span>
                    </el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="14">
                    <template #title>
                        <el-icon><MapLocation /></el-icon>
                        <span>相机</span>
                    </template>
                    <el-menu-item v-for="item in elementCamera" :key="item.id" :index="item.title" @click="goAnchor(item.title)">
                        <el-icon><View /></el-icon>
                        <span>{{item.title}}</span>
                    </el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="15">
                    <template #title>
                        <el-icon><SemiSelect /></el-icon>
                        <span>天气</span>
                    </template>
                    <el-menu-item v-for="item in elementWeather" :key="item.id" :index="item.title" @click="goAnchor(item.title)">
                        <el-icon><View /></el-icon>
                        <span>{{item.title}}</span>
                    </el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="18">
                    <template #title>
                        <el-icon><SemiSelect /></el-icon>
                        <span>内置算法</span>
                    </template>
                    <el-menu-item v-for="item in elementAlgorithm" :key="item.id" :index="item.title" @click="goAnchor(item.title)">
                        <el-icon><View /></el-icon>
                        <span>{{item.title}}</span>
                    </el-menu-item>
                </el-sub-menu>
                
            </el-menu>
        </el-scrollbar>
    </el-aside>
</template>

<script setup>
import { ref } from 'vue';
import { MapLocation, SemiSelect, Grid, View } from "@element-plus/icons-vue";
import { elementSpaceMissionsMap, elementStationMap, elementMovingMap, elementVisibleMap, elementSpecialEffectMap, elementGraphicMap, elementSceneSetMap, elementCameraMap, elementWeatherMap, elementAlgorithmMap } from '@/views/ElementMap';

const elementSpaceMissions = ref()
const elementStation = ref()
const elementMoving = ref()
const elementVisible = ref()
const elementSpecialEffect = ref()
const elementGraphic = ref()
const elementSceneSet = ref()
const elementCamera = ref()
const elementWeather = ref()
const elementAlgorithm = ref()

elementSpaceMissions.value = elementSpaceMissionsMap;
elementStation.value = elementStationMap;
elementMoving.value = elementMovingMap;
elementVisible.value = elementVisibleMap;
elementSpecialEffect.value = elementSpecialEffectMap;
elementGraphic.value = elementGraphicMap;
elementSceneSet.value = elementSceneSetMap;
elementCamera.value = elementCameraMap;
elementWeather.value = elementWeatherMap;
elementAlgorithm.value = elementAlgorithmMap;

const props = defineProps({
    isCollapse: {
      type: Boolean,
    }
});

// 锚点跳转函数
function goAnchor(title) {
    var anchor = document.getElementById(title);
    if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth' });
    }
}
</script>

<style lang="scss" scoped>
.el-aside{
    background-color: #e9e9eb;
    height: 100vh;
    width: 15%;
}
.el-menu{
    background-color: #e9e9eb;
    width: 100%;
    border-right: none;
    &.el-menu--collapse{
        width: 60px;
        & h1{
            display: none;
        }
    }
}
.logo{
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: black;
    height: 60px;
    img{
        width: 32px;
        height: 32px;
    }
}
</style>