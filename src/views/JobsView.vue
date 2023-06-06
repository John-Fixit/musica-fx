<template>
    <h1>Job View Component</h1>

    <div class="" v-for="job in jobs" :key="job.id">
        <RouterLink :to="'/jobs/'+job.id">
            <h3>{{ job.name }}</h3>
        </RouterLink>
    </div>
    
</template>

<script>
export default {
 data(){
    return{
        jobs: [
            {name: "Software developer", id: 1, details: "Fullstack software developer"},
            {name: "Data scientist", id: 2, details: "Good certified data scientist"},
            {name: "Chef", id: 3, details: "International chef"},
        ]
    }
 },

}
</script>

<style>

</style>