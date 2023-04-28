<template>
  <div class="fixed bottom-0 left-0 right-0 h-16 bg-white">
    <div class="flex items-center justify-center h-full">
      <button
        v-for="(item, index) in modes"
        :key="index"
        class="p-2 mx-2 bg-blue-100 rounded-lg"
        :class="{ active: active === item.value }"
        @click="handleModeButtonClick(item)"
      >
        {{ item.label }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFiveCurrentState } from "@realsee/five/vue";
import { Five } from "@realsee/five";
import { ref } from "vue";

// Define a type for the mode object
type Mode = {
  label: string;
  value: keyof typeof Five.Mode; // Use keyof typeof to ensure the value is valid
};

// Define an array of mode objects
const modes = ref<Mode[]>([
  { label: "全景漫游", value: "Panorama" },
  { label: "三维空间", value: "Floorplan" },
  { label: "户型图模式", value: "Topview" },
]);

// Define a ref for the active button index
const active = ref("Panorama");

// Get the setState function from the state object returned by useFiveCurrentState
const setState = useFiveCurrentState()[1];

// Define a function to handle button clicks
function handleModeButtonClick(item: Mode) {
  const mode = Five.Mode[item.value];
  active.value = item.value;
  setState({ mode });
}
</script>

<style scoped>
.active {
  background-color: #4f46e5;
  color: white;
}
</style>
