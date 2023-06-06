<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './views/Navbar.vue'
import Musica from './views/NewMusic.vue'
export default({
  components: {
    Navbar
  },
  methods:{
    redirect(){
        this.$router.push('/jobs')
    },
    back(){
        this.$router.go(-1)
    },
    next(){
        this.$router.go(1)
    }
}

})

</script>

<template>  
    <Navbar />
  <RouterView />
</template>
