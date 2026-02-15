<template>
  <footer class="footer bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8">
    <div class="container mx-auto px-4">
      <!-- 作者信息卡片 -->
      <div class="author-card bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 max-w-md mx-auto mb-6">
        <div class="flex flex-col items-center text-center">
          <!-- 头像 -->
          <div class="avatar mb-4">
            <img 
              src="../../public/avatar.webp" 
              alt="Author Avatar" 
              class="w-24 h-24 rounded-full object-cover border-4 border-primary/20 shadow-md"
            />
          </div>
          
          <!-- 作者信息 -->
          <div class="author-info mb-4">
            <h3 class="text-xl font-bold text-gray-800 dark:text-white mb-1">Pokemon Enthusiast</h3>
            <p class="text-gray-600 dark:text-gray-300">Frontend Developer & Pokemon Trainer</p>
          </div>
          
          <!-- GitHub链接 -->
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            class="github-link flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-md transition-colors"
          >
            <span class="text-lg">📱</span>

          </a>
        </div>
      </div>
      
      <!-- 版权信息 -->
      <div class="text-center text-gray-600 dark:text-gray-400 text-sm">
        <p>© {{ new Date().getFullYear() }} Pokemon Info App</p>
        <p class="mt-1">Built with Vue 3 & UnoCSS</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
/**
 * Footer组件
 * 包含作者信息卡片（头像、名称、GitHub链接）和版权信息
 * 支持亮暗模式切换
 */
</script>

<style scoped>
/* 作者卡片样式 */
.author-card {
  transition: all 0.3s ease;
}

.author-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

/* 暗模式下的卡片悬停效果 */
.dark .author-card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

/* GitHub链接样式 */
.github-link {
  transition: all 0.2s ease;
}

.github-link:hover {
  transform: translateY(-1px);
}
</style>