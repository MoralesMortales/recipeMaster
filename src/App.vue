<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import mainView from "./components/mainView.vue";
import navbar from "./components/navbar/navbar.vue";

import { getData } from "./axios/axios.ts";
</script>

<template>
  <div class="relative min-h-screen flex flex-col">
    <navbar />
    <mainView class="relative flex-1" />
  </div>
</template>

<style scoped></style>
