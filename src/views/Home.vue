<template>
  <div class="col-sm-11 p-3 shadow mx-auto">
        <div v-if="all_music.length">
            <div class="row">
                <div class="col-lg-3 col-md-4 my-2" v-for="music in all_music" v-bind:key="music.id">
                    <div class="card h-100">
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
            <div class="spinner-border text-primary" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data (){
    return{
      all_music: []
    }
  },
  mounted(){
    this.get_all_music();
  },
  methods: {
        async get_all_music(){
            const url = 'https://musica-api.up.railway.app/popular'; 
            const query = await axios.get(url);
            const response = await query;
            this.all_music = response.data;
            const newMusic = await axios.get(`https://musica-api.up.railway.app/new`);
            const newMusicResponse = await newMusic;
            console.table(this.all_music.concat(newMusicResponse?.data));
            this.all_music = response?.data.concat(newMusicResponse?.data)
        },
    }
}
</script>

<style>

</style>