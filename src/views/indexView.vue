<template>
    <div class="app-continer">
        <div class="mt-5">
            <span class="text-base font-bold">太空任务</span>
            <div style="overflow-y: auto" class="container">
                <div v-for="item in elementSpaceMissions" :key="item.id" @click="indexBtn(item.title)" class="item-container">
                    <div :id="item.title">{{item.title}}</div>
                    <img :src="item.pngUrl" width="250">
                </div>
            </div>
        </div>
        <div class="mt-10">
            <span class="text-base font-bold">测站</span>
            <div style="overflow-y: auto" class="container">
                <div v-for="item in elementStation" :key="item.id" @click="indexBtn(item.title)" class="item-container">
                    <div :id="item.title">{{item.title}}</div>
                    <img :src="item.pngUrl" width="250">
                </div>
            </div>
        </div>
        <div class="mt-10">
            <span class="text-base font-bold">动目标</span>
            <div style="overflow-y: auto" class="container">
                <div v-for="item in elementMoving" :key="item.id" @click="indexBtn(item.title)" class="item-container">
                    <div :id="item.title">{{item.title}}</div>
                    <img :src="item.pngUrl" width="250">
                </div>
            </div>
        </div>
        <div class="mt-10">
            <span class="text-base font-bold">可见性</span>
            <div style="overflow-y: auto" class="container">
                <div v-for="item in elementVisible" :key="item.id" @click="indexBtn(item.title)" class="item-container">
                    <div :id="item.title">{{item.title}}</div>
                    <img :src="item.pngUrl" width="250">
                </div>
            </div>
        </div>
        <div class="mt-10">
            <span class="text-base font-bold">特效</span>
            <div style="overflow-y: auto" class="container">
                <div v-for="item in elementSpecialEffect" :key="item.id" @click="indexBtn(item.title)" class="item-container">
                    <div :id="item.title">{{item.title}}</div>
                    <img :src="item.pngUrl" width="250">
                </div>
            </div>
        </div>
        <div class="mt-10">
            <span class="text-base font-bold">图元</span>
            <div style="overflow-y: auto" class="container">
                <div v-for="item in elementGraphic" :key="item.id" @click="indexBtn(item.title)" class="item-container">
                    <div :id="item.title">{{item.title}}</div>
                    <img :src="item.pngUrl" width="250">
                </div>
            </div>
        </div>
        <div class="mt-10">
            <span class="text-base font-bold">场景设置</span>
            <div style="overflow-y: auto" class="container">
                <div v-for="item in elementSceneSet" :key="item.id" @click="indexBtn(item.title)" class="item-container">
                    <div :id="item.title">{{item.title}}</div>
                    <img :src="item.pngUrl" width="250">
                </div>
            </div>
        </div>
        <div class="mt-10">
            <span class="text-base font-bold">相机</span>
            <div style="overflow-y: auto" class="container">
                <div v-for="item in elementCamera" :key="item.id" @click="indexBtn(item.title)" class="item-container">
                    <div :id="item.title">{{item.title}}</div>
                    <img :src="item.pngUrl" width="250">
                </div>
            </div>
        </div>
        <div class="mt-10">
            <span class="text-base font-bold">天气</span>
            <div style="overflow-y: auto" class="container">
                <div v-for="item in elementWeather" :key="item.id" @click="indexBtn(item.title)" class="item-container">
                    <div :id="item.title">{{item.title}}</div>
                    <img :src="item.pngUrl" width="250">
                </div>
            </div>
        </div>
        <div class="mt-10">
            <span class="text-base font-bold">内置算法</span>
            <div style="overflow-y: auto" class="container">
                <div v-for="item in elementAlgorithm" :key="item.id" @click="indexBtn(item.title)" class="item-container">
                    <div :id="item.title">{{item.title}}</div>
                    <img :src="item.pngUrl" width="250">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { elementSpaceMissionsMap, elementStationMap, elementMovingMap, elementVisibleMap, elementSpecialEffectMap, elementGraphicMap, elementSceneSetMap, elementCameraMap, elementWeatherMap, elementAlgorithmMap } from '@/views/ElementMap';

const router = useRouter()
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


// 跳转到对应的编码编辑内容
function indexBtn(id) {
    router.push(`/CodeAndCesium/?id=${id}`)
}
</script>

<style lang="scss" scoped>
.app-continer{
    width: 100vw;
    height: 100vh;
}
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.item-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  transition: background-color 0.3s; /* 添加过渡效果 */

  &:hover {
    background-color: #e9e7e7;
    cursor: pointer;
  }
}
</style>