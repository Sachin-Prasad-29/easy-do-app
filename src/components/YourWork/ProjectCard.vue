<template>
    <v-col xl="2" lg="3" md="4" sm="6" xs="12" cols="12">
        <router-link
            :to="{
                name: 'projectdashboard',
                params: {
                    user: 'Sachin',
                    projectId: project._id,
                },
            }"
            class="text-decoration-none"
        >
            <v-card elevation="1" outlined class="pa-4">
                <v-row class="">
                    <v-col cols="2" class="mt-2">
                        <v-avatar color="primary project-logo" size="38">
                            <img :src="project.logo" :alt="project.name" />
                        </v-avatar>
                    </v-col>
                    <v-col cols="8">
                        <div class="text-h6">{{ project.name }}</div>
                        <div class="caption">{{ project.type }} Project</div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="2"> </v-col>
                    <v-col cols="8">
                        <div class="body-2">Project Lead - {{ project.createdBy ? project.createdBy.name : '' }}</div>
                        <div class="caption">{{ project.createdBy ? project.createdBy.email : '' }}</div>
                        <div class="body-2 mt-2">Total Issue : {{ project.count }}</div>
                        <div class="caption">Contributors:</div>

                        <v-avatar
                            v-for="(person, index) in project.contributors"
                            :key="index"
                            color="primary"
                            size="25"
                            class="mr-1"
                        >
                            <img :src="person.profilePic" :alt="project.name" />
                        </v-avatar>
                    </v-col>
                    <v-col cols="2" class="mt-2">
                        <v-avatar color="primary" size="25">
                            <img :src="project.createdBy ? project.createdBy.profilePic : ''" :alt="project.name" />
                        </v-avatar>
                    </v-col>
                </v-row>
            </v-card>

            <div class="box-side-color"></div>
        </router-link>
    </v-col>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: ['project'],
}
</script>

<style scoped>
.box-side-color {
    position: absolute;
    width: 36px;
    height: 224px;
    background: rgba(5, 83, 228, 0.514);
    top: 124px;
    z-index: 9;
    border-radius: 3px 0px 0px 3px;
}
.project-logo {
    z-index: 9999;
}
</style>
