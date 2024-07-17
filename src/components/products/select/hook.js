import { ref, watch } from "vue";
import axios from "axios";

export default function useSelect(context) {
  const pagination = ref({
    page: 1,
    rowsPerPage: 15,
    rowsNumber: 0,
  });
  const selection = ref();
  const options = ref([]);
  const loading = ref(false);
  const url = "http://laravel-api-inventary.local/api/identities";

  function loadOptions({ query }) {
    loading.value = true;
    const params = {
      query: query,
      pagination: pagination.value,
    };

    return axios
      .get(url, { params: params })
      .then(onSuccessLoadOptions)
      .catch(onCatchLoadOptions);
  }

  function onSuccessLoadOptions(result) {
    loading.value = false;
    options.value = result.data.data;
  }

  function onCatchLoadOptions(result) {
    loading.value = false;
  }

  function onFilter(query, update) {
    loadOptions({ query }).then(() => {
      update(options.value);
    });
  }

  function onChangeSelection(newValue) {
    selection.value = newValue;
  }

  return {
    onChangeSelection,
    onFilter,
    selection,
    options,
    loading,
  };
}
