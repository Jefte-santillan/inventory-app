<template>
  <q-list dense padding class="text-primary">
    <q-item
      clickable
      class="q-ma-sm"
      @click="navigateTo('inventoryIdentities')"
    >
      <q-item-section avatar>
        <q-icon name="peoples" />
      </q-item-section>
      <q-item-section>Usuarios</q-item-section>
    </q-item>
    <q-item
      clickable
      @click="navigateTo('inventoryProducts')"
      class="q-ma-sm"
      to="products"
    >
      <q-item-section avatar>
        <q-icon name="inventory_2" />
      </q-item-section>
      <q-item-section>Productos</q-item-section>
    </q-item>
    <q-item
      clickable
      @click="navigateTo('operations')"
      class="q-ma-sm"
      to="operations"
    >
      <q-item-section avatar>
        <q-icon name="add_shopping_cart" />
      </q-item-section>
      <q-item-section>Registro de entrada</q-item-section>
    </q-item>
  </q-list>
</template>

<script>
import setup from "./hook";
export default {
  name: "MenuDrawer",
  setup,
};
</script>
