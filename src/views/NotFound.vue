<template>
  <main class="text-center _404">
    <h1>404</h1>
    <h5>Page Not Found</h5>
    <button class="btn btn-danger" @click="navBack">{{`<`}} Back to your destination</button>
  </main>
</template>

<script>
export default {
    methods: {
      navBack(){
        this.$router.back();
      }
    }
}
</script>

<style>
._404{
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
._404 > h1{
  font-size: 25vh;
}

</style>