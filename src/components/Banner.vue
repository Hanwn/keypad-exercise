<script setup>

import {selectMod} from "@/stores/mod";
import {genNumberArray} from "@/stores/genNumber";

let genNumber = genNumberArray()

let selectModObj = selectMod()

</script>

<template>

  <button @click="selectModObj.count2Time()">Time Mode</button>
  <button @click="selectModObj.time2Count()">Count Mode</button>

  <div v-if="selectModObj.mod.length !== 0">
    <div v-if="selectModObj.mod === 'time'">
      <button @click="genNumber.setCnt(10)">10s</button>
      <button @click="genNumber.setCnt(30)">30s</button>
      <button @click="genNumber.setCnt(60)">60s</button>
      <button @click="genNumber.setCnt(90)">90s</button>
      <button @click="genNumber.setCnt(120)">120s</button>
    </div>
    <div v-if="selectModObj.mod === 'count'">
      <button @click="genNumber.setCnt(10)">10</button>
      <button @click="genNumber.setCnt(20)">20</button>
      <button @click="genNumber.setCnt(50)">50</button>
      <button @click="genNumber.setCnt(100)">100</button>
      <button @click="genNumber.setCnt(200)">200</button>
    </div>
  </div>

<!--  <input type="checkbox">-->

</template>

<style scoped>
</style>