<template>
    <div class="your-work">
        <v-container>
            <div class="text-h3">Your Work</div>
        </v-container>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    mounted() {
        this.setCurrPage('yourwork')
    },
    methods: {
        ...mapMutations(['setCurrPage']),
    },
}
</script>

<style scoped></style>
