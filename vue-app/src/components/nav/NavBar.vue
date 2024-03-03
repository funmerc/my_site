<template>
  <nav class="nav-bar-custom full navbar navbar-expand-lg navbar-light">
    <div class="container-fluid full">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navBarMenu"
        aria-controls="navBarMenu"
        aria-expanded="false"
        aria-label="Toggle nav"
        @click="toggleMenu"
      >
        <svg
          id="nav-bar-icon"
          class="navbar-toggler-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path
            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
          />
        </svg>
      </button>
      <div
        id="navBarMenu"
        class="collapse navbar-collapse full"
        :class="{ 'd-flex py-1': menuOpen }"
      >
        <ul
          class="navbar-nav navbar-full-menu list-group full"
          :class="{ 'navbar-menu-custom': menuOpen }"
        >
          <li
            class="nav-item list-group-item fit"
            v-for="r of leftRoutes"
            :key="r.title"
          >
            <router-link
              class="nav-link"
              :class="{ active: route.path === r.path }"
              :to="r.path ? r.path : '#'"
              :routerLinkActive="pathIsActive(r.path)"
              @click="closeMenu"
              >{{ r.title }}</router-link
            >
          </li>
          <li class="list-group-item divider full" role="separator"></li>
          <li
            class="nav-item list-group-item fit"
            v-for="r of rightRoutes"
            :key="r.title"
          >
            <router-link
              class="nav-link float-md-end"
              :class="{ active: route.path === r.path }"
              :to="r.path ? r.path : '#'"
              :routerLinkActive="pathIsActive(r.path)"
              @click="closeMenu"
              >{{ r.title }}</router-link
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
const rightRoutes = ref<{ path: string; title: string }[]>([])
const leftRoutes = ref<{ path: string; title: string }[]>([])
const menuOpen = ref<boolean>(false)

const toggleMenu = () => (menuOpen.value = !menuOpen.value)
const closeMenu = () => (menuOpen.value = false)

const pathIsActive = (path: string) => path === activeRoute.value?.path

watch(
  () => route.path,
  (path) => {
    activeRoute.value =
      leftRoutes.value.find((route) => route.path === path) ||
      rightRoutes.value.find((route) => route.path === path)
  }
)

onMounted(async () => {
  await router?.isReady()
  const filteredRoutes = router
    ?.getRoutes()
    ?.filter(
      (route) => route?.meta && route?.meta?.title && !route?.meta?.hidden
    )

  leftRoutes.value = filteredRoutes
    ?.filter(
      (route) => route?.meta && !route?.meta?.right && !route?.meta?.hidden
    )
    ?.map((route) => ({
      path: (route.path || '') as string,
      title: (route?.meta?.title || '') as string,
    }))

  rightRoutes.value = filteredRoutes
    ?.filter(
      (route) => route?.meta && route?.meta?.right && !route?.meta?.hidden
    )
    ?.map((route) => ({
      path: (route.path || '') as string,
      title: (route?.meta?.title || '') as string,
    }))
})
</script>

<style scoped>
.list-group-item {
  background-color: unset;
  border: none;
}
.full {
  width: 100%;
}
.fit {
  min-width: fit-content;
}
.nav-bar-custom {
  z-index: 2;
}
.navbar-menu-custom {
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  li {
    padding: 10px 0;
  }
}
</style>
