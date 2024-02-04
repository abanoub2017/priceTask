import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useChartStore = defineStore('counter', () => {
  const chartNumber = ref(0)
  function setChartNumber(payload:any) {    
    chartNumber.value = payload
  }

  return { chartNumber, setChartNumber }
})
