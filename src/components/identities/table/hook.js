import { ref } from "vue";
import columns from "./columns";
import axios from "axios";

export default function UseTableIdentities() {
  const currentPagination = ref({
    sortBy: "desc",
    descending: false,
    page: 1,
    rowsPerPage: 15,
  });
  const params = ref({
    page: 1,
    limit: 15,
  });
  const modal = ref(false);
  const rows = ref([]);
  const url = "http://laravel-api-inventary.local/api/identities";
  const loading = ref(false);

  function openModal() {
    modal.value = !modal.value;
  }

  async function indexIdentity() {
    loading.value = true;
    await axios
      .get(url, { params: params.value })
      .then(onSuccess)
      .catch(onCath);
  }

  function onSuccess(response) {
    loading.value = false;
    rows.value = response.data.data;
  }

  function onCath(error) {
    loading.value = false;
    Notify.create({
      type: "negative",
      message: "Error al guardar",
      icon: "error",
    });
  }

  function updatedSuccess() {
    indexIdentity();
  }

  const onPaginationChange = (newPagination) => {
    currentPagination.value = newPagination;
    params.value.limit = newPagination.rowsPerPage;
    params.value.page = newPagination.page;

    indexIdentity();
  };

  return {
    onPaginationChange,
    updatedSuccess,
    openModal,
    currentPagination,
    modal,
    columns,
    rows,
    loading,
  };
}
