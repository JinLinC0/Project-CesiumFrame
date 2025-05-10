<template>
    <div class="app-continer">
        <el-container>
            <AsideMenuBarApi :isCollapse="isCollapse" @update:isCollapse="handleCollapseUpdate" />
            <el-container class="main">
                <el-main>
                    <el-scrollbar>
                        <div v-for="item in ApiDatas" :key="item.id" :index="item.title" class="mb-10">
                            <div :id="item.apiName">
                                <span class="text-base font-bold">{{item.apiName}}</span>
                            </div>
                            <div>
                                <span>{{item.description}}</span>
                            </div>
                            <div>
                                <span class="font-bold">members</span>
                            </div>
                            <div>
                                <span class="font-bold">methods</span>
                            </div>
                            <el-divider />
                        </div>
                    </el-scrollbar>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
    
<script setup>
import AsideMenuBarApi from '@/components/AsideMenuBarApi.vue';
import { ref } from "vue";
import { ApiDatas } from './cesium_api_deep';

const isCollapse = ref(false)

const handleCollapseUpdate = (newCollapseState) => {
    isCollapse.value = newCollapseState;
};
</script>

<style lang="scss" scoped>
.app-continer{
    width: 100vw;
    height: 100vh;
}
.main{
    flex-direction: column;
    height: 100vh;
}
.el-main{
    background-color: #f4f4f5;
    padding-right: 0;
}
</style>