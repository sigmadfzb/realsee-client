import { ref, onBeforeUnmount } from "vue";

function useWindowDimensions() {
  const width = ref<number>(window.innerWidth);
  const height = ref<number>(window.innerHeight);

  const isMobile = ref<boolean>(window.innerWidth / window.innerHeight ? false : true)

  const listener = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
    isMobile.value = window.innerWidth / window.innerHeight ? false : true
  };

  window.addEventListener("resize", listener, false);
  onBeforeUnmount(() => {
    window.removeEventListener("resize", listener, false);
  });
  return { width, height, isMobile };
}
export { useWindowDimensions };
