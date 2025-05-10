<template>
    <div class="app-continer">
        <SandpackProvider template="vue3" style="width: 100%; height: 100%;" :files="files">
            <SandpackLayout class="h-[80%] w-full">
                <!-- <div>
                    <SandpackFileExplorer />
                </div> -->
                <SandpackCodeEditor showLineNumbers style="height: 100%;" />
                <SandpackPreview style="height: 100%;" />
            </SandpackLayout>
            <SandpackLayout class="h-[20%] w-full">
                <SandpackConsole style="height: 100%;" class="bg-zinc-100" />
            </SandpackLayout>
        </SandpackProvider>
    </div>
    <div class="btn-class">
        <el-button @click="indexBtn">回到首页</el-button>
    </div>
</template>

<script setup>
import { SandpackProvider, SandpackLayout, SandpackCodeEditor, SandpackPreview, SandpackConsole, SandpackFileExplorer } from 'sandpack-vue3';
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { findVueCodeById } from '@/examples/CodeMap.js';
import { findFunctionCodeById } from '@/examples/FunctionMap.js';
 
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