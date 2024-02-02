<template>
  <div class="experience-block">
    <section>
      <div class="split-section">
        <h3>{{ companyTitle }}</h3>
        <h3>{{ workDateRange }}</h3>
      </div>
      <div class="split-section fst-italic">
        <p>{{ jobTitle }}</p>
        <p>{{ jobLocation }}</p>
      </div>
      <div
        :key="companyTitle + '-' + section?.label"
        v-for="section of sections"
        class="experience-block-sections"
      >
        <span>{{ section?.label }}: </span>
        <p>{{ section?.value }}</p>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  companyTitle: {
    type: String,
    default: '',
  },
  workDateRange: {
    type: String,
    default: '',
  },
  jobTitle: {
    type: String,
    default: '',
  },
  jobLocation: {
    type: String,
    default: '',
  },
  sections: {
    type: Array,
    default: () => [],
  },
})
</script>
<style scoped>
.experience-block {
  padding: 10px 0;
  section {
    display: flex;
    flex-direction: column;
    padding-top: 2px;
    .split-section {
      display: flex;
      justify-content: space-between;
    }
  }
}

.experience-block-sections {
  display: flex;
  flex-direction: row;
  span {
    padding-right: 1px;
    font-weight: bold;
  }
}
</style>
