<template>
  <div class="q-pa-md">
    <q-table
      @update:pagination="onPaginationChange"
      v-model:pagination="currentPagination"
      title="Usuarios agregados"
      :rows="rows"
      :columns="columns"
      :loading="loading"
      row-key="name"
      style="height: 90vh"
    >
      <template v-slot:top-right>
        <div class="col-2 q-table__title">
          <q-btn
            label="Agregar Usuario"
            flat
            @click="openModal"
            icon="add"
            color="primary"
          >
            <q-tooltip>Agregar un usuario</q-tooltip>
          </q-btn>
        </div>
      </template>
    </q-table>
  </div>
  <modal-identities-add @onSuccess="updatedSuccess" v-model="modal" />
</template>

<script>
import setup from "./hook";
import ModalIdentitiesAdd from "src/components/identities/modal/index.vue";
export default {
  name: "IdentitiesTableComponent",
  components: {
    ModalIdentitiesAdd,
  },
  setup,
};
</script>
