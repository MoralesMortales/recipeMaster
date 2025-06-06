<template id="body">
  <div class="" id="mainView">
    <h1 class="title w-full text-center" style="font-size: 64px; padding-top: 74px;">Seleccione sus ingredientes</h1>
    <main>

      <div class="food" v-for="(food, index) in options" :key="index">
        op
      </div>

    </main>
  </div>
</template>

<script setup>

import { ref } from 'vue';

const options = ref([
  {
    name: 'bread'
  },
  {
    name: 'potato'
  },
  {
    name: 'potato'
  }
])

</script>

<style lang="scss" scoped>
.title{
 font-family: "Abel", sans-serif;
  font-weight: 400;
  font-style: normal;
}

</style>
