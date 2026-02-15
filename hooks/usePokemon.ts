import { ref, watch, type Ref } from 'vue'

//获取pokemon信息hook
export default function usePokemon(pokemonNameRef: Ref<string>) {
  //data
  const data = ref(null)
  const loading = ref(true)
  const error = ref(null)

  //监听newName
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
      const json = await res.json();
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
  }
}