<template>
  <div class="banner banner-img">
    <h1>{{ name }}</h1>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  name: String,
})
</script>

<style scoped>
.banner {
  color: #fff;
  background-color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

h1 {
  font-size: 2.5rem;
}
</style>
