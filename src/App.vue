<script setup lang="ts">
import { ref } from 'vue'
import usePokemon from '../hooks/usePokemon'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
// 默认Pokemon名称
const pokemonName = ref('pikachu')

// 使用usePokemon hook获取数据
const { data: pokemonData, loading: loadingState, error: errorState } = usePokemon(pokemonName);
</script>

<template>
  <div id="app" class="min-h-screen flex flex-col">
    <!-- Header组件 -->
    <Header />
    
    <!-- 主内容区域 -->
    <main class="flex-1 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-900 dark:to-gray-800 py-8 px-4">
      <div class="container">
        <div class="card card-hover mb-8 dark:bg-gray-800 dark:border-gray-700">
          <h1 v-if="loadingState" class="text-2xl font-bold text-gray-800 dark:text-white mb-5 text-center">Loading...</h1>
          <h1 v-else-if="errorState" class="text-2xl font-bold text-red-500 mb-5 text-center">Error: {{ errorState }}</h1>
          <div v-else-if="pokemonData" class="text-center">
            <h1 class="text-3xl font-bold text-gray-800 dark:text-white mb-4">{{ pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1) }}</h1>
            <div class="description text-gray-600 dark:text-gray-300 mb-6">
              <p class="mb-2"><strong>ID:</strong> #{{ pokemonData.id }}</p>
              <p class="mb-2"><strong>Types:</strong>
                <span v-for="typeInfo in pokemonData.types" :key="typeInfo.slot" class="inline-flex">
                  <span :class="['type-tag', `bg-type-${typeInfo.type.name}`]" class="text-white mr-2">
                    {{ typeInfo.type.name.charAt(0).toUpperCase() + typeInfo.type.name.slice(1) }}
                  </span>
                </span>
              </p>  
            </div>
            <img :src="pokemonData.sprites.other['official-artwork'].front_default" :alt="pokemonData.name"
              class="w-64 h-auto mx-auto mb-4" />
          </div>
        </div>
        <div class="card card-hover dark:bg-gray-800 dark:border-gray-700">
          <h1 class="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">Go Search Your Pokemon's Information</h1>
          <label for="poke-input" class="block mb-4 text-center">
            <span class="mr-2 font-medium text-gray-700 dark:text-gray-300">Please input its En name:</span>
            <input id="poke-input" 
              type="text" 
              v-model="pokemonName" 
              class="px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-64"
              placeholder="e.g. pikachu"
            />
          </label>
          <h2 class="text-center mt-4"> 
            <a href="https://wiki.52poke.com/wiki/" class="text-primary hover:text-primary/80 underline transition-colors">
              Go check out all the data of pokemon
            </a>  
          </h2>
        </div>
      </div>
    </main>
    
    <!-- Footer组件 -->
    <Footer />
  </div>
</template>

<style scoped>
/* 保留scoped样式用于特定需要的情况 */
/* 主要样式已使用UnoCSS原子类实现 */
</style>
