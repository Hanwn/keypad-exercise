<script setup>

import {genNumberArray} from "@/stores/genNumber";

let genNumber = genNumberArray()

</script>

<template>
  <input :value="genNumber.targetNumber" readonly="readonly">
</template>

<style scoped>

</style>