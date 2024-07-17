<template>
  <div class="q-pa-md">
    <q-table
      @update:pagination="onPaginationChange"
      v-model:pagination="currentPagination"
      title="Productos agregados"
      :rows="rows"
      :columns="columns"
      :loading="loading"
      row-key="name"
      style="height: 90vh"
    >
      <template v-slot:top-right>
        <div class="col-2 q-table__title">
          <q-btn
            label="Agregar producto"
            flat
            @click="openModal"
            icon="add"
            color="primary"
          >
            <q-tooltip>Agregar un producto</q-tooltip>
          </q-btn>
        </div>
      </template>
    </q-table>
  </div>
  <modal-products-add @success-store="updatedSuccess" v-model="modal" />
</template>

<script>
import setup from "./hook";
import ModalProductsAdd from "src/components/products/modal/index.vue";
export default {
  name: "ProductsTableComponent",
  components: {
    ModalProductsAdd,
  },
  setup,
};
</script>
