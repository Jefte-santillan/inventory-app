import { useRouter } from "vue-router";

export default function useDrawer() {
  const router = useRouter();

  function navigateTo(route) {
    router.push({ name: route });
  }

  return {
    navigateTo,
  };
}
