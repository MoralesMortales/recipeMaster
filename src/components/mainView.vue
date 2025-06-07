<template id="body">
  <div class="relative" id="mainView">
    <h1
      class="title w-full text-center"
      style="font-size: 64px; padding-top: 74px"
    >
      Seleccione sus ingredientes
    </h1>
    <main class="w-full flex justify-around pt-24">
      <div
        class="food flex justify-center items-center"
        v-for="(food, index) in options"
        :key="index"
      >
        <label class="relative cursor-pointer">
          <input
            type="checkbox"
            v-model="food.selected"
            class="absolute opacity-0 w-0 h-0"
          />

          <div
            class="hover:transition-all transition-all size-32 p-5 rounded-full flex items-center justify-center"
            :class="{
              'bg-red-checked': food.selected,
              'bg-clear-noChecked': !food.selected,
              'hover:bg-hoverState' : !food.selected, 
            }"
          >
            <img :src="food.img" alt="" class="w-full h-full object-contain" />
          </div>
        </label>
      </div>
    </main>
    
    <div class="w-full absolute bottom-44 flex justify-center items-center">
      <button class="h-16 rounded-2xl w-56 hover:bg-btn-color-hover bg-btn-color text-4xl" id="btnAccept">Aceptar</button>
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";
import breadImg from "@/assets/img/food/bread.png";
import tomatoImg from "@/assets/img/food/tomato.png";
import potatoImg from "@/assets/img/food/potato.png";

const options = ref([
  {
    name: "bread",
    img: breadImg,
    selected: false,
  },
  {
    name: "potato",
    img: potatoImg,
    selected: false,
  },
  {
    name: "tomato",
    img: tomatoImg,
    selected: false,
  },
]);
</script>

<style lang="scss" scoped>
.title, #btnAccept {
  font-family: "Abel", sans-serif;
  font-weight: 400;
  font-style: normal;
}

</style>
