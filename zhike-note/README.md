
`vue3`、`vite`、`pinia`、`vue-router`、`naive-ui`

```
pnpm i -D naiveui
pnpm i -D vfonts #字体
pnpm i -D @vicons/material #图标
```

```
// 你 App 的入口 js 文件
// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'
```

自动引入
```
pnpm i -D unplugin-auto-import 
```
`vite.config.ts`
```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue'],
    }),
  ],
})
```




