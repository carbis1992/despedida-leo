<template>
  <main class="checklist">
    <button type="button" @click="goToHome" class="checklist__btn">&lt;&lt;</button>
    <div class="checklist__list">
      <h1 class="checklist__title">Qué debes llevar</h1>
      <div class="checklist__checks">
        <label class="checklist__check">
          <input type="checkbox" class="checklist__input" />
          <span>Una bikini blanca</span>
        </label>
        <label class="checklist__check">
          <input type="checkbox" class="checklist__input" />
          <span>Una bikini rosa</span>
        </label>
        <label class="checklist__check">
          <input type="checkbox" class="checklist__input" />
          <span>Calzado para salir</span>
        </label>
        <label class="checklist__check">
          <input type="checkbox" class="checklist__input" />
          <span>Calzado para la playa</span>
        </label>
        <label class="checklist__check">
          <input type="checkbox" class="checklist__input" />
          <span>Short / pollera lo que te sea cómodo para ir a la playa</span>
        </label>
        <label class="checklist__check">
          <input type="checkbox" class="checklist__input" />
          <span>Pijama</span>
        </label>
        <label class="checklist__check">
          <input type="checkbox" class="checklist__input" />
          <span>Neceser</span>
        </label>
        <label class="checklist__check">
          <input type="checkbox" class="checklist__input" />
          <span>Lentes de sol</span>
        </label>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goToHome() {
  router.push({ name: 'home' })
}
</script>

<style lang="scss" scoped>
@use '/src/styles/abstracts/variables' as *;

.checklist {
  height: 100vh;
  background-image: url(/src/assets/fondo3.jpg);
  background-size: cover;
  background-position: right;
  &__btn {
    background: none;
    border: none;
    font-size: 1.5rem;
    color: $primary;
  }
  &__title {
    color: $primary;
    font-family: $font-list;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 0.92;
  }
  &__list {
    max-width: 21rem;
    margin: auto;
    justify-self: center;
    height: 65%;
    background: pink;
    border-radius: 31px;
    border: 1px solid $primary;
    margin-top: 1rem;
    padding: 1rem;
  }

  &__checks {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  &__check {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: $ink;
    font-family: $font-body;
    font-size: 1rem;
    line-height: 1.3;
    cursor: pointer;
  }

  &__input {
    appearance: none;
    width: 1.25rem;
    min-width: 1.25rem;
    height: 1.25rem;
    margin: 0;
    padding: 0;
    border: 2px solid $primary;
    border-radius: 50%;
    background: transparent;
    cursor: pointer;

    &:checked {
      background: $primary;
      box-shadow: inset 0 0 0 3px transparent;
    }
  }
}
</style>
