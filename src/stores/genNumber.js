import {computed, onMounted, reactive, ref, watch} from "vue";
import {defineStore} from "pinia";
import {selectMod} from "@/stores/mod";

export const genNumberArray = defineStore("genNumber", ()=>{
    const cnt = ref(1)
    let targetNumber = ref("")
    let inputNumber = ref("")

    function  setCnt(v) {
        cnt.value = v
        refreshShowNumber()

    }
    function _randomInt(n) {
        if (n <= 0) return -1;
        const limit = Math.pow(10, n);
        let value = Math.floor(Math.random() * limit);
        if (value < (limit / 10) && value !== 0) {
            return _randomInt(n);
        }
        return value
    }


    function popIdxChar(idx) {
        return targetNumber.value.charAt(idx - 1)
    }

    function refreshShowNumber() {
        targetNumber.value = _randomInt(6).toString()
    }

    function Destroy() {
        // button status reset
        cnt.value = 0
        targetNumber.value = ""
    }


    return {cnt,inputNumber, targetNumber, setCnt, refreshShowNumber, popIdxChar, Destroy}

})