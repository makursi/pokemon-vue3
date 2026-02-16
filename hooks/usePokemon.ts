import { ref, watch, type Ref } from 'vue'

export default function usePokemon(pokemonNameRef: Ref<string>) {
  // 数据状态
  const data = ref<any | null>(null)
  const loading = ref<boolean>(true)
  const error = ref<string | null>(null)
  
  // 防抖定时器
  let debounceTimer: number | null = null

  // 监听Pokemon名称变化
  watch(pokemonNameRef, (newName) => {
    // 清除之前的定时器
    if (debounceTimer) {
      clearTimeout(debounceTimer)
    }
    
    // 设置新的定时器
    debounceTimer = window.setTimeout(async () => {
      const trimmed = newName.trim()
      if (!trimmed) {
        data.value = null;
        error.value = null;
        return
      }
      try {
        loading.value = true
        error.value = null
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${trimmed.toLowerCase()}`)
        if (!res.ok) throw new Error('pokemon not found')
        const json = await res.json();
        data.value = json
      } catch (err: any) {
        error.value = err.message
        data.value = null
      } finally {
        loading.value = false
      }
    }, 3000) // 300ms防抖延迟
  }, { immediate: true })
  
  return {
    data,
    loading,
    error
  }
}