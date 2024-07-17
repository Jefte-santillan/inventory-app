import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import columns from "./columns";

export default function UseShowOperations() {
  const loading = ref(false);
  const operation = ref([]);
  const route = useRoute();
  const id = route.params.id;
  const url = "http://laravel-api-inventary.local/api/operations/" + id;
  const modal = ref(false);
  const buttonOut = ref(true);

  async function show() {
    loading.value = true;
    await axios.get(url).then(onSuccess).catch(onCath);
  }

  function onSuccess(response) {
    loading.value = false;
    operation.value = [response?.data?.data];
    operation.value[0].created_at = formatDate(operation.value[0].created_at);
    if (!operation.value[0].out_identity_id) {
      buttonOut.value = false;
    }
  }

  function onCath() {
    loading.value = false;
    Notify.create({
      type: "negative",
      message: "Error al guardar",
      icon: "error",
    });
  }

  function showModa() {
    modal.value = !modal.value;
  }

  function onSuccessOut() {
    show();
    modal.value = false;
  }

  onMounted(() => {
    show();
  });

  function formatDate(inputDate) {
    const date = new Date(inputDate);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  }

  return {
    show,
    operation,
    columns,
    formatDate,
    showModa,
    loading,
    modal,
    buttonOut,
    onSuccessOut,
  };
}
