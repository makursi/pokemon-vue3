<template>
  <header class="header bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
    <div class="container mx-auto px-4 py-3 flex items-center justify-between">
      <!-- Logo -->
        <div class="flex items-center gap-2">
          <span class="text-2xl text-primary">🔴</span>
          <h1 class="text-xl font-bold text-gray-800 dark:text-white">Pokemon Info</h1>
        </div>
        
        <!-- 右侧：图标导航和主题切换 -->
        <div class="flex items-center gap-3">
          <!-- 亮暗模式切换 (现代化按钮) -->
          <button 
            @click="toggleTheme" 
            class="theme-toggle flex items-center justify-center w-10 h-10 rounded bg-white dark:bg-gray-800 shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300"
            title="Toggle Theme"
          >
            <span v-if="isDark" class="text-yellow-400 transition-colors duration-300">☀️</span>
            <span v-else class="text-gray-600 dark:text-gray-300 transition-colors duration-300">🌙</span>
          </button>
          
          <!-- 图标导航栏 (最右侧) -->
          <nav class="flex items-center gap-3">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              class="nav-icon"
              title="GitHub"
            >
              <img src="/github.svg" alt="GitHub" class="w-6 h-6 hover:opacity-80 transition-opacity" />
            </a>
            <a 
              href="https://bilibili.com" 
              target="_blank" 
              rel="noopener noreferrer"
              class="nav-icon"
              title="Bilibili"
            >
              <img src="/bilibili-color.svg" alt="Bilibili" class="w-6 h-6 hover:opacity-80 transition-opacity" />
            </a>
          </nav>
        </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

/**
 * Header组件
 * 包含应用Logo、GitHub和Bilibili图标导航，以及应用标题
 * 新增亮暗模式切换功能
 */

// 主题状态
const isDark = ref(false)

/**
 * 切换主题
 * 切换亮暗模式并保存到localStorage
 */
const toggleTheme = () => {
  isDark.value = !isDark.value
  updateTheme()
}

/**
 * 更新主题
 * 根据当前主题状态更新HTML元素的class和localStorage
 */
const updateTheme = () => {
  const html = document.documentElement
  if (isDark.value) {
    html.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    html.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

/**
 * 组件挂载时初始化主题
 * 从localStorage读取主题设置，或使用系统偏好
 */
onMounted(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
  } else {
    // 使用系统偏好
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  updateTheme()
})
</script>

<style scoped>
/* 导航图标样式 */
.nav-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 0.375rem;
  transition: all 0.2s ease;
}

.nav-icon:hover {
  background-color: #f3f4f6;
  transform: translateY(-1px);
}

/* 暗模式下的导航图标悬停效果 */
.dark .nav-icon:hover {
  background-color: #374151;
}

/* 主题切换按钮样式 */
.theme-toggle {
  transition: all 0.2s ease;
}

</style>