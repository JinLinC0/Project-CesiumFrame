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
  background-color: #f4f4f5;
  padding-right: 0;
}
</style>