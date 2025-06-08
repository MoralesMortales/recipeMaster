<template>
  <div v-if="recipe" class="">
    <div class="h-40">
      <div id="topLeft" class="h-full">
        <img :src="recipe.image" class="h-full" alt="" />
      </div>
      <div class="flex flex-col" id="topRight">
        <div class="top">
          {{ recipe.title }}
        </div>
        <div class="">
          <h4>Calorias totales:</h4>
          <h4>Costo estimado: {{recipe.pricePerServing}}</h4>
          <h4>Tiempo de preparacion estimado: {{recipe.readyInMinutes}}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getRecipeById } from "../../axios/axios";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});

const isLoading = ref(true);
const error = ref(null);
const recipe = ref(null);

const fetchRecipe = async () => {
  try {
    isLoading.value = true;
    recipe.value = await getRecipeById(props.id); // ¡Aquí usamos await!
    console.log("Receta obtenida:", recipe.value);
  } catch (err) {
    error.value = err.message;
    console.error("Error al obtener receta:", err);
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchRecipe();
});
</script>

<style lang="scss" scoped>
.recipeTitle {
  font-family: "Abel", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>
