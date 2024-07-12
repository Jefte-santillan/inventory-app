<template>
  <q-page>
    <identities-table-component />
  </q-page>
</template>

<script>
import IdentitiesTableComponent from "src/components/identities/table/index.vue";
export default {
  name: "IdentitiesTablePage",
  components: {
    IdentitiesTableComponent,
  },
};
</script>
