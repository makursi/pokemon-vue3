import { ref, watch, type Ref } from 'vue'
import type { Pokemon, UsePokemonReturn } from '../types/pokemon'

/**
 * 获取Pokemon信息的自定义Hook
 * @param pokemonNameRef - Pokemon名称的响应式引用
 * @returns 返回包含data、loading、error的对象
 */
export default function usePokemon(pokemonNameRef: Ref<string>) {
  // 数据状态
  const data = ref<Pokemon | null>(null)
  const loading = ref<boolean>(true)
  const error = ref<string | null>(null)

  // 监听Pokemon名称变化
  watch(pokemonNameRef, async (newName) => {
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
      const json = await res.json() as Pokemon;
      data.value = json
    } catch (err: any) {
      error.value = err.message
      data.value = null
    } finally {
      loading.value = false
    }
  }, { immediate: true })
  
  return {
    data,
    loading,
    error
  } as UsePokemonReturn
}