<template>
    <div class="profile-page">
        <v-container>
            <div class="text-h1">Profile Page</div>
            <div>{{ userDetails }}</div>
        </v-container>
    </div>
</template>

<script>
import { mapGetters,mapMutations } from 'vuex'
export default {
    computed: {
        ...mapGetters(['userDetails']),
    },
    mounted() {
        this.setCurrPage('profile')
    },
    methods: {
        ...mapMutations(['setCurrPage']),
    },
}
</script>

<style scoped></style>
