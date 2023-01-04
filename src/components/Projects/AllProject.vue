<template>
    <div class="all-project">
        <div class="d-flex">
           
                <div class="text-h5 mb-3 mr-auto">Projects</div>
            
                <div class="text-h5 mb-3">
                    <v-btn class="text-capitalize primary mt-2" elevation="1">
                        Create Project
                    </v-btn>
                </div>
            
        </div>
        <v-row>
            <v-col xl="2" lg="3" md="4" sm="6" xs="12">
                <v-text-field
                    outlined
                    dense
                    label="Search"
                    append-icon="mdi-magnify"
                    @click:append="false"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-card class="" elevation="0">
                    <v-row class="align-center">
                        <v-col cols="1" class="ml-2"> </v-col>
                        <v-col cols="3" class="caption">Name</v-col>
                        <v-col cols="2" class="caption">Key</v-col>
                        <v-col cols="2" class="caption">Type</v-col>
                        <v-col cols="2" class="caption">Lead </v-col>
                        <v-spacer></v-spacer>
                        <v-col cols="1" class="caption"> Setting </v-col>
                    </v-row>
                    <v-divider class="mt-1"></v-divider>
                </v-card>

                <v-card class="mt-3" elevation="0" v-for="project in projects" :key="project._id">
                    <v-row class="align-center">
                        <v-col cols="1" class="ml-2">
                            <v-avatar size="35" color="success" tile class="rounded-lg">
                                <img :src="project ? project.logo : ''" :alt="project.name" />
                            </v-avatar>
                        </v-col>
                        <v-col cols="3">{{ project.name }}</v-col>
                        <v-col cols="2">{{ project.key }}</v-col>
                        <v-col cols="2">{{ project.type }}</v-col>
                        <v-col cols="2">
                            <v-avatar color="primary" size="25" class="mr-4">
                                <img
                                    :src="project ? project.createdBy.profilePic : ''"
                                    :alt="project.name"
                                /> </v-avatar
                            >{{ project.createdBy.name }}
                        </v-col>
                        <v-spacer></v-spacer>
                        <v-col cols="1">
                            <v-btn fab text small>
                                <v-icon large> mdi-dots-horizontal </v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                    <v-divider class="mt-2"></v-divider>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'AllProject',
    computed: {
        ...mapGetters(['projects']),
    },
    mounted() {
        console.log(this.projects)
    },
}
</script>

<style></style>
