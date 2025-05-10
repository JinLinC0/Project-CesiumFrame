<template>
    <el-aside>
        <el-scrollbar>
            <el-menu unique-opened :collapse="isCollapse">
                <a href="/" class="logo">
                    <img src="@/assets/vue.svg" alt="">
                    <h1>Cesium Api</h1>
                </a>
                <el-menu-item v-for="item in ApiDatas" :key="item.id" :index="item.title" @click="goAnchor(item.apiName)">
                    <span>{{item.apiName}}</span>
                </el-menu-item>    
            </el-menu>
        </el-scrollbar>
    </el-aside>
</template>

<script setup>
import { ApiDatas } from '@/pages/cesium_api_deep';

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
    width: auto;
}
.el-menu{
    background-color: #e9e9eb;
    width: 200px;
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