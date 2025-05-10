<template>
    <el-header style="display: flex; align-items: center; background-color: rgb(28.8, 47.6, 67)">
        <!-- <el-icon @click="toggleCollapse">
            <Expand v-show="isCollapse" />
            <Fold v-show="!isCollapse" />
        </el-icon> -->
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }" class="text-base">
                <span style="color: rgb(255, 255, 255);">首页</span>
            </el-breadcrumb-item>
        </el-breadcrumb>

        <div style="flex: 1; text-align: center;">
            <span style="font-size: 24px; color: rgb(255, 255, 255);">基于VUE的Cesium在线沙盒系统</span>
        </div>

        <span class="text-xs" style="color: #8a8a8a">tips: 由于资源的内容存放在github上，加载可能出错或过慢，有条件可挂vpn</span>
    </el-header>
</template>

<script setup>
import { ref } from "vue"
import { Expand, Fold } from "@element-plus/icons-vue";
import { useRouter } from 'vue-router';
import { UploadFilled } from '@element-plus/icons-vue';

const props = defineProps({
    isCollapse: {
        type: Boolean,
    }
});
const emit = defineEmits(['update:isCollapse']);
const dialogVisible = ref(false)

const caseName = ref('')
const imageUrl = ref('/src/assets/PointOne.png')

const router = useRouter()

function goToApiDocument() {
    router.push(`/ApiDocument`)
}

const toggleCollapse = () => {
    emit('update:isCollapse', !props.isCollapse);
};

// 打开添加案例对话框
function showAddCaseDialog() {
    dialogVisible.value = true;
    caseName.value = '';
}

// 添加案例函数
function addCase() {
    const newCase = {
        title: caseName.value,
        pngUrl: imageUrl.value
    };
    console.log(newCase)
}
</script>

<style lang="scss" scoped>
.el-header {
    display: flex;
    align-items: center;
    background-color: #dedfe0;

    .el-icon {
        margin-right: 15px;
    }
}
</style>