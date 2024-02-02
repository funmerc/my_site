<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/"></router-link>
      <button
        aria-controls="navigationBar"
        aria-expanded="false"
        aria-label="Navigation Toggle"
        class="navbar-toggler"
        data-bs-target="#navigationBar"
        data-bs-toggle="collapse"
        type="button"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navigationBar" class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item" v-for="route of routes" :key="route.title">
            <router-link
              class="nav-link"
              :to="route.path"
              :routerLinkActive="pathIsActive(route.path)"
              >{{ route.title }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { onMounted, ref, watch } from 'vue'

const route = useRoute()
const router = useRouter()
const activeRoute = ref<{ path: string; title: string }>()
const routes = ref<{ path: string; title: string }[]>([])

const pathIsActive = (path: string) => path === activeRoute.value?.path

watch(
  () => route.path,
  (path) => {
    activeRoute.value = routes.value.find((route) => route.path === path)
  }
)

onMounted(async () => {
  await router?.isReady()
  routes.value = router
    ?.getRoutes()
    ?.filter(
      (route) => route?.meta && route?.meta?.title && !route?.meta?.hidden
    )
    ?.map((route) => ({
      path: (route.path || '') as string,
      title: (route?.meta?.title || '') as string,
    }))
})
</script>

<style scoped></style>
