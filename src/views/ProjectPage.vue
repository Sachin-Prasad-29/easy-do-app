<template>
    <div class="project-page">
        <v-container>
            <div class="text-h3">Project Page</div>
        </v-container>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    mounted() {
        this.setCurrPage('projects')
        
    },
    methods: {
        ...mapMutations(['setCurrPage']),
    },
}
</script>

<style scoped></style>
