import { defineStore } from 'pinia'
//关于登录模态框的全局状态
export const useLoginStore = defineStore(
  'login-modal',
  () => {
    // 是否显示登录模态框
    const showLoginModal = ref(false)

    // 改变模态框显示状态
    const changeShowLoginModal = show => {
        showLoginModal.value = show;
    }
    return { showLoginModal, changeShowLoginModal }
  }
  
)