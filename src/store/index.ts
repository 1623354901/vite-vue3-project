import { defineStore } from  'pinia'

export const useTestStore = defineStore('test',() => {
  const count = ref(0)
  
  const double = computed(() => count.value * 2)

  function increment() {
    count.value++
  }

  return { count, double, increment }
})