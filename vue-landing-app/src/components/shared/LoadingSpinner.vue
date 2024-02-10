<template>
  <transition name="fade">
    <div
      class="spinner-container"
      :show-background="showBackground"
      v-if="showSpinner"
    >
      <div class="spinner-border text-secondary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </transition>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  showSpinner: {
    type: Boolean,
    default: () => false,
  },
  showBackground: {
    type: Boolean,
    default: () => true,
  },
})
</script>

<style scoped>
.spinner-container {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(5px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
