<template>
  <main class="home">
    <div class="home__container">
      <p class="eyebrow">Welcome to</p>
      <h1 class="the-title">Despedida de Leo</h1>
      <p class="intro">
        Estamos preparando una celebración especial. Sabemos que te cuesta ceder el control, pero no
        te queda otra, pondremos a prueba tu capacidad de ceder y te iremos proporcionando
        informacion cuando sea necesario...
      </p>
      <Countdown />
      <button type="button" @click="goToChecklist">Que debes llevar?</button>
    </div>
  </main>
</template>
<script setup lang="ts">
import Countdown from '../components/Countdown.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function goToChecklist() {
  router.push({ name: 'checklist' })
}
</script>

<style lang="scss" scoped>
@use '/src/styles/abstracts/variables' as *;

.home {
  display: grid;
  align-content: center;
  min-height: 100vh;
  width: min(100% - 3rem, 960px);

  padding: 5rem 0 calc(5rem + env(safe-area-inset-bottom));
  background-image: url(/src/assets/fondo1.jpg);
  background-position-x: right;
  min-width: 100%;

  &__container {
    margin: auto;
    margin-top: 0;

    .eyebrow {
      margin: 0 0 1rem;
      color: $primary;
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.18em;
      text-transform: uppercase;
    }

    .the-title {
      max-width: 720px;
      margin: 0;
      color: $secondary;
      font-family: $font-heading;
      font-size: 3rem;
      font-weight: 400;
      line-height: 0.92;
    }

    .intro {
      max-width: 450px;
      margin: 2rem 0 3.5rem;
      color: $ink;
      font-family: $font-body;
      font-size: 1.15rem;
      line-height: 1.6;
    }

    button {
      background: $secondary;
      color: $primary;
      margin-left: 25%;
    }
  }
}

@media (max-width: 560px) {
  .home {
    width: min(100% - 2rem, 960px);
    padding: 3rem 0 calc(3rem + env(safe-area-inset-bottom));
  }

  h1 {
    font-size: 3rem;
  }
}
</style>
