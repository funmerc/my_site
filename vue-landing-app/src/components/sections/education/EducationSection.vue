<template>
  <div class="education-container">
    <h2>Education</h2>
    <div v-for="item of items" :key="getKey(item)" class="education-item">
      <education-block
        :name="item?.name"
        :degree-title="item?.degreeTitle"
        :graduation-date="item?.graduationDate"
        :location="item?.location"
        :relevant-coursework="item?.relevantCoursework"
      ></education-block>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useStore } from 'vuex'
import { computed, onBeforeMount, ref, watch } from 'vue'
import { EducationItem } from '../../../models/sections/education'
import { v4 as uuid } from 'uuid'
import EducationBlock from './EducationBlock.vue'

const store = useStore()
const fetchedItems = computed<EducationItem[]>(
  () => store.getters['education/getItems']
)
const items = ref<EducationItem[]>([])

const getKey = (item?: EducationItem): string =>
  'education-item-' + item?.companyTitle + uuid()

watch(fetchedItems, (educationItems) => {
  if (educationItems?.length) {
    items.value = educationItems
  }
})
onBeforeMount(() => store.dispatch('education/getEducationItems'))
</script>
<style scoped>
.education-container {
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

.education-item {
  display: flex;
  flex-direction: column;
  padding: 0 4px;
}
</style>
