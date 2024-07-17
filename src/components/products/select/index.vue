<template>
  <q-select
    v-model="selection"
    :option-label="(option) => `${option.name}`"
    :options="options"
    :loading="loading"
    option-value="id"
    label="Nombre"
    @filter="onFilter"
    map-options
    use-input
    clearable
    hide-selected
    fill-input
    v-bin="$attrs"
  />
</template>

<script>
import setup from "./hook";
export default {
  name: "selectIdentity",
  setup,
};
</script>
