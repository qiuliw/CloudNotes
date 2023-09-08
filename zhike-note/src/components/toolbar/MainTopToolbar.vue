<script setup>
import { DarkModeRound,NotificationsNoneOutlined } from "@vicons/material"
import { useThemeStore } from "@/stores/themeStore"
import { storeToRefs } from "pinia";//解构为响应式数据

const themeStore = useThemeStore();
const { theme,isDarkTheme } = storeToRefs(themeStore);
const  { changeTheme }  = themeStore;

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
            <n-button tertiary type="primary">登录</n-button>
        
        </n-space>
    </n-space>

</template>