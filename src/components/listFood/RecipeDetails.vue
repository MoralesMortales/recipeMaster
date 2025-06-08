
<template>
  <div class="">
    holaa
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { getRecipeById } from "../../axios/axios";

const route = useRoute();
const isLoading = ref(false);
const error = ref(null);

const props = defineProps({
 id: {
    type: Number,
    required: true,
  }
});

console.log(getRecipeById(props.id));

</script>

<style lang="scss" scoped>
.recipeTitle {
  font-family: "Abel", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>
