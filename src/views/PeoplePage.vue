<template>
    <div class="people-page">
        <v-container>
            <div class="text-h1">Peoples</div>
        </v-container>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    mounted() {
        this.setCurrPage('people')
    },
    methods: {
        ...mapMutations(['setCurrPage']),
    },
}
</script>

<style scoped></style>
