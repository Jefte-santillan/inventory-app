<template>
  <q-dialog
    v-bind="$attrs"
    persistent
    transition-show="scale"
    transition-hide="scale"
  >
    <q-card class="bg-primary text-white" style="width: 300px">
      <q-card-section>
        <div class="text-h6">Dar salida producto</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <select-identities
          v-model="identity"
          option-value="id"
          map-options
          use-input
          clearable
          hide-selected
          fill-input
          :disable="loading"
        />
      </q-card-section>
      <q-card-actions align="right" class="bg-white text-primary">
        <q-btn flat label="Guardar" @click="store" :loading="loading" />
        <q-btn flat label="Salir" v-close-popup :loading="loading" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import setup from "./hook";
import props from "./props";
import selectIdentities from "src/components/products/select/index.vue";
export default {
  name: "ModalOutOperation",
  setup,
  components: { selectIdentities },
  props,
};
</script>
./index.vue
