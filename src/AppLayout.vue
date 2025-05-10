<template>
  <div class="app-continer">
    <el-container>
      <AsideMenuBar :isCollapse="isCollapse" @update:isCollapse="handleCollapseUpdate" />
      <el-container class="header-and-main">
        <HeaderMenuBar :isCollapse="isCollapse" @update:isCollapse="handleCollapseUpdate" />
        <el-main>
          <el-scrollbar>
            <router-view />
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
  
<script setup>
import AsideMenuBar from '@/components/AsideMenuBar.vue';
import HeaderMenuBar from '@/components/HeaderMenuBar.vue'
import { ref } from "vue";

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
.header-and-main{
  flex-direction: column;
  height: 100vh;
  width: 75%;
}
.el-main{
  background-color: rgb(33.2, 61.4, 90.5);
  padding-right: 0;
  padding-left: 20;
  padding-top: 5;
  padding-bottom: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>