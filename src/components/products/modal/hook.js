import { computed, ref, watch } from "vue";
import axios from "axios";
import { Notify } from "quasar";

export default function useModalIdentity(props, context) {
  const modal = computed(() => props.modal);
  const url = "http://laravel-api-inventary.local/api/products";
  const identity = ref(null);
  const form = ref({
    name: null,
    created_identity_id: null,
  });
  const loading = ref(false);

  async function store() {
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
    context.emit("success-store");
  }

  function onCath(error) {
    loading.value = false;
    Notify.create({
      type: "negative",
      message: "Error al guardar",
      icon: "error",
    });
  }

  watch(identity, (newValue) => {
    console.log(newValue);
    form.value.created_identity_id = newValue.id;
  });

  return {
    form,
    identity,
    store,
    modal,
    loading,
  };
}
