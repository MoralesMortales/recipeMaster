<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import mainView from './components/mainView.vue'
import navbar from './components/navbar/navbar.vue'

import { getData } from './axios/axios.ts'

</script>

<template>

  <navbar/>
  <mainView/>

</template>

<style scoped>

</style>
