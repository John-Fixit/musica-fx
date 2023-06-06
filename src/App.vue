<script>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './views/Navbar.vue'
import Musica from './views/Musica.vue'
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
  <!-- <header> -->
    <Navbar />
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>|
        <RouterLink to="/about">About</RouterLink>|
        <RouterLink :to="{name: 'jobs'}">Jobs</RouterLink>|
        <RouterLink to="/api">API</RouterLink>
        <RouterLink to="/music">Music</RouterLink>
      </nav> -->
  <!-- </header> -->

  <RouterView />

    <!-- <div>
          <button @click="redirect">Redirect</button>
          <button @click="back">Go back</button>
          <button @click="next">Next</button>
      </div> -->
</template>

<style scoped>
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
