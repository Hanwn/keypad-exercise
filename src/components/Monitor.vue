<script setup>
import { globalStore } from "@/stores/globalStore";
import { storeToRefs } from "pinia";

const globalVal = globalStore();
const { targetValue } = storeToRefs(globalVal);
</script>

<template>
  <input :value="targetValue" readonly="readonly" />
</template>

<style scoped></style>
