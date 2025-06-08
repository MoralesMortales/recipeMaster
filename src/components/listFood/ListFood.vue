<template>
  <div class="grid grid-cols-5 content-around items-center gap-24 pb-20" style="margin: 0 auto">
    <div class="recipeTitle w-full col-span-5 text-center pt-16">
      <h1>Recetas con {{ formattedFoods }}</h1>
    </div>

    <router-link :to="{ name: 'recipeDetails', params: { id: food.id } }" v-for="(food, food.id) in recipes" :key="food.id"
      class="transition-all hover:transition-all hover:scale-110 hover:cursor-pointer h-96 w-72 flex rounded-2xl flex-col"
      style="background-color: #d9d9d9">
      <div class="h-4/6 p-7" id="top">
        <div class="h-full w-full">
          <img :src="food.image" alt="" class="h-full w-full rounded-2xl object-cover" />
        </div>
      </div>
      <div class="h-2/6 recipeTitle text-center px-2" id="bottom" style="font-size: 23px">
        {{ food.title }}
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { getRecipesByIngredients } from "../../axios/axios";

const route = useRoute();
const recipes = ref([]);
const isLoading = ref(false);
const error = ref(null);

const formattedFoods = computed(() => {
  return selectedFoods.join(", ").replace(/,([^,]*)$/, " y$1");
});

const selectedFoods = JSON.parse(route.query.foods || "[]");

onMounted(async () => {
  if (selectedFoods.length > 0) {
    try {
      isLoading.value = true;
      recipes.value = await getRecipesByIngredients(selectedFoods);
      console.log("Recetas obtenidas:", recipes.value);
    } catch (err) {
      error.value = err.message;
      console.error("Error:", err);
    } finally {
      isLoading.value = false;
    }
  }
});
</script>

<style lang="scss" scoped>
.recipeTitle {
  font-family: "Abel", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>
