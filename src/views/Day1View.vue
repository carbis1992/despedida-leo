<template>
  <section class="itinerary">
    <button type="button" @click="goBack" class="itinerary__btn">&lt;&lt;</button>

    <div class="itinerary__container">
      <div class="itinerary__title-section">
        <h1 class="itinerary__title">DAY 1</h1>
        <p class="itinerary__subtitle">
          {{ typedText }}<span class="itinerary__cursor" v-if="isTyping"></span>
        </p>
      </div>
      <div class="itinerary__details" :class="{ 'itinerary__details--visible': showDetails }">
        <p class="itinerary__text">Hay un paquete para vos... <br />pero, donde?</p>
        <p class="itinerary__p">
          "Donde cae la lluvia cuando quieres cantar, y los jabones te hacen bailar. Entre espuma y
          vapor, tu paquete te espera con amor."
        </p>
        <input type="text" name="adivinanza" v-model="answer" placeholder="¿Donde estoy?" />
      </div>
      <p class="itinerary__rigth" v-show="correctAnswer">CORRECTO !</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function goBack() {
  router.push({ name: 'welcome' })
}

// Guarda el texto que escribe el usuario
const answer = ref('')

// Define la respuesta correcta (en minúsculas para facilitar la validación)
const CORRECT_WORD = 'ducha'

const correctAnswer = computed(() => {
  // Limpia el texto: quita espacios y lo pasa a minúsculas
  const cleanAnswer = answer.value.trim().toLowerCase()

  // Valida si coincide con la palabra exacta o variaciones (ej: "la ducha", "bañera")
  return cleanAnswer === CORRECT_WORD || cleanAnswer === 'la ducha' || cleanAnswer === 'bañera'
})

const subtitleText = 'Encuentra tu outfit'
const typedText = ref('')
const isTyping = ref(false)
const showDetails = ref(false)

// tienen que coincidir con las duraciones del CSS de abajo
const TITLE_DURATION = 900 // ms -> animation del h1
const TYPE_SPEED = 55 // ms por letra
const PAUSE_BEFORE_DETAILS = 400 // ms de respiro antes de mostrar detalles

function typeWriter() {
  isTyping.value = true
  let i = 0

  const interval = setInterval(() => {
    typedText.value += subtitleText[i]
    i++

    if (i >= subtitleText.length) {
      clearInterval(interval)
      isTyping.value = false
      setTimeout(() => {
        showDetails.value = true
      }, PAUSE_BEFORE_DETAILS)
    }
  }, TYPE_SPEED)
}

onMounted(() => {
  // esperamos a que termine la animación del título antes de tipear
  setTimeout(typeWriter, TITLE_DURATION)
})
</script>

<style lang="scss" scoped>
@use '/src/styles/abstracts/variables' as *;

.itinerary {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-image: url('/src/assets/fondo8.jpg');
  background-size: cover;

  &__title-section {
    place-items: center;
  }
  &__btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    color: $primary;
    width: 20px;
  }

  &__container {
    justify-items: center;
    background: pink;
    margin: auto;
    margin-top: 2rem;
    width: 75%;
    height: 80vh;
    border-radius: 3rem;
    border: 1px solid $primary;
    box-shadow: 10px 10px rgba(255, 192, 203, 0.8);
  }

  &__title {
    font-family: $font-heading;
    color: $primary;
    font-size: 4rem;
    margin-bottom: 0;
    animation: dropBounce 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  }

  &__subtitle {
    font-family: $font-list;
    color: $primary;
    text-transform: uppercase;
    font-size: 1.5rem;
    min-height: 1.8rem; // evita que salte el layout mientras se tipea
  }

  &__cursor {
    display: inline-block;
    width: 2px;
    height: 1.2em;
    background: $primary;
    margin-left: 2px;
    vertical-align: middle;
    animation: blink 0.8s step-end infinite;
  }

  &__details {
    opacity: 0;
    transform: translateX(-80px);
    transition:
      opacity 0.9s ease,
      transform 0.9s ease;
    margin: auto;
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 50%;

    p {
      font-size: 1.3rem;
    }
    &--visible {
      opacity: 1;
      transform: translateX(0);
    }
  }
  &__rigth {
    align-self: center;
    color: $primary;
    font-family: $font-list;
    font-size: 1.3rem;
  }
}

// caída rápida + 2 rebotes + queda fijo
@keyframes dropBounce {
  0% {
    transform: translateY(-400px);
  }
  45% {
    transform: translateY(0);
  }
  60% {
    transform: translateY(-25px);
  }
  75% {
    transform: translateY(0);
  }
  85% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
