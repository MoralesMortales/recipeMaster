<template>
  <q-toolbar style="height: 9dvh; background-color: #522C33;">
    <div id="logo" class="h-full p-2">
      <router-link to="/" class="h-full">
        <img src="@/assets/img/logoKitchen.png" alt="" class="h-full">
      </router-link>
    </div>

    <q-space />

    <q-btn
      flat
      dense
      round
      icon="menu"
      size="22px"
      class="title"
      style="color: #528C53;"
      @click="drawer = !drawer"
    />
  </q-toolbar>

  <q-drawer
    v-model="drawer"
    side="right"
    :width="300"
    :breakpoint="700"
    bordered
    overlay
    behavior="mobile"
    class="z-max"
  >
    <q-scroll-area class="fit">
      <q-list>
        <template v-for="(menuItem, index) in menuList" :key="index">
          <q-item class="h-24 flex font-bold items-center justify-center">
            Navegate
          </q-item> 
                    <q-separator/>
          <q-item clickable v-ripple>
            <q-item-section>
              {{ menuItem.label }}
            </q-item-section>
          </q-item>
          <q-separator v-if="menuItem.separator" />
        </template>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)

const menuList = ref([
  {
    label: 'Menu',
    separator: true
  }
])
</script>

<style lang="scss" scoped>
.title {
  font-family: "Ubuntu", sans-serif;
  font-weight: 300;
  font-style: normal;
}
</style>
