<script setup lang="ts">
import { FiveProvider, FiveCanvas } from "@realsee/five/vue";
import ModeController from "./components/ModeController.vue";
import TagginController from "./components/TagginController.vue";
// import { parseWork } from "@realsee/five";
import { ref } from "vue";
import { useWindowDimensions } from "@/utils/domUtils";

const { width, height } = useWindowDimensions();

const work = ref();
const baseURL = import.meta.env.VITE_BASE_URL;
const workURL = `${baseURL}/vr/`;

fetch(workURL)
  .then((response) => response.json())
  .then((res) => (work.value = (res.result.workJson)));
</script>

<template>
  <FiveProvider :work="work">
    <FiveCanvas :width="width" :height="height" />
    <ModeController />
    <TagginController />
  </FiveProvider>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
