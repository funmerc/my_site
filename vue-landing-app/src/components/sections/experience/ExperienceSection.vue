<template>
  <div class="experience-container">
    <h2>Work Experience</h2>
    <div
      :key="item.companyTitle + item.workDateRange"
      v-for="item of items"
      class="experience-item"
    >
      <experience-block
        :company-title="item.companyTitle"
        :work-date-range="item.workDateRange"
        :job-title="item.jobTitle"
        :job-location="item.jobLocation"
        :sections="item.sections"
      ></experience-block>
    </div>
  </div>
</template>
<script setup lang="ts">
import ExperienceBlock from '@/components/sections/experience/ExperienceBlock.vue'
import { ExperienceItem } from '@/models/sections/experience'
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const items = computed<ExperienceItem[]>(
  () => store.getters['experience/getItems']
)

onMounted(async () => {
  await store.dispatch('experience/getWorkExperienceItems')
})
</script>
<style scoped>
.experience-container {
  padding: 10px;
  text-align: start;
}

.experience-item {
  display: flex;
  flex-direction: column;
  padding: 0 4px;
}

h2 {
  text-decoration: underline;
  text-underline-offset: 4px;
}
</style>
