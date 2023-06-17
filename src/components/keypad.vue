<script setup>

import {keypadColor} from "@/stores/keypadColor";
let keypadColors = keypadColor()

let keypadArr = [[7,8,9],
                 [4,5,6],
                 [1,2,3],
                 ['.', 0, '*']]

</script>

<template>
  <table>
    <tr v-for="row in keypadArr">
      <td v-for="item in row" :style="keypadColors.keypadColorMap[item]">{{item}}</td>
    </tr>
  </table>
</template>

<style scoped>

</style>