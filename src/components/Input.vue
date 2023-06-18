<script setup>
import { globalStore } from "@/stores/globalStore";
import { storeToRefs } from "pinia";
import { watch } from "vue";
import { _randomInt } from "@/utils/genNumber";
import { keypadColor } from "@/stores/keypadColor";
const keypadColorRender = keypadColor();

let globalVal = globalStore();
const { inputValue, targetValue, cannotInput } = storeToRefs(globalVal);

watch(inputValue, () => {
  if (globalVal.AcquireGameStatus() === 0) {
    globalVal.Start();
  }
  const inputValLen = inputValue.value.length;
  if (inputValLen > 0) {
    const inputChar = inputValue.value.charAt(inputValLen - 1);
    const targetChar = targetValue.value.charAt(inputValLen - 1);
    if (inputChar === targetChar) {
      keypadColorRender.SetKeypadColor(inputChar, true);
    } else {
      keypadColorRender.SetKeypadColor(inputChar, false);
    }
  }
  if (inputValLen >= 6) {
    inputValue.value = "";
    targetValue.value = globalVal.RefreshTarget();
    globalVal.Reduce();
  }
});
</script>

<template>
  <input v-model="inputValue" v-bind:readonly="cannotInput" />
</template>

<style scoped></style>
