import { reactive } from "vue";

export const store = reactive({
    count: 0,
    new_music: [],
    increase(){
        this.count++;
    },
    async getMusic(){
        let url_new = 'https://musica-api.up.railway.app/new';        
        let query = await axios.get(url_new);
        let response = await query;
        console.log(response?.data);
        this.new_music = response.data;
    }
});