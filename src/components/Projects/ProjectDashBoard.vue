<template>
    <div class="project-board">
        <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" permanent absolute class="mt-13" width="250px">
            <v-list-item class="px-2">
                <v-list-item-avatar>
                    <v-img :src="projectDetail.logo"></v-img>
                </v-list-item-avatar>

                <v-list-item-title>{{ projectDetail.name }}</v-list-item-title>

                <v-btn icon @click.stop="mini = !mini">
                    <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense>
                <v-list-item link @click="toggle('BACKLOG')">
                    <v-list-item-icon>
                        <v-icon>mdi-menu</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>Backlog</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link @click="toggle('BOARD')">
                    <v-list-item-icon>
                        <v-icon>mdi-menu</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>Board</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link @click="toggle('CODE')">
                    <v-list-item-icon>
                        <v-icon>mdi-menu</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>Code</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link @click="toggleSetting = !toggleSetting">
                    <v-list-item-icon>
                        <v-icon>mdi-menu</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>Project Setting</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-card class="ml-9" elevation="0" v-show="toggleSetting">
                    <v-list-item link @click="toggle('DETAILS')">
                        <v-list-item-icon>
                            <v-icon>mdi-menu</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>Details</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item link @click="toggle('ACCESS')">
                        <v-list-item-icon>
                            <v-icon>mdi-menu</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>Access</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item link @click="toggle('ISSUES')">
                        <v-list-item-icon>
                            <v-icon>mdi-menu</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>Issue Type</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
            </v-list>
        </v-navigation-drawer>
        <v-container>
            <h1>Hi From Project Board</h1>
            <BacklogComp
                v-show="toggleTab === 'BACKLOG'"
                :projectId="projectDetail._id"
                :backlogId="projectDetail.backlogId"
            />
            <BoardComp v-show="toggleTab === 'BOARD'" />
            <AccessComp v-show="toggleTab === 'ACCESS'" />
            <CodeComp v-show="toggleTab === 'CODE'" />
            <DetailsComp v-show="toggleTab === 'DETAILS'" />
            <IssuesComp v-show="toggleTab === 'ISSUES'" />
            {{ projectDetail.name }}
        </v-container>
    </div>
</template>

<script>
import { getProjectByIdSvc } from '@/services/project.services'
import AccessComp from '@/components/Projects/ProjectDashBoard/Access'
import BoardComp from '@/components/Projects/ProjectDashBoard/Board'
import BacklogComp from '@/components/Projects/ProjectDashBoard/Backlog'
import CodeComp from '@/components/Projects/ProjectDashBoard/Code'
import DetailsComp from '@/components/Projects/ProjectDashBoard/Details'
import IssuesComp from '@/components/Projects/ProjectDashBoard/Issues'

export default {
    name: 'ProjectDashBoard',
    components: { AccessComp, BoardComp, BacklogComp, CodeComp, DetailsComp, IssuesComp },
    props: ['projectId', 'user'],
    data() {
        return {
            projectDetail: {},
            drawer: true,
            mini: true,
            toggleSetting: true,
            toggleTab: 'BOARD',
        }
    },
    computed: {},
    mounted() {
        this.getProjectById()
    },
    methods: {
        async getProjectById() {
            const response = await getProjectByIdSvc(this.projectId)
            this.projectDetail = response.project
        },
        toggle(tab) {
            this.mini=true
            console.log("Toogle ")
            this.toggleTab = tab
        },
    },
}
</script>

<style scoped></style>
