<template>
    <div class="dashboard">
        <v-container>
            <div class="text-h3">DashBorad Page</div>
        </v-container>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    data: () => {
        return {
            user: 'SAchin',
        }
    },
    mounted() {
        this.setCurrPage('dashboard')
    },
    methods: {
        ...mapMutations(['setCurrPage']),
    },
}
</script>

<style></style>
