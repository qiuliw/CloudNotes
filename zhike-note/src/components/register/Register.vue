<script setup>
import { EmailOutlined } from "@vicons/material"

let emits = defineEmits(['changeStep'])

// 注册表单值
const registerFormValue = ref({
    email: "",
    vc: "",
    trim: false
})

// 注册表单验证规则
const registerFormRules = {
    email: [{
            key: "mail",
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
    vc: {
        required: true,
        message: "请输入验证码",
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

// 注册表单引用
const registerFormRef = ref(null)

// 去注册
const toRegister = (e) => {
    e.preventDefault();
    //注册表单合法性验证
    registerFormRef.value?.validate((errors)=>{
        if(!errors){
            alert("登录成功");
        }
    })
}


// ----------- 获取验证码 -----------
// 按钮状态
const btnCountDownStatus = ref({
    text: '获取验证码', // 显示的文本
    time: 30, // 还有多少秒结束
    disabled: false, //是否禁用按钮
    clock: null // 按钮倒计时任务
})

// 按钮倒计时
const btnCountDown = () => {
    
    btnCountDownStatus.value.disabled = true; //禁用按钮
    btnCountDownStatus.value.text = btnCountDownStatus.value.time +'秒重新获取' //按钮显示文本

    btnCountDownStatus.value.clock = setInterval( () => {
        if(btnCountDownStatus.value.time === 1){
            // 不需要计时了
            resetBtnCountDownStatus();//重设获取验证码的状态
        }else {
            // 需要倒计时
            btnCountDownStatus.value.time--; // 时间递减
            btnCountDownStatus.value.text = btnCountDownStatus.value.time +'秒重新获取' //按钮显示文本
        }
    },1000)
}

// 重设获取验证码按钮的状态
const resetBtnCountDownStatus = () => {
    //清除任务
    clearInterval(btnCountDown.value.clock)
    btnCountDown.value.text="获取验证码"
    btnCountDown.value.time= 30
    btnCountDown.value.disabled=false;
}

// 获取验证码
const getEmailVC = ()=>{
    registerFormRef.value?.validate(
        (errors) => {
            if(!errors){
                btnCountDown()
            }
        },
        (rule) => {
            // 邮箱输入框验证
            return rule?.key === "mail"
        }
    )
}


</script>

<template>
    <n-card style="width: 400px;">
        <!-- 前往登录 -->
        <n-space justify="space-between" align="center">
            <h1>注册</h1>
            <n-text depth="3">
                已有账号？
                <n-button text type="info" @click="emits('changeStep',1)">
                    前往登录
                </n-button>
            </n-text>
        </n-space>
        <!-- 注册表单 -->
        <n-form :model="registerFormValue" :rules="registerFormRules" ref="registerFormRef" >
            <n-form-item  label="邮箱号码" path="email" first>
                <n-input v-model:value="registerFormValue.email" placeholder="请输入邮箱号码">
                    <template #prefix>
                        <n-icon :component="EmailOutlined"/>
                    </template>
                </n-input>
            </n-form-item>

            <n-grid :cols="2" :x-gap="24">
                <n-form-item-gi  label="验证码" path="vc">
                    <n-input placeholder="请输入验证码" v-model:value="registerFormValue.vc"/>
                </n-form-item-gi>
                <n-form-item-gi>
                    <n-button block secondary type="success" @click="getEmailVC" :disabled="btnCountDownStatus.disabled">{{ btnCountDownStatus.text }}</n-button>
                </n-form-item-gi> 
            </n-grid>
            
            <n-form-item :show-label="false" path="trim">
                <n-checkbox v-model:checked="registerFormValue.trim">同意本公司的</n-checkbox>
                <n-button text type="info">《条款与协议》</n-button>
            </n-form-item>
            <n-form-item :show-label="false">
                <n-button type="success" @click="toRegister" block>注册</n-button>
            </n-form-item>
        </n-form>
    </n-card>
</template>