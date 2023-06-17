<script setup>

import {ref, watch} from "vue";
import {genNumberArray} from "@/stores/genNumber";
import {keypadColor} from "@/stores/keypadColor";
import {selectMod} from "@/stores/mod";

let genNumber = genNumberArray()
let keypadColors = keypadColor()
let selectMode = selectMod()
const inputNumber = ref("")

watch(inputNumber, ()=>{
  // if (selectMode)
  if (selectMode.startOrNot) {
    selectMode.StartEnter()
  }
  const inputNumberLen = inputNumber.value.length
  if (inputNumberLen > 0) {
    const inputVal = inputNumber.value.charAt(inputNumberLen - 1)
    const targetVal = genNumber.popIdxChar(inputNumberLen)
    if (inputVal === targetVal) {
      keypadColors.SetKeypadColor(inputVal, true)
    } else {
      keypadColors.SetKeypadColor(inputVal, false)
    }
  }
  if (inputNumber.value.length >= 6) {
    inputNumber.value = ""
    genNumber.refreshShowNumber()
  }
})

function focusInputArea() {
  console.log("xxx")
}


</script>


<template>

  <input v-model="genNumber.inputNumber">

</template>

<style scoped>

</style>