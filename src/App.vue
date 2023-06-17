<script setup>
import Banner from '@/components/Banner.vue'
import Input from '@/components/Input.vue'
import Keypad from '@/components/keypad.vue'
import Score from '@/components/score.vue'
import Monitor from '@/components/Monitor.vue'
import {globalStatus} from "@/stores/globalStatus";

let gameOver = globalStatus()
</script>

<template>
  <div>
    <div>

    </div>
    <div>
      <Banner></Banner>
      <div>
        <div>
          <Monitor></Monitor>
          <Input></Input>
        </div>
        <Keypad></Keypad>
      </div>
      <div>
        <Score v-if="gameOver"></Score>
      </div>
    </div>
    <div>

    </div>
  </div>
</template>

<style scoped>
</style>
