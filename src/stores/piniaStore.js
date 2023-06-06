import { defineStore } from "pinia";
import { ref } from "vue";

export const useCounterStore = defineStore({
    state:()=>{
        return {
            count: ref(0)
        }
    },
    action: ()=>{
        return {
            increase(){
                count.value++
            }
        }
    }
})