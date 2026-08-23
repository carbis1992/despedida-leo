<script setup lang="ts">
import { ref } from 'vue'
import { usePartyStore } from '../stores/party'

const party = usePartyStore()
const name = ref('')

function confirmAttendance() {
  party.confirmAttendance(name.value)
}
</script>

<template>
  <main class="home">
    <p class="eyebrow">Una noche para recordar</p>
    <h1>Despedida de Leo</h1>
    <p class="intro">Estamos preparando una celebración especial. Pronto vas a encontrar acá todos los detalles.</p>

    <form class="rsvp" @submit.prevent="confirmAttendance">
      <label for="guest-name">Confirmá tu asistencia</label>
      <div class="rsvp__controls">
        <input id="guest-name" v-model="name" type="text" placeholder="Tu nombre" required />
        <button type="submit">Confirmar</button>
      </div>
      <p v-if="party.hasConfirmed" class="confirmation">Gracias, {{ party.guestName }}. ¡Te esperamos!</p>
    </form>
  </main>
</template>
