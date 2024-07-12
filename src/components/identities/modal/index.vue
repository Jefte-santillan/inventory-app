<template>
  <q-dialog
    v-bind="$attrs"
    persistent
    transition-show="scale"
    transition-hide="scale"
  >
    <q-card class="bg-primary text-white" style="width: 300px">
      <q-card-section>
        <div class="text-h6">Agregar usuario</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input
          filled
          v-model="form.name"
          label="Nombre"
          :loading="loading"
          disable="loading"
        />
      </q-card-section>

      <q-card-actions align="right" class="bg-white text-primary">
        <q-btn flat label="Guardar" @click="storeIdentity" :loading="loading" />
        <q-btn flat label="Salir" v-close-popup :loading="loading" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script>
import setup from "./hook";
import props from "./props";
export default {
  name: "ModalIdentitiesAdd",
  setup,
  props,
};
</script>
./index.vue
