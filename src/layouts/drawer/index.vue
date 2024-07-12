<template>
  <q-list dense padding class="text-primary">
    <q-item clickable class="q-ma-sm">
      <q-item-section avatar>
        <q-icon name="peoples" />
      </q-item-section>
      <q-item-section>Usuarios</q-item-section>
    </q-item>
    <q-item clickable class="q-ma-sm">
      <q-item-section avatar>
        <q-icon name="inventory_2" />
      </q-item-section>
      <q-item-section>Productos</q-item-section>
    </q-item>
    <q-item clickable class="q-ma-sm">
      <q-item-section avatar>
        <q-icon name="add_shopping_cart" />
      </q-item-section>
      <q-item-section>Registro de entrada</q-item-section>
    </q-item>
    <q-item clickable class="q-ma-sm">
      <q-item-section avatar>
        <q-icon name="exit_to_app" />
      </q-item-section>
      <q-item-section>Registro de Salida</q-item-section>
    </q-item>
    <q-item clickable class="q-ma-sm">
      <q-item-section avatar>
        <q-icon name="inventory" />
      </q-item-section>
      <q-item-section>Almacén</q-item-section>
    </q-item>
  </q-list>
</template>
<script>
export default {
  name: "MenuDrawer",
};
</script>
./index.vue
