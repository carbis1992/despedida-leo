<template>
  <section class="itinerary">
    <div class="itinerary__wrapper">
      <div class="itinerary__container">
        <div class="itinerary__title-section">
          <h1 class="itinerary__title">DIA 2</h1>
          <p class="itinerary__subtitle">RELAX AT THE BEACH</p>
        </div>
        <div class="itinerary__details">
          <p>
            La prioridad es recuperarse porque todavia falta muchooo esto es más x vos que por
            nosotras get the look where monsters hide...
          </p>
          <p class="itinerary__disclaimer">
            XOXO <br />
            see u at night
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
@use '/src/styles/abstracts/variables' as *;

.itinerary {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-image: url('/src/assets/fondo4.jpg');
  background-size: cover;

  &__wrapper {
    height: 100vh;
    background-color: rgba(255, 192, 203, 0.45);
  }

  &__title-section {
    display: flex;
    flex-direction: column;
    align-items: center;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-items: center;
    justify-content: space-between;
    // background: pink;
    margin: auto;
    margin-top: 2rem;
    width: 75%;
    height: 80vh;
    // border-radius: 3rem;
    // border: 1px solid $primary;
    // box-shadow: 10px 10px rgba(255, 192, 203, 0.8);
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

  &__disclaimer {
    font-family: $font-list;
    color: $primary;
    font-size: 2rem;
  }
}
</style>
