<template>
    <v-card  class="pa-2" elevation="0">
        <v-row class="align-center">
            <v-col cols="1" class="ml-2">
                <v-avatar  size="25">
                    <img :src="issue ? issue.type.logo : ''" :alt="userDetails.name" />
                </v-avatar>
            </v-col>
            <v-col cols="6">{{issue.summary}}</v-col>
            <v-col cols="3">{{issue.status}}</v-col>
            <v-spacer></v-spacer>
            <v-col cols="1">
                <v-avatar color="primary" size="30">
                    <img :src="userDetails ? userDetails.profilePic : ''" :alt="userDetails.name" />
                </v-avatar>
            </v-col>
        </v-row>
        <v-divider class="mt-1"></v-divider>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'CreatedByMe',
    props: ['issue'],
    computed: {
        ...mapGetters(['userDetails']),
    },
    mounted(){
        console.log(this.issue)
    }
}
</script>

<style></style>
