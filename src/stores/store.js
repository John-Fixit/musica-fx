import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
    count: 0,
    popular_music: [],
    increase(){
        this.count++;
    },
    async getMusic(){
        let _url = 'https://musica-api.up.railway.app/popular';        
        let query = await axios.get(_url);
        let response = await query;
        console.log(response?.data);
      this.popular_music = response.data;
    }
});