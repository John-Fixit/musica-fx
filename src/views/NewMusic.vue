
<script>
import axios from 'axios';
import { store } from '../stores/store';
export default {
    name: 'New-music',
    data(){
        return {
            new_music: []
        }
    },
    mounted(){
        this.getMusic();
    },
    methods: {
        async getMusic(){
            const url_new = 'https://musica-api.up.railway.app/new';     
            const query = await axios.get(url_new);
            const response = await query;
            console.log(response?.data)
            this.new_music = response?.data;
        },
        mouseEntered(){

        }
    }
}
</script>
<template>
    <div class="col-sm-11 p-3 shadow mx-auto">
        <div v-if="new_music.length">
            <div class="row">
                <div class="col-lg-3 col-md-4 my-2" v-for="music in new_music" v-bind:key="music.id">
                    <div class="card h-100" :on-mouseenter="mouseEntered()">
                        <img v-bind:src=music.cover alt="cover image" class="card-img-top h-75">
                        <div class="card-body">
                            <h5 class="card-title">Title: {{ music.title }}</h5>
                            <audio :src=music.audio controls class="mx-auto audio_tag"></audio>
                            <p>Artist: {{ music.artist }}</p>
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

<style>
.audio_tag{
    height: 30px;
    width: 95%;
}

</style>