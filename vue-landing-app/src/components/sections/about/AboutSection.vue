<template>
  <div class="about-container">
    <h2>About Me</h2>
    <div v-if="info?.interests" class="about-item">
      <span>Hobbies and Interests:</span>
      <div class="about-interests">
        <p>{{ info.interests }}</p>
      </div>
    </div>
    <div v-if="info?.goals" class="about-item">
      <span>My Goals:</span>
      <div class="about-interests">
        <p>{{ info.goals }}</p>
      </div>
    </div>
    <div v-if="info?.why" class="about-item">
      <span>My why for software:</span>
      <div class="about-interests">
        <p>{{ info.why }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { computed, onBeforeMount } from 'vue'
const store = useStore()
const info = computed(() => store.getters['about/getAboutInformation'])
onBeforeMount(() => store.dispatch('about/getAboutInformation'))
</script>

<style scoped>
.about-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-start;
  padding: 10px;
  text-align: start;
  h2 {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
}

.about-item {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  padding: 0 4px;
  span {
    width: 10%;
    min-width: fit-content;
    padding-right: 1px;
    font-weight: bold;
  }
  .about-interests {
    width: 90%;
    padding-bottom: 16px;
    p {
      text-align: left;
    }
  }
}
</style>
