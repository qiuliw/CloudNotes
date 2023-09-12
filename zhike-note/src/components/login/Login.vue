<script setup>
import { EmailOutlined,LockOutlined } from "@vicons/material"


// 自定义事件
let emits = defineEmits(['changeStep'])


// 登录表单值
const loginFormValue = ref({
    email: "",
    password: "",
    trim: false
})

// 登录表单验证规则
const loginFormRules = {
    email: [{
            required: true,
            message: "请输入邮箱",
            trigger: ["input","blur"]
        },{
            message: "请输入正确邮箱格式",
            trigger: ["input","blur"],
            validator: (rule,value) =>{
                return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);
            }    
        }
    ],
    password: {
        required: true,
        message: "请输入密码",
        trigger: ["input","blur"]
    },
    trim: {
        message: "请认真阅读本公司的条款与协议",
        trigger: "change",
        validator:(rule,value) =>{
            return value;
        }
    }
}

const loginFormRef = ref(null)

// 去登陆
const toLogin = (e) => {
    e.preventDefault();
    //表单合法性验证
    loginFormRef.value?.validate((errors)=>{
        if(!errors){
            alert("登录成功");
        }
    })
}


</script>

<template>
    <n-card style="width: 400px;">
        <!-- 前往注册 -->
        <n-space justify="space-between" align="center">
            <h1>登录</h1>
            <n-text depth="3">
                未有账号？
                <n-button text type="info" @click="emits('changeStep',2)">
                    前往注册
                </n-button>
            </n-text>
        </n-space>
        <!-- 登录表单 -->
        <n-form :model="loginFormValue" :rules="loginFormRules" ref="loginFormRef" >
            <n-form-item  label="邮箱号码" path="email" first>
                <n-input v-model:value="loginFormValue.email" placeholder="请输入邮箱号码">
                    <template #prefix>
                        <n-icon :component="EmailOutlined"/>
                    </template>
                </n-input>
            </n-form-item>
            <n-form-item  label="密码" path="password" first>
                <n-input v-model:value="loginFormValue.password"  type="password" placeholder="请输入密码">
                    <template #prefix>
                        <n-icon :component="LockOutlined"/>
                    </template>
                </n-input>
            </n-form-item>
            <n-form-item :show-label="false" path="trim">
                <n-checkbox v-model:checked="loginFormValue.trim">同意本公司的</n-checkbox>
                <n-button text type="info">《条款与协议》</n-button>
            </n-form-item>
            <n-form-item :show-label="false">
                <n-button type="success" @click="toLogin" block>登录</n-button>
            </n-form-item>
        </n-form>
        <!-- 忘记密码 -->
        <n-space justify="center" style="cursor: pointer;">
            <n-text depth="3">忘记密码</n-text>
        </n-space>
    </n-card>
</template>