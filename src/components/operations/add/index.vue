<template>
  <div class="row">
    <div class="col-6">
      <q-input v-model="form.number_serie" label="Numero o serie" />
      <select-product
        v-model="product"
        option-value="id"
        map-options
        use-input
        clearable
        hide-selected
        fill-input
        :loading="loading"
        :disable="loading"
      />
      <select-identity
        v-model="identity"
        option-value="id"
        map-options
        use-input
        clearable
        hide-selected
        fill-input
        :loading="loading"
        :disable="loading"
      />
      <q-btn
        @click="store"
        label="Guardar"
        color="primary"
        flat
        :loading="loading"
        :disable="loading"
      />
    </div>
    <div class="col-6">
      <div class="column items-center">
        <div class="col-12">
          <img v-if="qrImage" :src="qrImage" alt="Código QR" />
        </div>
        <div class="col-12">
          <q-btn
            @click="printQR"
            :disabled="!qrImage"
            label="Imprimir QR"
            color="primary"
            flat
            :loading="loading"
            :disable="loading"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import setup from "./hook";
import selectProduct from "src/components/operations/selectProduct/index.vue";
import selectIdentity from "src/components/operations/selectIdentity/index.vue";
export default {
  name: "FormOperationAdd",
  components: {
    selectProduct,
    selectIdentity,
  },
  setup,
};
</script>
./index.vue
