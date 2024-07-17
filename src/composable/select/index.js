import { ref, watch } from "vue";

export default function useSelect(props, context, service) {
  const pagination = ref({
    page: 1,
    rowsPerPage: props.limit || 15,
    rowsNumber: 0,
  });
  const selection = ref(props.modelValue);
  const options = ref(props.initialOptions || []);
  const filter = ref(props.filters || []);
  const loading = ref(false);

  function loadOptions({ query }) {
    loading.value = true;
    const params = {
      query,
      pagination: pagination.value,
    };

    if (filter.value.length) {
      params.filter = JSON.stringify(filter.value);
    }

    return service
      .index(params)
      .then(onSuccessLoadOptions)
      .catch(onCatchLoadOptions);
  }

  function onSuccessLoadOptions(result) {
    loading.value = false;
    options.value = result.data;
  }

  function onCatchLoadOptions(result) {
    loading.value = false;
    context.emit("error-load-options", result);
  }

  function onFilter(query, update) {
    loadOptions({ query }).then(() => {
      update(options.value);
    });
  }

  function onChangeSelection(newValue) {
    selection.value = newValue;
    context.emit("update:modelValue", newValue);
    context.emit("selection-change", { newValue, options });
  }

  watch(props, (newValue) => {
    selection.value = newValue.modelValue;
  });

  watch(
    () => props.filters,
    (newValue) => {
      filter.value = newValue;
    }
  );

  watch(
    () => props.initialOptions,
    (newValue) => {
      options.value = newValue;
    }
  );

  return {
    onChangeSelection,
    onFilter,
    selection,
    options,
  };
}
