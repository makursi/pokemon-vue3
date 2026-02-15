import { defineConfig } from 'unocss'
import presetWind from '@unocss/preset-wind'
import presetIcons from '@unocss/preset-icons'
import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
  /**
   * UnoCSS配置
   * 包含Wind预设（Tailwind CSS兼容）、Icons预设和常用转换器
   */
  presets: [
    /**
     * Wind预设 - 提供Tailwind CSS v3兼容的工具类
     */
    presetWind({
      // 自定义主题配置
      theme: {
        colors: {
          // 基础颜色
          primary: '#3b82f6',
          secondary: '#64748b',
          accent: '#f59e0b',
          
          // Pokemon主题颜色
          pokemon: {
            red: '#ef4444',
            blue: '#3b82f6',
            yellow: '#f59e0b',
            green: '#10b981',
            purple: '#8b5cf6',
            pink: '#ec4899'
          },
          
          // 类型颜色
          type: {
            fire: '#ef4444',
            water: '#3b82f6',
            grass: '#10b981',
            electric: '#f59e0b',
            ice: '#06b6d4',
            fighting: '#f97316',
            poison: '#8b5cf6',
            ground: '#84cc16',
            flying: '#8b5cf6',
            psychic: '#ec4899',
            bug: '#84cc16',
            rock: '#a16207',
            ghost: '#7c3aed',
            dragon: '#7c3aed',
            dark: '#4b5563',
            steel: '#94a3b8',
            fairy: '#f9a8d4'
          }
        },
        
        // 自定义字体
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          pokemon: ['"Pokemon Solid"', 'sans-serif']
        }
      }
    }),
    
    /**
     * Icons预设 - 提供CSS图标支持
     * 使用Iconify图标库
     */
    presetIcons({
      scale: 1.2,
      warn: true,
      collections: {
        // 添加Heroicons图标集
        heroicons: {
          sun: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" clip-rule="evenodd"/></svg>',
          moon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd"/>',
          github: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>',
          pokeball: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"/></svg>'
        },
        // 添加Remix Icon图标集
        ri: {
          'bilibili-fill': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21.5 9.592a8.249 8.249 0 00-4.095-1.553v5.705a8.249 8.249 0 004.095-1.553v-2.599zM12.851 5.947c1.792.469 3.149 1.742 3.149 3.24v5.623c0 1.498-1.357 2.771-3.149 3.24v-12.103zm-3.701-2.888a12.26 12.26 0 012.649.975v12.103c-1.18-.431-2.098-1.259-2.65-2.288V3.856zM1.5 8.087a12.25 12.25 0 014.095-1.553v5.705A12.25 12.25 0 011.5 8.087V5.488zM10.803.954l-.038-.012c-2.802.818-4.965 3.107-4.965 5.836v9.331c0 2.729 2.163 5.018 4.965 5.836l.038-.012A15.28 15.28 0 017.5 19.46V4.54a15.28 15.28 0 013.303-3.586z"/></svg>'
        }
      }
    })
  ],
  
  /**
   * 转换器配置
   */
  transformers: [
    /**
     * 指令转换器 - 支持@apply、@screen等指令
     */
    transformerDirectives(),
    
    /**
     * 变体组转换器 - 支持 (hover:bg-red-500 hover:text-white) 这样的语法
     */
    transformerVariantGroup()
  ],
  
  /**
   * 自定义规则
   */
  rules: [
    // 自定义规则可以在这里添加
  ],
  
  /**
   * 自定义快捷方式
   */
  shortcuts: [
    // 卡片样式
    ['card', 'bg-white rounded-lg shadow-md p-4 border border-gray-200'],
    ['card-hover', 'hover:shadow-lg hover:border-gray-300 transition-all duration-300'],
    
    // 按钮样式
    ['btn', 'px-4 py-2 rounded-md font-medium transition-all duration-200'],
    ['btn-primary', 'bg-primary text-white hover:bg-primary/90'],
    ['btn-secondary', 'bg-secondary text-white hover:bg-secondary/90'],
    ['btn-accent', 'bg-accent text-white hover:bg-accent/90'],
    
    // 类型标签样式
    ['type-tag', 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium'],
    
    // 响应式容器
    ['container', 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8']
  ],
  
  /**
   * 安全列表 - 确保这些类被包含在最终的CSS中
   */
  safelist: [
    // 可以添加需要强制包含的类
  ],
  
  /**
   * 块列表 - 排除这些类
   */
  blocklist: [
    // 可以添加需要排除的类
  ]
})