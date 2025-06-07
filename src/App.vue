<script setup lang="ts">
import navbar from "./components/navbar/navbar.vue";
</script>

<template>
  <q-layout view="hHh Lpr lFf" class="min-h-screen flex flex-col">

    <q-header elevated class="text-black">
      <navbar />
    </q-header>

    <q-page-container class="flex flex-col flex-1">
      <router-view class="flex-1" />
    </q-page-container>

  </q-layout>
</template>
