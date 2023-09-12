<script setup>
import { DarkModeRound,NotificationsNoneOutlined } from "@vicons/material"
import { useThemeStore } from "@/stores/themeStore"
import { storeToRefs } from "pinia"; //解构为响应式数据
import Login from "@/components/login/Login.vue"
import Register from "@/components/register/Register.vue"
import RegisterSuccess from "@/components/register/RegisterSuccess.vue"

// 全局主题
const themeStore = useThemeStore();
const { theme,isDarkTheme } = storeToRefs(themeStore);
const  { changeTheme }  = themeStore;

// 是否展示登录对话框
const showLoginModal = ref(false)

// 登录模态框显示的内容(1: 登录、2: 注册、3：注册成功)
const loginModalStep = ref(RegisterSuccess)

</script>

<template>
    <n-space justify="space-between" style="height:100%" align="center">
        <n-text>伟伟笔记</n-text>
        <n-space align="center">
            <!-- 头像 -->
            <n-avatar
                round
                src="../../../public/favicon.ico"
                style="position: relative; top:3px"
            />

            <!-- 分割线 -->
            <n-divider vertical/>
            
            <!-- 消息 -->
            <n-badge dot processing type="success" :offset="[-6,4]">
                <n-button circle>
                    <n-icon size="18" :component="NotificationsNoneOutlined"/>
                </n-button>
            </n-badge>
            
            <!-- 主题按钮 -->
            <n-button circle tertiary @click="changeTheme()">
                <n-icon size="20" :component="theme.icon"/>
            </n-button>
            
            <!-- 登录按钮 -->
            <n-button tertiary type="primary" @click="showLoginModal = true">登录</n-button>
        
        </n-space>
    </n-space>
    
    <n-modal :show="showLoginModal" transform-origin="center" :close-on-esc="false" :mask-closable="false">
        <!-- 登录卡片 -->
        <Transition name="bounce" mode="out-in">
            <component :is="loginModalStep"/>
        </Transition>
    </n-modal>
</template>

<style scoped>
.bounce-enter-active {
    animation: bounce-in 0.3s;
}
.bounce-leave-active {
    animation: bounce-in 0.3s reverse;
}

@keyframes bounce-in {
    0% {
        transition: scale(0);
    }
    50% {
        transition: scale(1.25);
    }
    100% {
        transition: scale(1);
    }
}
</style>