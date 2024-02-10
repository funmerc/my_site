<template>
  <div class="footer">
    <div class="social-icons">
      <svg
        id="linkedin-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        @click="openLinkedin"
      >
        <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
        <path
          d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
        />
      </svg>
    </div>
    <span>Version: {{ version }}</span>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  version: {
    type: String,
    default: 'unavailable',
  },
})

const openLinkedin = (event: any) => {
  event.preventDefault()
  window.open('https://www.linkedin.com/in/jason-a-rice', '_blank')
}
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: sticky;
  bottom: 0;
  left: 0;
  background-color: #333;
  color: #fff;
  width: 100%;
  padding: 20px;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2);
}

.social-icons {
  display: flex;
  width: 100%;
  padding: 5px 0;
  justify-content: center;
  > svg {
    width: 2em;
    height: 2em;
    fill: #fff;
    cursor: pointer;
  }
}
</style>
