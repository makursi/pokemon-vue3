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
      // 使用默认的Iconify图标库，支持多种图标集
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
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