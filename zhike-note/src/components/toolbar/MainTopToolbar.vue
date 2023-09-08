<script setup>
import { DarkModeRound,NotificationsNoneOutlined,EmailOutlined,LockOutlined } from "@vicons/material"
import { useThemeStore } from "@/stores/themeStore"
import { storeToRefs } from "pinia";//解构为响应式数据

const themeStore = useThemeStore();
const { theme,isDarkTheme } = storeToRefs(themeStore);
const  { changeTheme }  = themeStore;

const showLoginModal = ref(false)


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


    <!-- 弹出卡片 -->
    <n-modal :show="showLoginModal" transform-origin="center" :close-on-esc="false" :mask-closable="false">
        <n-card style="width: 400px;">
            <n-space justify="space-between" align="center">
                <h1>登录</h1>
                <n-text depth="3">
                    未有账号？
                    <n-button text type="info">
                        前往注册
                    </n-button>
                </n-text>
            </n-space>
            <!-- 登录表单 -->
            <n-form>
                <n-form-item  label="邮箱号码">
                    <n-input placeholder="请输入邮箱号码">
                        <template #prefix>
                            <n-icon :component="EmailOutlined"/>
                        </template>
                    </n-input>
                </n-form-item>
                <n-form-item  label="密码">
                    <n-input type="password" placeholder="请输入密码">
                        <template #prefix>
                            <n-icon :component="LockOutlined"/>
                        </template>
                    </n-input>
                </n-form-item>
                <n-form-item :show-label="false">
                    <n-checkbox>同意本公司的</n-checkbox>
                    <n-button text type="info">《条款与协议》</n-button>
                </n-form-item>
                <n-form-item :show-label="false">
                    <n-button type="success" block>登录</n-button>
                </n-form-item>
            </n-form>
            <n-space justify="center" style="cursor: pointer;">
                <n-text depth="3">忘记密码</n-text>
            </n-space>
        </n-card>
    </n-modal>
</template>