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
                        <el-icon>
                            <MapLocation />
                        </el-icon>
                        <span>太空任务</span>
                    </template>
                    <el-menu-item v-for="item in elementSpaceMissions" :key="item.id" :index="item.title"
                        @click="goAnchor(item.title)">
                        <el-icon>
                            <View />
                        </el-icon>
                        <span>{{ item.title }}</span>
                    </el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="6">
                    <template #title>
                        <el-icon>
                            <Grid />
                        </el-icon>
                        <span>测站</span>
                    </template>
                    <el-menu-item v-for="item in elementStation" :key="item.id" :index="item.title"
                        @click="goAnchor(item.title)">
                        <el-icon>
                            <View />
                        </el-icon>
                        <span>{{ item.title }}</span>
                    </el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="7">
                    <template #title>
                        <el-icon>
                            <Grid />
                        </el-icon>
                        <span>动目标</span>
                    </template>
                    <el-menu-item v-for="item in elementMoving" :key="item.id" :index="item.title"
                        @click="goAnchor(item.title)">
                        <el-icon>
                            <View />
                        </el-icon>
                        <span>{{ item.title }}</span>
                    </el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="8">
                    <template #title>
                        <el-icon>
                            <Grid />
                        </el-icon>
                        <span>可见性</span>
                    </template>
                    <el-menu-item v-for="item in elementVisible" :key="item.id" :index="item.title"
                        @click="goAnchor(item.title)">
                        <el-icon>
                            <View />
                        </el-icon>
                        <span>{{ item.title }}</span>
                    </el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="9">
                    <template #title>
                        <el-icon>
                            <Grid />
                        </el-icon>
                        <span>特效</span>
                    </template>
                    <el-menu-item v-for="item in elementSpecialEffect" :key="item.id" :index="item.title"
                        @click="goAnchor(item.title)">
                        <el-icon>
                            <View />
                        </el-icon>
                        <span>{{ item.title }}</span>
                    </el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="10">
                    <template #title>
                        <el-icon>
                            <MapLocation />
                        </el-icon>
                        <span>图元</span>
                    </template>
                    <el-menu-item v-for="item in elementGraphic" :key="item.id" :index="item.title"
                        @click="goAnchor(item.title)">
                        <el-icon>
                            <View />
                        </el-icon>
                        <span>{{ item.title }}</span>
                    </el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="13">
                    <template #title>
                        <el-icon>
                            <MapLocation />
                        </el-icon>
                        <span>场景设置</span>
                    </template>
                    <el-menu-item v-for="item in elementSceneSet" :key="item.id" :index="item.title"
                        @click="goAnchor(item.title)">
                        <el-icon>
                            <View />
                        </el-icon>
                        <span>{{ item.title }}</span>
                    </el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="14">
                    <template #title>
                        <el-icon>
                            <MapLocation />
                        </el-icon>
                        <span>相机</span>
                    </template>
                    <el-menu-item v-for="item in elementCamera" :key="item.id" :index="item.title"
                        @click="goAnchor(item.title)">
                        <el-icon>
                            <View />
                        </el-icon>
                        <span>{{ item.title }}</span>
                    </el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="15">
                    <template #title>
                        <el-icon>
                            <SemiSelect />
                        </el-icon>
                        <span>天气</span>
                    </template>
                    <el-menu-item v-for="item in elementWeather" :key="item.id" :index="item.title"
                        @click="goAnchor(item.title)">
                        <el-icon>
                            <View />
                        </el-icon>
                        <span>{{ item.title }}</span>
                    </el-menu-item>
                </el-sub-menu>

                <el-sub-menu index="18">
                    <template #title>
                        <el-icon>
                            <SemiSelect />
                        </el-icon>
                        <span>内置算法</span>
                    </template>
                    <el-menu-item v-for="item in elementAlgorithm" :key="item.id" :index="item.title"
                        @click="goAnchor(item.title)">
                        <el-icon>
                            <View />
                        </el-icon>
                        <span>{{ item.title }}</span>
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
// 定义变量
$aside-bg-color: rgb(24.4, 33.8, 43.5);
$menu-bg-color: $aside-bg-color;
$logo-height: 60px;
$logo-img-size: 32px;
$collapsed-width: 60px;

.el-aside {
    background-color: $aside-bg-color;
    height: 100vh;
    width: 18%;

    // 滚动条样式
    .el-scrollbar {
        height: 100%;
        width: 100%;

        .el-menu {
            background-color: $menu-bg-color;
            width: 100%;
            border-right: none;

            // // 折叠状态
            // &.el-menu--collapse {
            //     width: $collapsed-width;

            //     h1 {
            //         display: none;
            //     }
            // }

            // 子菜单和菜单项通用样式
            .el-sub-menu {
                :deep(.el-sub-menu__title) {
                    span {
                        color: rgb(255, 255, 255);
                    }

                    .el-icon {
                        color: rgb(64, 184, 130);
                    }

                    &:hover {
                        background-color: rgb(42, 89, 137.5);
                        cursor: pointer;
                        color: #000;
                    }
                }
                .el-menu-item {
                    color: rgb(255, 255, 255);
                    background-color: rgb(37, 56, 78);

                    // 图标样式
                    .el-icon {
                        margin-right: 8px;
                        font-size: 18px;
                    }

                    &:hover {
                        color: #a39a9a;
                        background-color: rgb(50.8, 116.6, 184.5);
                    }

                    // 激活菜单项样式
                    .is-active {
                        color: #fff;
                        background-color: rgba(24, 144, 255, 0.2);
                    }
                }
            }
        }
    }
}

// Logo 样式
.logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height: $logo-height;
    text-decoration: none;
    color: white;
    padding: 0 16px;

    img {
        width: $logo-img-size;
        height: $logo-img-size;
        transition: all 0.3s;
    }

    h1 {
        margin-left: 8px;
        font-size: 16px;
        font-weight: 600;
        white-space: nowrap;
        transition: all 0.3s;
    }

    // 折叠状态下的logo样式
    .el-menu--collapse & {
        padding: 0;

        h1 {
            display: none;
        }
    }
}
</style>