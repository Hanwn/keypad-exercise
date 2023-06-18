<script setup>
import Banner from "@/components/Banner.vue";
import Input from "@/components/Input.vue";
import Keypad from "@/components/keypad.vue";
import Score from "@/components/score.vue";
import Monitor from "@/components/Monitor.vue";
</script>

<template>
  <div>
    <div class="placeholder"></div>
    <div class="placeholder container">
      <div id="banner">
        <Banner></Banner>
      </div>
      <div id="input">
        <div>
          <Monitor></Monitor>
          <Input></Input>
        </div>
        <div>
          <Keypad></Keypad>
        </div>
      </div>
      <div id="score">
        <Score></Score>
      </div>
    </div>
    <div class="placeholder"></div>
  </div>
</template>

<style scoped>
.placeholder {
  display: grid;
}
.container {
}
</style>
