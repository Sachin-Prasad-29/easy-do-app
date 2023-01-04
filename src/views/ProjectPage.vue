<template>
    <div class="project-page">
        <v-container>
            <router-view></router-view>
        </v-container>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
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
