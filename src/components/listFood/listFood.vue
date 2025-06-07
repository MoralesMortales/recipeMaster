<template>
  <div class="">
 <li v-for="(food, index) in foods" :key="index">
        {{ food }}
      </li>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const selectedFoods = JSON.parse(route.query.foods || '[]');


defineProps({
  foods: {
    type: Array,
    default: () => []
  }
});
</script>

<style lang="scss" scoped>

</style>
