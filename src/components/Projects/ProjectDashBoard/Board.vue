<template>
    <div class="board">
        <div class="text-h6">{{ boardName }}</div>
        {{ projectDetail.name }}
        <v-row>
            <v-col v-for="(workflow, index) in projectDetail.workflow" :key="index">
                <v-card class="px-3 py-2 blue-grey lighten-5" elevation="0">
                    {{ workflow }}
                    <div v-for="issue in issues" :key="issue.id">
                        <WorkFlowCard
                            v-show="issue.status === workflow"
                            :issue="issue"
                            :workflow="projectDetail.workflow"
                            @reloadAllIssues='fetchAllIssues'
                        />
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import WorkFlowCard from './WorkFlowCard'
import { fetchAllIssuesOfProject } from '@/services/issue.services'
export default {
    name: 'BoardComp',
    components: { WorkFlowCard },
    props: ['projectDetail'],
    data() {
        return {
            issues: [],
        }
    },
    computed: {
        boardName() {
            if (this.projectDetail.type === 'Scrum') return 'All Sprint'
            if (this.projectDetail.type === 'Kanban') return 'Easy Board'
            return 'Board'
        },
    },
    async mounted() {
        setTimeout(()=>{
            this.fetchAllIssues()

        },1000)
    },
    methods: {
        async fetchAllIssues() {
            const response = await fetchAllIssuesOfProject(this.projectDetail._id)
            this.issues = response.issue
            console.log(this.issues)
        },
    },
}
</script>

<style></style>
