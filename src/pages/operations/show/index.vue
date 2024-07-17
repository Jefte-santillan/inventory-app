<template>
  <q-page>
    <show-operation />
  </q-page>
</template>

<script>
import ShowOperation from "src/components/operations/show/index.vue";
export default {
  name: "ShowOperationsPage",
  components: {
    ShowOperation,
  },
};
</script>
