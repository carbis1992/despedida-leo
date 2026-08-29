<template>
  <div class="welcome-container">
    <div class="welcome-container__text">
      <h1>WELCOME</h1>
      <h2>to</h2>
      <h1>IBIZAAA</h1>
    </div>
    <button type="button" @click="goToDayOne">PRIMERA NOCHE</button>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goToDayOne() {
  router.push({ name: 'day-one' })
}
</script>
<style lang="scss" scoped>
@use '/src/styles/abstracts/variables' as *;

.welcome-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  perspective: 800px; // le da profundidad al scale del hijo
  background-image: url('/src/assets/fondo2.jpg');
  background-size: cover;
  background-position: top;
  &__text {
    height: 80vh;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    width: 80%;
    align-items: center;
    justify-content: center;
    animation: popOut 2s ease-in-out infinite;
    transform-style: preserve-3d;
  }
  h1 {
    font-family: $font-heading;
    font-size: 3.5rem;
    color: $secondary;
    text-shadow: 5px 5px $primary;
  }
  h2 {
    font-family: 'Quattrocento Sans', 'Gill Sans', sans-serif;
    font-size: 3rem;
    margin: 0;
    color: $secondary;
    font-weight: 900;
    text-shadow: 3px 3px $primary;
  }
}

@keyframes popOut {
  0%,
  100% {
    transform: scale(1) translateZ(0);
  }
  50% {
    transform: scale(1.08) translateZ(40px);
  }
}
</style>
