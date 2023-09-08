import { defineStore } from 'pinia'
import { darkTheme } from 'naive-ui';
import { LightbulbOutlined,DarkModeRound } from '@vicons/material'
//主题的全局状态
export const useThemeStore = defineStore(
    "theme",
    ()=>{
    // 是否是暗系主题
    const isDarkTheme = ref(false)

    // 计算属性： 暗-灯泡 、亮-月牙
    const theme = computed(()=>{
        if(isDarkTheme.value){
            //暗主题-灯泡
            return {
                name: darkTheme,
                icon: LightbulbOutlined
            }
        }else{
            // 亮主题-月芽
            return {
                name: null,
                icon: DarkModeRound
            }
        }
    })

    //
    const changeTheme = () => {
        isDarkTheme.value=!isDarkTheme.value
    }

    return {isDarkTheme,theme,changeTheme}
},{
    persist: {
        Storage: localStorage, //本地存储
        paths: ["isDarkTheme"],//将 isDarkTheme 持久化保存
    }
}
)