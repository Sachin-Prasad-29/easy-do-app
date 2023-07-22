<template>
    <v-card class="pa-2 mb-1" elevation="1" >
        <v-row class="d-flex align-center justify-end">
            <v-col cols="auto">
                <v-btn x-small text elevation="0" @click="changeWorkFlowByArrow('LEFT')">
                    <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
            </v-col>
            <v-row class="d-flex align-center justify-end">
                <v-col cols="auto">
                    <div>
                        {{ issueDetails.summary }}
                    </div>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>

            <v-spacer></v-spacer>
            <v-col cols="auto">
                <v-btn x-small text elevation="0" @click="changeWorkFlowByArrow('RIGHT')">
                    <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <v-row class="d-flex align-center justify-end px-4">
            <v-col cols="auto">
                <v-avatar size="20">
                    <img :src="issueDetails ? issueDetails.type.logo : ''" :alt="issueDetails.summary" />
                </v-avatar>
                {{ issueDetails.tag }}
            </v-col>
            <v-spacer></v-spacer>

            <v-col cols="auto">
                <v-avatar size="20">
                    <img
                        :src="issueDetails ? issueDetails.assignee.profilePic : ''"
                        :alt="issueDetails.assignee.name"
                    />
                </v-avatar>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import { updateIssue } from '@/services/issue.services'
export default {
    props: ['issue', 'workflow'],
    data() {
        return {}
    },
    computed: {
        issueDetails() {
            return this.issue
        },
    },
    mounted() {
        // this.fetchIssueDetails()
    },
    methods: {
        // async fetchIssueDetails() {
        //     const response = await fetchIssueDetailsSvc(this.issueId)
        //     this.issueDetails = response.issue
        // },
        async changeWorkFlowByArrow(direction) {
            if (direction === 'RIGHT') {
                console.log(this.issueDetails.status)
                const currentWorkFlow = this.issueDetails.status
                const idxOfCurrWorkFlow = this.workflow.indexOf(currentWorkFlow)
                if (idxOfCurrWorkFlow !== this.workflow.length - 1) {
                    const payload = {
                        ...this.issueDetails,
                        status: this.workflow[idxOfCurrWorkFlow + 1],
                    }
                    const response = await updateIssue(payload, this.issueDetails._id)
                    await this.$emit('reloadAllIssues')
                    console.log(response.issue.status)
                }
            } else {
                console.log(this.issueDetails.status)
                const currentWorkFlow = this.issueDetails.status
                const idxOfCurrWorkFlow = this.workflow.indexOf(currentWorkFlow)
                if (idxOfCurrWorkFlow !== 0) {
                    const payload = {
                        ...this.issueDetails,
                        status: this.workflow[idxOfCurrWorkFlow - 1],
                    }
                    const response = await updateIssue(payload, this.issueDetails._id)
                    await this.$emit('reloadAllIssues')
                    console.log(response.issue.status)
                }
            }
        },
    },
}
</script>

<style></style>
