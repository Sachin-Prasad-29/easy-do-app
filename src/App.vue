<template>
    <v-app>
       <div v-show="page"><NavBar :page="page"  /></div> 
        <RouterView />
    </v-app>
</template>

<script>
import NavBar from '@/components/NavBar'
import { mapGetters } from 'vuex'
export default {
    name: 'App',
    components: { NavBar },

    data: () => ({}),
    computed: {
        ...mapGetters(['currPage']),
        page() {
            return this.currPage
        },
    },
    mounted: () => {
    },
}
</script>

<style>

</style>
