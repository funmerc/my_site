<template>
  <main>
    <loading-spinner
      :show-spinner="pageLoading"
      :show-blur="pageLoadingBlur"
    ></loading-spinner>
    <banner-component name="Jason Rice"></banner-component>

    <div class="content">
      <div class="d-flex flex-row w-100">
        <nav-bar></nav-bar>
      </div>

      <div class="m-2 p-1 view-container">
        <router-view />
      </div>
    </div>
    <footer-component :version="version || undefined"></footer-component>
  </main>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, onMounted } from 'vue'
import NavBar from '@/components/nav/NavBar.vue'
import BannerComponent from '@/components/banner/BannerComponent.vue'
import { useStore } from 'vuex'
import LoadingSpinner from '@/components/shared/LoadingSpinner.vue'
import FooterComponent from '@/components/footer/FooterComponent.vue'

export default defineComponent({
  name: 'App',
  components: {
    FooterComponent,
    LoadingSpinner,
    BannerComponent,
    NavBar,
  },
  setup() {
    const store = useStore()
    const pageLoading = computed(() => store.getters['pageLoading'])
    const pageLoadingBlur = computed(() => store.getters['pageLoadingBlur'])
    const version = computed(() => store.getters['appVersion'])

    onBeforeMount(() => store.dispatch('getConfiguration'))

    return {
      pageLoading,
      pageLoadingBlur,
      version,
    }
  },
})
</script>

<style type="text/css">
@import 'bootstrap';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.view-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fdfdfd;
  padding: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
</style>
