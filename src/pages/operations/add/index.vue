<template>
  <q-page class="q-ma-lg">
    <form-operation-add />
  </q-page>
</template>

<script>
import FormOperationAdd from "src/components/operations/add/index.vue";
export default {
  name: "OperationAddPage",
  components: { FormOperationAdd },
};
</script>
