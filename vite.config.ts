import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { viteMockServe } from 'vite-plugin-mock'

const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) =>{
  return {
    plugins: [
      vue(),
  
      viteMockServe({
        mockPath: 'mock', // mock文件地址
        watchFiles: true, // 是否监听mockPath内修改
        // ignore: undefined, // 读取文件时的忽略文件
        // configPath: 'vite.mock.config.ts', // 设置模拟读取的数据条目。 当文件存在并且位于项目根目录中时，将首先读取并使用该文件。 配置文件返回一个数组
        localEnabled:  command === 'serve',
        // enable: command === 'serve', // 是否启用
        // enable: true, // 是否启用
        // logger: true, // 控制台是否启用日志
      }),
  
      AutoImport({
        imports: ['vue'], // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        eslintrc: {
          enabled: true, // 是否自动生成 eslint 规则，建议生成之后设置 false 
          filepath: "./.eslintrc-auto-import.json", // 指定自动导入函数 eslint 规则的文件
        },
        resolvers: [
          ElementPlusResolver(), // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
          IconsResolver({ // 自动导入图标
            prefix: 'Icon',
          }),
        ],
        vueTemplate: true, // 是否在 vue 模板中自动导入
        dts: path.resolve(pathSrc, "types", "auto-imports.d.ts"), // 指定自动导入函数TS类型声明文件路径
      }),
  
      Components({
        resolvers: [
          ElementPlusResolver(), // 自动导入 Element Plus 组件
          IconsResolver({ // 自动注册图标组件
            enabledCollections: ['ep'], 
          })
        ],
        dts: path.resolve(pathSrc, "types", "components.d.ts"), // 指定自动导入组件TS类型声明文件路径
      }),
  
      Icons({
        autoInstall: true,
      }),
  
    ],
    resolve: {
      alias: {
        '@':pathSrc
      }
    },
    css: {
      // CSS 预处理器
      preprocessorOptions: {
          //define global scss variable
          scss: {
              javascriptEnabled: true,
              additionalData: `@use "@/styles/variables.scss" as *;`
          }
      }
    },
    server: {
      host: '0.0.0.0',
      port: 5173,
      // open: true,
      proxy: {
        // '/api': {
        //   target: 'http://jsonplaceholder.typicode.com',
        //   changeOrigin: true,
        //   rewrite: (path) => path.replace(/^\/api/, ''),
        // }
      }
    },
    
  }
})
