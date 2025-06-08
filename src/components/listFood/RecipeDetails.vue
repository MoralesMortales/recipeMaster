<template>
  <div v-if="recipe" class="p-4 max-w-4xl mx-auto">
    <div class="flex flex-col md:flex-row gap-6 mb-6">
      <div class="md:w-1/3">
        <img 
          :src="recipe.image" 
          :alt="recipe.title" 
          class="w-full h-64 object-cover rounded-lg shadow-md"
        />
      </div>

      <div class="md:w-2/3">
        <h1 class="text-3xl font-bold mb-8 mt-2">{{ recipe.title }}</h1>
        
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 bg-white border rounded-xl p-3">
          <div>
            <h5 class="font-semibold text-gray-700 mb-3">Calorías totales:</h5>
            <p>{{ calculateTotalCalories() }} kcal</p>
          </div>
          <div>
            <h5 class="font-semibold text-gray-700 mb-3">Costo estimado:</h5>
            <p>${{ recipe.pricePerServing }}</p>
          </div>
          <div>
            <h5 class="font-semibold text-gray-700 mb-3">Tiempo de preparación:</h5>
            <p>{{ recipe.readyInMinutes }} minutos</p>
          </div>
        </div>
      </div>
    </div>

    <hr class="border-t border-gray-300 my-6" />

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 ">
      <div class="md:col-span-1 bg-white p-3 border rounded-xl">
        <h2 class="text-xl font-bold mb-4">Ingredientes</h2>
        <ul class="list-disc pl-5 space-y-2">
          <li v-for="ingredient in recipe.extendedIngredients" :key="ingredient.id">
            {{ ingredient.original }}
          </li>
        </ul>
      </div>

      <div class="md:col-span-2 bg-white p-3 border rounded-xl">
        <h2 class="text-xl font-bold mb-4">Pasos</h2>
        <ol class="list-decimal pl-5 space-y-3">
          <li v-for="(step, index) in recipe.analyzedInstructions[0]?.steps" :key="index">
            {{ step.step }}
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getRecipeById } from "../../axios/axios";

const calculateTotalCalories = () => {
  if (recipe.value?.nutrition?.nutrients?.length > 0) {
    const calories = recipe.value.nutrition.nutrients.find(
      nutrient => nutrient.name === "Calories"
    );
    return calories ? Math.round(calories.amount) : 'N/A';
  }
  return 'N/A';
};

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
    recipe.value = await getRecipeById(props.id);
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
