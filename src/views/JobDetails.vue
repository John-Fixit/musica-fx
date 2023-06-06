<template>
  <h1>{{ id }}</h1>  <!-- How to get the paticular dynamic route -->
</template>

<script>
export default {
    props: ["id"],
    data(){
        return{
            id: this.$route.params.id
        }
    }
}
</script>

<style>

</style>