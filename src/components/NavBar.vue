<template>
    <div class="navbar">
        <v-app-bar dense elevation="2">
            <v-app-bar-nav-icon left class="menu-Icon" medium>
                <v-icon> mdi-apps</v-icon>
            </v-app-bar-nav-icon>
            <v-toolbar-title class="toolbar-main" left>
                <router-link to="/your-work" class="text-decoration-none">
                    <v-btn large tile elevation="0" class="button-main"
                        ><v-img max-height="25" max-width="25" src="@/assets/images/app-logo.svg"></v-img
                        ><span class="font-weight-bold text-capitalize ml-2">Easy Do Tool</span></v-btn
                    >
                </router-link>
            </v-toolbar-title>
            <v-toolbar-title left>
                <router-link to="/your-work" class="text-decoration-none ml-3">
                    <v-btn tile large elevation="0" :class="page === 'yourwork' ? 'isActive' : 'notActive'">
                        <span class="text-capitalize">Your work</span>
                    </v-btn>
                </router-link>
            </v-toolbar-title>
            <v-toolbar-title left>
                <router-link
                    :to="{
                        name: 'allproject',
                        params: {
                            user:'Sachin'
                        },
                    }"
                    class="text-decoration-none ml-2"
                >
                    <v-btn tile large elevation="0" :class="page === 'projects' ? 'isActive' : 'notActive'">
                        <span class="text-capitalize">Projects</span>
                    </v-btn>
                </router-link>
            </v-toolbar-title>
            <v-toolbar-title left>
                <router-link to="/dashboard" class="text-decoration-none ml-2">
                    <v-btn tile large elevation="0" :class="page === 'dashboard' ? 'isActive' : 'notActive'">
                        <span class="text-capitalize">Dashboard</span>
                    </v-btn>
                </router-link>
            </v-toolbar-title>
            <v-toolbar-title left>
                <router-link to="/people" class="text-decoration-none ml-2">
                    <v-btn tile large elevation="0" :class="page === 'people' ? 'isActive' : 'notActive'">
                        <span class="text-capitalize">People</span>
                    </v-btn>
                </router-link>
            </v-toolbar-title>
            <v-toolbar-title left class="ml-5">
                <v-btn elevation="0" class="primary">
                    <span class="text-capitalize">Create</span>
                </v-btn>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-title>
                <v-text-field
                    outlined
                    dense
                    class="mt-6 p-0"
                    label="Search"
                    append-icon="mdi-magnify"
                    @click:append="false"
                    height="5"
                ></v-text-field>
            </v-toolbar-title>
            <v-toolbar-title left class="ml-1">
                <v-btn elevation="0" fab small>
                    <v-avatar size="24"><v-img src="@/assets/images/bell.svg" alt="" /></v-avatar>
                </v-btn>
            </v-toolbar-title>
            <v-toolbar-title left class="">
                <v-btn elevation="0" fab small>
                    <v-avatar size="24"><v-img src="@/assets/images/help.svg" alt="" /></v-avatar>
                </v-btn>
            </v-toolbar-title>
            <v-toolbar-title left class="mr-2">
                <v-btn elevation="0" fab small>
                    <v-avatar size="26"><v-img src="@/assets/images/setting-4.svg" alt="" /></v-avatar>
                </v-btn>
            </v-toolbar-title>

            <v-menu :nudge-width="220" transition="slide-y-transition" offset-y right rounded="sm" text-center outlined>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn fab elevation="0 white" small class="pa-0" v-bind="attrs" v-on="on">
                        <v-avatar size="39"><v-img src="@/assets/images/app-logo.svg" alt="" /></v-avatar>
                    </v-btn>
                </template>
                <v-card max-width="300px">
                    <v-list>
                        <v-layout column text-center>
                            <v-flex class="mt-5">
                                <v-badge avatar color="transparent" overlap offset-x="30" offset-y="30" bottom>
                                    <template v-slot:badge>
                                        <v-btn fab x-small elevation="0" class="h-6 info">
                                            <!-- <ChangeProfile /> -->
                                        </v-btn>
                                    </template>

                                    <v-avatar size="100">
                                        <v-img src="@/assets/images/app-logo.svg"></v-img>
                                    </v-avatar>
                                </v-badge>
                                <div class="text-h7 mt-4">SAchin</div>
                                <div class="caption mt-1">skpkorba9009</div>
                                <div class="mt-3">
                                    <v-btn color="primary " elevation="" rounded router to="/profile">
                                        <v-icon> mdi-account-outline</v-icon>
                                        <span class="text-capitalize ml-2"> view profile </span>
                                    </v-btn>
                                </div>

                                <div class="my-4">
                                    <v-btn color="error" elevation="1" rounded>
                                        <v-icon> mdi-location-exit </v-icon>
                                        <span class="text-capitalize ml-2"> sign out </span>
                                    </v-btn>
                                </div>
                            </v-flex>
                        </v-layout>
                    </v-list>
                </v-card>
            </v-menu>
        </v-app-bar>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    props: ['page'],
    data() {
        return {
            user: 'Sachin',
        }
    },
    computed: {
        ...mapGetters(['userDetails']),
    },
    async mounted() {
        if (!this.userDetails) await this.getUserDetails()
    },
    methods: {
        ...mapActions(['getUserDetails']),
    },
}
</script>

<style scoped>
.toolbar-main {
    margin-left: -20px;
}
.button-main {
    padding: 8px !important;
    font-size: 1em;
}
.isActive {
    border-bottom: 3px solid rgb(139, 139, 240);
    font-weight: 600;
    transition: 0.2s ease-in-out;
}
.notActive {
    border-bottom: 3px solid rgb(247, 245, 245);
}
</style>
