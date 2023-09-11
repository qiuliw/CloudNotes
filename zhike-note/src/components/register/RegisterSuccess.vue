<script setup>
import { CheckCircleRound } from "@vicons/material"


</script>


<template>
    <n-card style="width: 420px;text-align: center;">
        <n-icon :component="CheckCircleRound" size="120" color="green"/>
        <h4 style="margin-top:0;margin-bottom: 10px;">欢迎加入伟伟笔记</h4>
        <n-text depth="3">请前往注册的邮箱，查看账号信息，
            <n-button text type="info">可点击此处前往登录</n-button>
        </n-text>
    </n-card>
</template>

