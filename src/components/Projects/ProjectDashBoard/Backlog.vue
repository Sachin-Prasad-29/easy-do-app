<template>
    <div class="board">
        <div class="text-h6">Backlog</div>
        <div class="mt-3" v-for="sprint in sprintsOnGoing" :key="sprint._id">
            <v-card class="pa-3 grey lighten-4" elevation="1">
                <v-row class="mb-1 d-flex align-center justify-end">
                    <v-col cols="auto" class="mr-auto">
                        {{ sprint.name }}
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="auto" class="mr-auto">
                        {{ sprint.status }}
                    </v-col>
                    <v-col cols="auto" class="mr-auto">
                        <v-btn small elevation="0" color="blue-grey lighten-5" class="caption text-capitalize">
                            Complete sprint
                        </v-btn>
                    </v-col>
                    <v-col cols="auto" class="flex-row-reverse">
                        <v-btn small elevation="0" color="blue-grey lighten-5 ">
                            <v-icon> mdi-dots-horizontal </v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row class="align-center white ma-1" v-for="issue in sprint.issues" :key="issue.id">
                    <v-col cols="auto">
                        {{ issue.name }}
                        {{ issue.assignedTo }}
                        {{ issue.status }}
                    </v-col>
                </v-row>
                 <v-row class="align-center">
                    <v-col>
                        <v-btn block elevation="0" class="text-capitalize">
                            <v-icon small> mdi-plus </v-icon>
                            create Issue
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card>
            <v-divider class="mt-2"></v-divider>
        </div>
        <div class="mt-3" v-for="sprint in sprintsNotStarted" :key="sprint._id">
            <v-card class="pa-3 grey lighten-4" elevation="1">
                <v-row class="mb-1 d-flex align-center justify-end">
                    <v-col cols="auto" class="mr-auto">
                        {{ sprint.name }}
                    </v-col>
                    <v-col cols="auto" class="mr-auto">
                        {{ sprint.status }}
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="auto" class="mr-auto">
                        <v-btn small elevation="0" color="blue-grey lighten-5" class="caption text-capitalize">
                            Complete sprint
                        </v-btn>
                    </v-col>
                    <v-col cols="auto" class="flex-row-reverse">
                        <v-btn small elevation="0" color="blue-grey lighten-5 ">
                            <v-icon> mdi-dots-horizontal </v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row class="align-center white ma-1" v-for="issue in sprint.issues" :key="issue.id">
                    <v-col cols="auto">
                        {{ issue.name }}
                        {{ issue.assignedTo }}
                        {{ issue.status }}
                    </v-col>
                </v-row>
                 <v-row class="align-center">
                    <v-col>
                        <v-btn block elevation="0" class="text-capitalize">
                            <v-icon small> mdi-plus </v-icon>
                            create Issue
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card>
            <v-divider class="mt-2"></v-divider>
        </div>
        <div class="mt-3">
            <v-card class="pa-3 grey lighten-4" elevation="1">
                <v-row class="mb-1 d-flex align-center justify-end">
                    <v-col cols="auto" class="mr-auto"> Backlog </v-col>

                    <v-spacer></v-spacer>
                    <v-col cols="auto" class="mr-auto">
                        <v-btn small elevation="0" color="blue-grey lighten-5" class="caption text-capitalize">
                            Create sprint
                        </v-btn>
                    </v-col>
                    <v-col cols="auto" class="flex-row-reverse">
                        <v-btn small elevation="0" color="blue-grey lighten-5 ">
                            <v-icon> mdi-dots-horizontal </v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row class="align-center white ma-1" v-for="issue in backlog.issues" :key="issue.id">
                    <v-col cols="auto">
                        {{ issue.name }} | {{ issue.assignedTo }} |
                        {{ issue.status }}
                    </v-col>
                </v-row>
                <v-row class="align-center">
                    <v-col>
                        <v-btn block elevation="0" class="text-capitalize">
                            <v-icon small> mdi-plus </v-icon>
                            create Issue
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card>
            <v-divider class="mt-2"></v-divider>
        </div>
        <div class="mt-3" v-for="sprint in sprintsCompleted" :key="sprint._id">
            <v-card class="pa-3 grey lighten-4" elevation="1">
                <v-row class="mb-1 d-flex align-center justify-end">
                    <v-col cols="auto" class="mr-auto">
                        {{ sprint.name }}
                    </v-col>
                    <v-col cols="auto" class="mr-auto">
                        {{ sprint.status }}
                    </v-col>
                    <v-spacer></v-spacer>
                    <v-col cols="auto" class="mr-auto">
                        <v-btn small elevation="0" color="blue-grey lighten-5" class="caption text-capitalize">
                            Complete sprint
                        </v-btn>
                    </v-col>
                    <v-col cols="auto" class="flex-row-reverse">
                        <v-btn small elevation="0" color="blue-grey lighten-5 ">
                            <v-icon> mdi-dots-horizontal </v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
                <v-row class="align-center white ma-1" v-for="issue in sprint.issues" :key="issue.id">
                    <v-col cols="auto">
                        {{ issue.name }}
                        {{ issue.assignedTo }}
                        {{ issue.status }}
                    </v-col>
                </v-row>
                 <v-row class="align-center">
                    <v-col>
                        <v-btn block elevation="0" class="text-capitalize">
                            <v-icon small> mdi-plus </v-icon>
                            create Issue
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card>
            <v-divider class="mt-2"></v-divider>
        </div>
    </div>
</template>

<script>
import { fetchBacklogSvc } from '@/services/backlog.services'
import { fetchSprintsSvc } from '@/services/sprint.services'
export default {
    name: 'BacklogComp',
    props: ['backlogId', 'projectId'],
    data() {
        return {
            sprintsOnGoing: [],
            sprintsCompleted: [],
            sprintsNotStarted: [],
            backlog: {},
        }
    },
    computed: {},
    async mounted() {
        if (!this.backlogId) {
            setTimeout(() => {
                this.fetchSprints()
                this.fetchBacklog()
            }, 1000)
        } else {
            this.fetchSprints()
            this.fetchBacklog()
        }
    },
    methods: {
        async fetchBacklog() {
            const response = await fetchBacklogSvc(this.backlogId)
            this.backlog = response.backlog
        },
        async fetchSprints() {
            const response = await fetchSprintsSvc(this.projectId)
            const sprints = response.sprint
            this.sprintsOnGoing = sprints.filter((sprint) => {
                if (sprint.status === 'ONGOING') return sprint
            })
            this.sprintsNotStarted = sprints.filter((sprint) => {
                if (sprint.status === 'NOT COMPLETED') return sprint
            })
            this.sprintsCompleted = sprints.filter((sprint) => {
                if (sprint.status === 'COMPLETED') return sprint
            })
        },
    },
}
</script>

<style></style>
