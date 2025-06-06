<template>
  <div class="w-full flex justify-between" style="height: 9dvh;" id="navbar">
    <div id="logo" class="h-full p-2">
      <img src="@/assets/img/logoKitchen.png" alt="" class="h-full">
    </div>

    <div id="right" class="h-full flex justify-center items-center">
      <div class="h-full flex justify-center">
        <q-toolbar>
          <q-btn flat dense round icon="menu" size="22px" class="title" style="color: #528C53;" aria-label="Menu" @click="drawer = !drawer" />
        </q-toolbar>
      </div>
    </div>
    </div>

    <div class="relative">
      <q-layout view="hHh Lpr lFf" style="height: 91dvh;" container class="absolute shadow-2 rounded-borders">
    <q-drawer 
      v-model="drawer"
      side="right"
      :width="300"
      :breakpoint="700"
      bordered
      behavior="mobile"
      overlay
      :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
    >
          <q-scroll-area class="fit">
            
            <q-list>

              <template v-for="(menuItem, index) in menuList" :key="index">
                <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
                  <q-item-section>
                    {{ menuItem.label }}
                  </q-item-section>
                </q-item>
                <q-separator :key="'sep' + index" v-if="menuItem.separator" />
              </template>

            </q-list>

          </q-scroll-area>
        </q-drawer>
      </q-layout>

  </div>
</template>

<script setup>

import { ref } from 'vue'

let drawer = ref(false);

const menuList = ref([
  {
    label: 'Menu',
    separator: true
  }
])

</script>

<style lang="scss" scoped>

.title{
  font-family: "Ubuntu", sans-serif;
  font-weight: 300;
  font-style: normal;
}


</style>
