<template>
    <v-app>
        <RouterView />
    </v-app>
</template>

<script>
export default {
    name: 'App',

    data: () => ({
        //
    }),
    mounted: () => {
        console.log(process.env.VUE_APP_BASE_URL)
    },
}
</script>
