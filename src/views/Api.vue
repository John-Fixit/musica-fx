<template>
    <div >
        <h2 class="">List of Users</h2>
        <div class="" v-if="allUsers">
            <div class="card shadow-sm m-2" v-for="user in allUsers" :key="user.id">
                <p>
                    {{ user.name }}
                </p>
            </div>
        </div>
        <div v-else>
            Internewt connection error!
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
           allUsers: []
        }
    },
    mounted(){
        this.getUsers();
    },  
    methods: {
        getUsers(){
            let url = 'https://jsonplaceholder.typicode.com/users';
            let musica = 'https://musica-api.up.railway.app/new'; // /playlist /popular
            axios.get(url).then((response)=>{
                console.log(response);
                this.allUsers = response.data;
            })
        }
    }
}
</script>

<style>

</style>