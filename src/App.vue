<template>
  <div id="app">
    <header-component></header-component>
    <router-view/>
  </div>
</template>

<script>
import HeaderComponent from '@/components/header/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent
  }
}
</script>

<style src="./app.css"></style>
