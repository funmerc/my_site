<template>
  <div class="education-block">
    <section>
      <div class="split-section">
        <h3>{{ name }}</h3>
        <h3>{{ graduationDate }}</h3>
      </div>
      <div class="split-section fst-italic">
        <p>{{ degreeTitle }}</p>
        <p>{{ location }}</p>
      </div>
      <div class="relevant-coursework">
        <span>Relevant Coursework:</span>
        <p>{{ relevantCoursework }}</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  name: {
    type: String,
    default: '',
  },
  graduationDate: {
    type: String,
    default: '',
  },
  degreeTitle: {
    type: String,
    default: '',
  },
  location: {
    type: String,
    default: '',
  },
  relevantCoursework: {
    type: String,
    default: '',
  },
})
</script>

<style scoped>
.education-block {
  padding: 10px 0;
  section {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding-top: 2px;
    .split-section {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
    }
  }
}

.relevant-coursework {
  display: flex;
  flex-flow: row wrap;
  span {
    padding-right: 1px;
    font-weight: bold;
  }
}
</style>
