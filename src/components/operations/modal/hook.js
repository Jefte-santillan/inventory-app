import { computed, ref, watch } from "vue";
import axios from "axios";
import { Notify } from "quasar";
import { useRoute } from "vue-router";

export default function useModalIdentity(props, context) {
  const modal = computed(() => props.modal);
  const identity = ref(null);
  const route = useRoute();
  const id = route.params.id;
  const url =
    "http://laravel-api-inventary.local/api/operations/" + id + "/out";
  const form = ref({
    identity_id: null,
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
    context.emit("success");
  }

  function onCath(error) {
    loading.value = false;
    Notify.create({
      type: "negative",
      message: "Error al guardar",
      icon: "error",
    });
    form.value = [];
  }

  watch(identity, (newValue) => {
    form.value.identity_id = newValue.id;
  });

  return {
    form,
    identity,
    store,
    modal,
    loading,
  };
}
