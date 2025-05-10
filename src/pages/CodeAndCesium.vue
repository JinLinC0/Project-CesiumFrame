<template>
    <div class="app-continer">
        <SandpackProvider template="vue3" style="width: 100%; height: 100%;" :files="files" :theme="nightOwl">
            <SandpackLayout class="h-[80%] w-full">
                <!--菜单栏-->
                <!-- <div>
                    <SandpackFileExplorer />
                </div> -->
                <SandpackCodeEditor showLineNumbers style="height: 100%;" />
                <SandpackPreview style="height: 100%;" />
            </SandpackLayout>
            <SandpackLayout class="h-[20%] w-full">
                <SandpackConsole style="height: 100%;" />
            </SandpackLayout>
        </SandpackProvider>
    </div>
    <div class="btn-class">
        <el-button @click="indexBtn" style="background-color: rgb(33.2, 61.4, 90.5); border: 0cap;">
            <span style="color: aliceblue;">
                回到首页
            </span>
        </el-button>
    </div>
</template>

<script setup>
import { SandpackProvider, SandpackLayout, SandpackCodeEditor, SandpackPreview, SandpackConsole, SandpackFileExplorer } from 'sandpack-vue3';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { findVueCodeById } from '@/examples/CodeMap.js';
import { findFunctionCodeById } from '@/examples/FunctionMap.js';
import { nightOwl } from "@codesandbox/sandpack-themes";
 
const route = useRoute()
const router = useRouter()
const vueCode = ref()
const functionCode = ref()
const files = ref({
    "src/App.vue": {
        code: vueCode,
        readOnly: false,
        active: true,
        hidden: false
    },
    "src/function.js": {
        code: functionCode,
    }
});

// 跳转回首页
function indexBtn() {
    router.push(`/`)
}

onMounted(() =>{
    vueCode.value = findVueCodeById(route.query.id)
    functionCode.value = findFunctionCodeById(route.query.id)
})
</script>

<style scoped>
.btn-class{
  position: absolute;
  left: 150px;
  top: 6px;
}
.app-continer{
    width: 100vw;
    height: 100vh;
}
</style>