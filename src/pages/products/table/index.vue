<template>
  <q-page>
    <products-table-component />
  </q-page>
</template>

<script>
import ProductsTableComponent from "src/components/products/table/index.vue";
export default {
  name: "ProductsPage",
  components: {
    ProductsTableComponent,
  },
};
</script>
