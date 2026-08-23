import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePartyStore = defineStore('party', () => {
  const guestName = ref('')
  const hasConfirmed = ref(false)

  function confirmAttendance(name: string) {
    guestName.value = name.trim()
    hasConfirmed.value = guestName.value.length > 0
  }

  return { guestName, hasConfirmed, confirmAttendance }
})
