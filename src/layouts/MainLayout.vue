<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-primary">
      <q-toolbar>
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
        <q-toolbar-title>Inventario</q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer elevated v-model="drawer" show-if-above persistent :width="200">
      <drawer-menu />
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import DrawerMenu from "src/layouts/drawer/index.vue";

export default defineComponent({
  name: "MainLayout",
  components: {
    DrawerMenu,
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const drawer = ref(false);
    return {
      leftDrawerOpen,
      drawer,
    };
  },
});
</script>
