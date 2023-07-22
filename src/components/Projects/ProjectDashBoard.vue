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
                <v-list-item link @click="togglePlan = ! togglePlan">
                    <v-list-item-icon>
                        <v-icon>{{togglePlan ?   'mdi-chevron-down' : 'mdi-chevron-right'}}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>Planning</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-card class="ml-10" elevation="0" v-show="togglePlan">
                    <v-list-item link @click="toggle('BACKLOG')">
                        <v-list-item-icon>
                            <v-icon>mdi-land-rows-horizontal</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>Backlog</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item link @click="toggle('BOARD')">
                        <v-list-item-icon>
                            <v-icon>mdi-view-week-outline</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>Board</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
                <v-list-item link  @click="toggleDev = !toggleDev">
                    <v-list-item-icon>
                        <v-icon>{{toggleDev ?   'mdi-chevron-down' : 'mdi-chevron-right'}}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>Development</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-card class="ml-10" elevation="0" v-show="toggleDev">
                    <v-list-item link @click="toggle('CODE')">
                        <v-list-item-icon>
                            <v-icon>mdi-xml</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>Code</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
                <v-list-item link @click="toggleSetting = !toggleSetting">
                    <v-list-item-icon>
                        <v-icon>{{toggleSetting ?   'mdi-chevron-down' : 'mdi-chevron-right'}}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>Project Setting</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-card class="ml-10" elevation="0" v-show="toggleSetting">
                    <v-list-item link @click="toggle('DETAILS')">
                        <v-list-item-icon>
                            <v-icon>mdi-cog</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>Details</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item link @click="toggle('ACCESS')">
                        <v-list-item-icon>
                            <v-icon>mdi-account-group</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>Access</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item link @click="toggle('ISSUES')">
                        <v-list-item-icon>
                            <v-icon>mdi-lead-pencil</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>Issue Type</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
            </v-list>
        </v-navigation-drawer>
        <v-container>
            <div class="caption">Project / {{ projectDetail.name }}</div>
            <BacklogComp
                v-show="toggleTab === 'BACKLOG'"
                :projectId="projectDetail._id"
                :backlogId="projectDetail.backlogId"
            />
            <BoardComp v-show="toggleTab === 'BOARD'" :projectDetail="projectDetail" />
            <AccessComp v-show="toggleTab === 'ACCESS'" />
            <CodeComp v-show="toggleTab === 'CODE'" />
            <DetailsComp v-show="toggleTab === 'DETAILS'" />
            <IssuesComp v-show="toggleTab === 'ISSUES'" />
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
            mini: false,
            toggleSetting: true,
            toggleDev:true,
            togglePlan:true,
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
            this.mini = true
            console.log('Toogle ')
            this.toggleTab = tab
        },
    },
}
</script>

<style scoped></style>
