import {defineStore} from "pinia";
import {ref} from "vue";


export const globalStatus = defineStore("globalStatus", ()=>{
    const gameOver = ref(false)
})