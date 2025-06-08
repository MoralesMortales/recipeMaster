<script setup lang="ts">
import Navbar from "./components/navbar/Navbar.vue";
</script>

<template>
  <q-layout view="hHh Lpr lFf" class="min-h-screen flex flex-col">

    <q-header elevated class="text-black">
      <Navbar />
    </q-header>

    <q-page-container class="flex flex-col flex-1">
      <router-view class="flex-1" />
    </q-page-container>

  </q-layout>
</template>
