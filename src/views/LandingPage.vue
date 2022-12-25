<template>
    <div class="landingPage">landingPage vc</div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    mounted() {
        this.setCurrPage('')
    },
    methods: {
        ...mapMutations(['setCurrPage']),
    },
}
</script>

<style></style>
