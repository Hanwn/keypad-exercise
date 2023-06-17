import {computed, ref, watch} from "vue";
import {defineStore} from "pinia";
import {genNumberArray} from "@/stores/genNumber";

export const selectMod = defineStore("mod", ()=>{
    const mod = ref("")
    const gameStart = ref(false)
    const gameOver = ref(false)
    function time2Count() {
        if (mod.value.length === 0 || mod.value === "time") {
            mod.value = "count"
        }
    }
    function count2Time() {
        if (mod.value.length === 0 || mod.value === "count") {
            mod.value = "time"
        }
    }

    const startOrNot = computed(()=> {
        return gameOver.value === gameStart.value
    })


    function StartEnter() {
        gameOver.value = false
        gameStart.value = true
        if (mod.value === "time") {
            const genNumber = genNumberArray()
            setTimeout(()=> {
                StopGame()
                genNumber.Destroy()
            }, genNumber.cnt * 1000)
        } else {

        }
    }

    function StopGame() {
        gameOver.value = true
        gameStart.value = false
        // forbid input

        alert("game over")
    }

    function Reset() {
        gameOver.value = false
        gameStart.value = false
    }

    return {mod, startOrNot, time2Count, count2Time, StartEnter}
})