<template>
    <h1>{{ store.count }}</h1>
    <button class="btn btn-danger" @click="store.count++">Add</button>
</template>

<script>
import {store} from '../stores/store'
export default {
    data(){
        return{
            store
        }
    }
}
</script>

<style>

</style>