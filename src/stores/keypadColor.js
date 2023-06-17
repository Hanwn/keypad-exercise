import {defineStore} from "pinia";
import {reactive} from "vue";


export const keypadColor = defineStore("keypadColor", ()=>{
    const keypadColorMap = reactive({
        0:{},
        1:{},
        2:{},
        3:{},
        4:{},
        5:{},
        6:{},
        7:{},
        8:{},
        9:{},
    })

    function SetKeypadColor(key, right) {
        keypadColorMap[key]["color"] = "white"
        if (right === true) {
            keypadColorMap[key]["background"] = "green"
        } else {
            keypadColorMap[key]["background"] = "red"
        }
        setTimeout(()=>{
            keypadColorMap[key]["color"] = ""
            keypadColorMap[key]["background"] = ""
        }, 100)
    }

    return {keypadColorMap, SetKeypadColor}
})