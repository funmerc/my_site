<template>
  <main>
    <banner-component name="Jason Rice"></banner-component>
    <div class="d-flex flex-row w-100">
      <nav-bar></nav-bar>
    </div>

    <div class="m-2 p-1 view-container">
      <router-view />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '@/components/nav/NavBar.vue'
import BannerComponent from '@/components/banner/BannerComponent.vue'

export default defineComponent({
  name: 'App',
  components: {
    BannerComponent,
    NavBar,
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
