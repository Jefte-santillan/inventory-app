import { computed, ref } from "vue";
import axios from "axios";
import { Notify } from "quasar";

export default function useModalIdentity(props) {
  const modal = computed(() => props.modal);
  const url = "http://laravel-api-inventary.local/api/identities";
  const form = ref({
    name: null,
  });
  const loading = ref(false);

  async function storeIdentity() {
    loading.value = true;
    await axios
      .post(url, form.value)
      .then(onSuccess)
      .catch(onCath)
      .finally(() => {
        loading.value = false;
      });
  }

  function onSuccess() {
    loading.value = false;
    Notify.create({
      type: "positive",
      message: "Se guardo de manera correcta",
      icon: "done",
    });
    form.value.name = null;
  }

  function onCath(error) {
    loading.value = false;
    Notify.create({
      type: "negative",
      message: "Error al guardar",
      icon: "error",
    });
  }

  return {
    form,
    storeIdentity,
    modal,
    loading,
  };
}
