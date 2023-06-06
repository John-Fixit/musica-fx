<template>
    <div class="col-sm-11 p-3 shadow mx-auto">
        <div v-if="new_music.length">
            <div class="row">
                <div class="col-lg-3 col-md-4 my-2" v-for="music in new_music" v-bind:key="music.id">
                    <div class="card h-100" :on-mouseenter="mouseEntered()">
                        <img v-bind:src=music.cover alt="cover image" class="card-img-top h-75">
                        <div class="card-body">
                            <h4 class="card-title">{{ music.title }}</h4>
                            <audio :src=music.audio controls class="mx-auto audio_tag"></audio>
                            <p>{{ music.artist }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="text-center">
            <div class="spinner-border text-danger" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Musica',
    data(){
        return {
            new_music: [],
            
        }
    },
    mounted(){
        this.getMusic();
    },
    methods: {
        async getMusic(){
            let url_new = 'https://musica-api.up.railway.app/new';        
            let query = await axios.get(url_new);
            let response = await query;
            // console.log(response);
            this.new_music = response.data;
        },
        mouseEntered(){

        }
    }
}
</script>

<style>
.audio_tag{
    height: 30px;
    width: 80%;
}

</style>