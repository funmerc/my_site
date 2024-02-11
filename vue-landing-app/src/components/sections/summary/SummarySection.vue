<template>
  <div class="summary-container">
    <h2>Professional Summary</h2>
    <p>
      Full Stack Software Engineer with over 6 years of experience in developing
      web applications. Skilled in front-end development with Vue.js, Angular,
      and TypeScript, and proficient in back-end technologies including Node.js,
      Express, Kotlin, and Spring Boot. Expertise in designing and implementing
      RESTful APIs and database solutions with PostgreSQL. Leverages AI
      technologies like ChatGPT for debugging and research, accelerating
      development timelines.
    </p>
  </div>
  <hr class="divider" />

  <div class="summary-tech-images">
    <div
      v-for="urlObject in urls"
      :key="getKey(urlObject.name)"
      class="tech-image"
    >
      <div v-if="urlObject?.imageUrl">
        <img
          :src="urlObject.imageUrl"
          :alt="urlObject.name"
          :title="urlObject.name + ' icon'"
          type="image/png"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { ImageLink } from '../../../models/sections/summary'
import { v4 as uuid } from 'uuid'

type ImageAndCreatedImageUrl = ImageLink & { imageUrl?: string }

const store = useStore()
const urls = ref<ImageAndCreatedImageUrl[]>([])
const links = computed(() => store.getters['summary/getLinks'])
const timeouts = ref<any[]>([])

const getKey = (name?: string): string =>
  'summary-image-' + name?.toLowerCase()?.replaceAll(' ', '_') + uuid()

const getAndSetImage = async (item: ImageAndCreatedImageUrl) => {
  if (!item?.imageUrl) {
    item.imageUrl = await store.dispatch('summary/getTechImage', item.name)
  }
  const urlIndex = urls.value.findIndex((url) => url.name === item.name)
  urls.value[urlIndex] = item
}

watch(links, async (items) => {
  // This helps trigger the visuals :)
  let waitInMs = 50
  for (const item of items) {
    timeouts.value.push(setTimeout(() => getAndSetImage(item), waitInMs))
    urls.value.push(item)
    waitInMs += 100
  }
})

onMounted(() => store.dispatch('summary/getSummaryTechLinks'))
onUnmounted(() =>
  timeouts.value.forEach((timeout: any) => clearTimeout(timeout))
)
</script>

<style scoped>
.summary-container {
  padding: 24px;
  text-align: start;
}

h2 {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.divider {
  padding: 10px 0;
  border-width: 2px;
  color: #333;
  width: 80%;
}

.summary-tech-images {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
}

.tech-image {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
</style>
