<template>
    <div class="app-continer">
        <div class="mt-10">
            <span class="text-base font-bold">图元</span>
            <div class="flex-container">
                <div v-for="item in elementGraphic" :key="item.id" @click="indexBtn(item.title)" class="flex-item">
                    <div :id="item.title">{{ item.title }}</div>
                    <img :src="item.pngUrl" width="250">
                </div>
            </div>
        </div>
        <div class="mt-10">
            <span class="text-base font-bold">内置算法</span>
            <div class="flex-container">
                <div v-for="item in elementAlgorithm" :key="item.id" @click="indexBtn(item.title)" class="flex-item">
                    <div :id="item.title">{{ item.title }}</div>
                    <img :src="item.pngUrl" width="250">
                </div>
            </div>
        </div>
        <div class="mt-10">
            <span class="text-base font-bold">场景设置</span>
            <div class="flex-container">
                <div v-for="item in elementSceneSet" :key="item.id" @click="indexBtn(item.title)" class="flex-item">
                    <div :id="item.title">{{ item.title }}</div>
                    <img :src="item.pngUrl" width="250">
                </div>
            </div>
        </div>
        <div class="mt-10">
            <span class="text-base font-bold">相机</span>
            <div class="flex-container">
                <div v-for="item in elementCamera" :key="item.id" @click="indexBtn(item.title)" class="flex-item">
                    <div :id="item.title">{{ item.title }}</div>
                    <img :src="item.pngUrl" width="250">
                </div>
            </div>
        </div>
        <div class="mt-10">
            <span class="text-base font-bold">天气</span>
            <div class="flex-container">
                <div v-for="item in elementWeather" :key="item.id" @click="indexBtn(item.title)" class="flex-item">
                    <div :id="item.title">{{ item.title }}</div>
                    <img :src="item.pngUrl" width="250">
                </div>
            </div>
        </div>
        <div class="mt-10">
            <span class="text-base font-bold">动目标</span>
            <div class="flex-container">
                <div v-for="item in elementMoving" :key="item.id" @click="indexBtn(item.title)" class="flex-item">
                    <div :id="item.title">{{ item.title }}</div>
                    <img :src="item.pngUrl" width="250">
                </div>
            </div>
        </div>
        <div class="mt-10">
            <span class="text-base font-bold">测站</span>
            <div class="flex-container">
                <div v-for="item in elementStation" :key="item.id" @click="indexBtn(item.title)" class="flex-item">
                    <div :id="item.title">{{ item.title }}</div>
                    <img :src="item.pngUrl" width="250">
                </div>
            </div>
        </div>
        <div class="mt-5">
            <span class="text-base font-bold">太空任务</span>
            <div class="flex-container">
                <div v-for="item in elementSpaceMissions" :key="item.id" @click="indexBtn(item.title)"
                    class="flex-item">
                    <div :id="item.title">{{ item.title }}</div>
                    <img :src="item.pngUrl" width="250">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { elementSpaceMissionsMap, elementStationMap, elementMovingMap, elementGraphicMap, elementSceneSetMap, elementCameraMap, elementWeatherMap, elementAlgorithmMap } from '@/views/ElementMap';

const router = useRouter()
const elementSpaceMissions = ref()
const elementStation = ref()
const elementMoving = ref()
const elementGraphic = ref()
const elementSceneSet = ref()
const elementCamera = ref()
const elementWeather = ref()
const elementAlgorithm = ref()

elementSpaceMissions.value = elementSpaceMissionsMap;
elementStation.value = elementStationMap;
elementMoving.value = elementMovingMap;
elementGraphic.value = elementGraphicMap;
elementSceneSet.value = elementSceneSetMap;
elementCamera.value = elementCameraMap;
elementWeather.value = elementWeatherMap;
elementAlgorithm.value = elementAlgorithmMap;


// 跳转到对应的编码编辑内容
function indexBtn(id) {
    router.push(`/CodeAndCesium/?id=${id}`)
}
</script>

<style lang="scss" scoped>
.app-continer {
    width: 100%;
    height: 100%;

    div {
        width: 100%;
        height: 100%;

        .text-base {
            color: rgb(255, 255, 255);
        }

        .flex-container {
            background-color: rgb(33.2, 61.4, 90.5);
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            padding: 10px;
            /* 添加内边距 */

            .flex-item {
                background-color: rgb(33.2, 61.4, 90.5);
                flex: 0 0 calc(25% - 10px);
                /* 固定宽度，不伸缩 */
                max-width: calc(25% - 10px);
                /* 确保最大宽度不超过25% */
                min-width: 0;
                box-sizing: border-box;
                padding: 5px;
                transition: background-color 0.3s;

                div {
                    color: rgb(255, 255, 255);
                    white-space: nowrap;
                    /* 防止文字换行 */
                    overflow: hidden;
                    text-overflow: ellipsis;
                    /* 文字过长显示省略号 */
                    text-align: center;
                    /* 水平居中 */
                    display: flex;
                    /* 启用 flexbox */
                    align-items: center;
                    /* 垂直居中 */
                    justify-content: center;
                    /* 水平居中 */
                    height: 100%;
                }

                img {
                    margin-top: 5px;
                    width: 100%;
                    height: auto;
                    /* 保持图片比例 */
                }

                &:hover {
                    background-color: rgb(42, 89, 137.5);
                    cursor: pointer;
                }
            }
        }
    }
}
</style>