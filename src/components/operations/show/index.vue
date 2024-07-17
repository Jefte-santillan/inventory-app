<template>
  <div class="q-pa-md vertical-middle">
    <q-table
      title="Detalle de operación"
      :rows="operation"
      :columns="columns"
      :loading="loading"
      flat
      bordered
      grid
      hide-header
      hide-bottom
    >
      <template v-slot:top>
        <q-space />
        <q-btn
          color="primary"
          label="Dar salida"
          @click="showModa()"
          :disable="buttonOut"
        />
      </template>
    </q-table>
  </div>
  <modal-out-operation v-model="modal" @success="onSuccessOut" />
</template>
<script>
import setup from "./hook";
import ModalOutOperation from "src/components/operations/modal/index.vue";
export default {
  name: "ShowOperation",
  components: { ModalOutOperation },
  setup,
};
</script>
