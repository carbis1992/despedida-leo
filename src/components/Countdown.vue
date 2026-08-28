<template>
  <section class="countdown" aria-labelledby="countdown-title">
    <h2 id="countdown-title">Empieza la cuenta regresiva</h2>
    <h3 class="countdown__date">Todo empieza aquí:</h3>
    <p class="countdown__date">04 de septiembre de 2026 - 16:30 hs</p>
    <p class="countdown__date">Aeropuerto de Barcelona T1</p>

    <div v-if="remainingMilliseconds > 0" class="countdown__grid" aria-live="polite">
      <div class="countdown__unit">
        <strong>{{ remainingTime.days }}</strong>
        <span>días</span>
      </div>
      <div class="countdown__unit">
        <strong>{{ String(remainingTime.hours).padStart(2, '0') }}</strong>
        <span>horas</span>
      </div>
      <div class="countdown__unit">
        <strong>{{ String(remainingTime.minutes).padStart(2, '0') }}</strong>
        <span>minutos</span>
      </div>
      <div class="countdown__unit">
        <strong>{{ String(remainingTime.seconds).padStart(2, '0') }}</strong>
        <span>segundos</span>
      </div>
    </div>

    <p v-else class="countdown__finished">¡Llegó el gran día!</p>
  </section>
</template>
<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'

const targetDate = new Date(2026, 8, 4, 16, 30, 0)
const remainingMilliseconds = ref(Math.max(targetDate.getTime() - Date.now(), 0))
let countdownInterval: number | undefined

const remainingTime = computed(() => {
  const totalSeconds = Math.floor(remainingMilliseconds.value / 1000)

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  }
})

function updateCountdown() {
  remainingMilliseconds.value = Math.max(targetDate.getTime() - Date.now(), 0)
}

onMounted(() => {
  countdownInterval = window.setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  window.clearInterval(countdownInterval)
})
</script>

<style lang="scss">
@use '../styles/abstracts/variables' as *;

.countdown {
  width: min(100%, 620px);
  margin: 0 auto 3rem;
  padding: 1.5rem;
  border: 1px solid rgba($primary, 0.18);
  border-radius: 0.5rem;
  background: rgba($surface, 0.4);
  box-shadow: $shadow-soft;
  font-family: $font-body;
  text-align: center;

  h2 {
    margin: 0;
    color: $primary;
    font-family: inherit;
    font-size: 1.35rem;
    font-weight: 700;
  }

  h3 {
    margin-bottom: 4px;
  }

  &__date {
    color: $ink;
    font-size: 0.9rem;
    font-weight: 500;
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.65rem;
    margin-top: 2rem;
  }

  &__unit {
    display: grid;
    gap: 0.15rem;
    padding: 0.7rem 0.35rem;
    border-radius: $radius-sm;
    background: rgba($secondary, 0.3);

    strong {
      color: $primary;
      font-family: inherit;
      font-size: 2.5rem;
      font-weight: 400;
      line-height: 1;
    }

    span {
      color: $primary;
      font-size: 0.7rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
  }

  &__finished {
    margin: 1.5rem 0 0;
    color: $primary;
    font-family: inherit;
    font-size: 1.25rem;
    font-weight: 700;
  }
}

@media (max-width: 560px) {
  .countdown {
    padding: 1rem;

    &__grid {
      gap: 0.35rem;
    }

    &__unit {
      padding-inline: 0.2rem;

      strong {
        font-size: 1.6rem;
      }

      span {
        font-size: 0.6rem;
        letter-spacing: 0.03em;
      }
    }
  }
}
</style>
