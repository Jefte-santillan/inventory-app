import { ref, watch } from 'vue'

export default function useUiSelect (props) {
  const selection = ref(props.modelValue)

  watch(props, (newValue) => {
    selection.value = newValue.modelValue
  })

  return {
    selection
  }
}
