<script>
import TheWelcome from '../components/TheWelcome.vue'
import {store} from '../stores/store';
export default {
  name: "Home",
  data (){
    return{
      musics: store.new_music
    }
  },
  mounted(){
    console.log(this.musics);
  }
}
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
