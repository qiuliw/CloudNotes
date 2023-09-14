<script setup>
import { useLoginStore } from "@/stores/loginStore"
import { storeToRefs } from "pinia"; //解构为响应式数据
import Login from "@/components/login/Login.vue"
import Register from "@/components/register/Register.vue"
import RegisterSuccess from "@/components/register/RegisterSuccess.vue"

// 是否展示登录模态框
const loginStore = useLoginStore();
const { showLoginModal } = storeToRefs(loginStore);

// 登录模态框显示的内容 (1: 登录、2: 注册、3：注册成功)
const loginModalStep = ref(Login)
// 卡片切换
const changeModalStep = page => {
    if(page==1) loginModalStep.value=Login;
    if(page==2) loginModalStep.value=Register;
    if(page==3) loginModalStep.value=RegisterSuccess;
}

</script>
<template>
    <n-modal :show="showLoginModal" transform-origin="center" :close-on-esc="false" :mask-closable="false">
        <!-- 登录卡片 -->
        <Transition name="bounce" mode="out-in" >
            <component :is="loginModalStep" @changeStep="changeModalStep"/>
        </Transition>
    </n-modal>
</template>

<style>
.bounce-enter-active {
    animation: bounce-in 0.5s;
}
.bounce-leave-active {
    animation: bounce-in 0.3s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.25);
    }
    100% {
        transform: scale(1);
    }
}
</style>