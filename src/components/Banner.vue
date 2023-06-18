<script setup>
import { globalStore } from "@/stores/globalStore";
import { storeToRefs } from "pinia";
const globalVal = globalStore();
const { mode } = storeToRefs(globalVal);
const parameterArr = [
  ["10s", "30s", "60s", "90s", "120s"],
  [10, 20, 50, 100, 200],
];
</script>

<template>
  <button @click="globalVal.ModifyMode('time')">Time Mode</button>
  <button @click="globalVal.ModifyMode('count')">Count Mode</button>

  <div v-if="mode.length !== 0">
    <div v-if="mode === 'time'">
      <button
        v-for="row in parameterArr[0]"
        @click="globalVal.SetCnt(parseInt(row))"
      >
        {{ row }}
      </button>
    </div>
    <div v-if="mode === 'count'">
      <button v-for="row in parameterArr[1]" @click="globalVal.SetCnt(row)">
        {{ row }}
      </button>
    </div>
  </div>

  <!--  <input type="checkbox">-->
</template>

<style scoped></style>
