import { defineStore } from "pinia";
import { ref, watch } from "vue";
import { _randomInt } from "@/utils/genNumber";

export const globalStore = defineStore("globalValue", () => {
  const inputValue = ref("");
  const targetValue = ref("");
  const mode = ref("time");
  const cnt = ref(0);

  // 0 not start, when enter
  // 1 started
  // 2 over
  // 0 ---> 1 ---> 2
  const gameStatus = ref(0);
  const cannotInput = ref(true);

  function ModifyMode(newMode) {
    if (mode.value !== newMode) {
      mode.value = newMode;
    }
  }

  function AcquireGameStatus() {
    return gameStatus.value;
  }

  function Start() {
    gameStatus.value = 1;
    if (mode.value === "time") {
      setTimeout(() => {
        Over();
      }, cnt.value * 1000);
    } else {
      watch(cnt, () => {
        if (cnt.value === 0) {
          Over();
          cnt.value--;
        }
      });
    }
  }

  function Reduce() {
    if (mode.value === "count") {
      cnt.value--;
    }
  }

  function Over() {
    gameStatus.value = 2;
    targetValue.value = "";
    inputValue.value = "";
    cannotInput.value = true;
    alert("Game Over");
  }

  function Stop() {}

  function Cancel() {}
  function SetCnt(v) {
    gameStatus.value = 0;
    cannotInput.value = false;
    cnt.value = v;
    targetValue.value = RefreshTarget();
  }
  function RefreshTarget() {
    return _randomInt(6).toString();
  }

  return {
    inputValue,
    targetValue,
    mode,
    cnt,
    cannotInput,
    ModifyMode,
    SetCnt,
    Start,
    RefreshTarget,
    Reduce,
    AcquireGameStatus,
  };
});
