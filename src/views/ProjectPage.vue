<template>
    <div class="project-page">
        <router-view></router-view>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    computed: {
        ...mapGetters(['userDetails']),
    },
    mounted() {
        this.setCurrPage('projects')
    },
    methods: {
        ...mapMutations(['setCurrPage']),
    },
}
</script>

<style scoped></style>
