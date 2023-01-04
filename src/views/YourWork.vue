<template>
    <div class="your-work">
        <v-container>
            <div class="text-h5 mb-2">Your work</div>
            <div class="text-h7">Recent Projects</div>
            <v-row class="recent-project">
                <ProjectCard v-for="project in projects" :key="project._id" :project="project" />
            </v-row>
            <v-tabs>
                <v-tab class="text-capitalize" @click="activeTab='ONE'"
                    ><v-badge inline color="blue" :content="createdByMe.length"> Created by me </v-badge></v-tab
                >
                <v-tab class="text-capitalize" @click="activeTab='TWO'"
                    ><v-badge inline color="orange" :content="assignedToMe.length"> Assigned to me </v-badge></v-tab
                >
                <v-tab class="text-capitalize" @click="activeTab='THREE'"
                    ><v-badge inline color="green" :content="completed.length"> Completed </v-badge></v-tab
                >
                <v-tab class="text-capitalize" @click="activeTab='FOUR'"
                    ><v-badge inline color="red" :content="pending.length"> pending </v-badge></v-tab
                >
            </v-tabs>
            <v-row>
                <v-col class="mt-1">
                    <CreatedByMe
                        v-for="issue in createdByMe"
                        :key="`${issue._id}-createdByme`"
                        :issue="issue"
                        v-show="activeTab === 'ONE'"
                    />
                    <AssignedToMe
                        v-for="issue in assignedToMe"
                        :key="`${issue._id}-assignedToMe`"
                        :issue="issue"
                        v-show="activeTab === 'TWO'"
                    />
                    <CompletedByMe
                        v-for="issue in completed"
                        :key="`${issue._id}-completedByMe`"
                        :issue="issue"
                        v-show="activeTab === 'THREE'"
                    />
                    <PendingByMe
                        v-for="issue in pending"
                        :key="`${issue._id}-pending`"
                        :issue="issue"
                        v-show="activeTab === 'FOUR'"
                    />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'
import ProjectCard from '@/components/YourWork/ProjectCard'
import CreatedByMe from '@/components/YourWork/CreatedByMe'
import AssignedToMe from '@/components/YourWork/AssignedToMe'
import CompletedByMe from '@/components/YourWork/Completed'
import PendingByMe from '@/components/YourWork/Pending'
import axios from 'axios'
export default {
    name: 'YourWork',
    components: { ProjectCard, CreatedByMe, AssignedToMe, CompletedByMe, PendingByMe },
    data() {
        return {
            activeTab: 'TWO',
            createdByMe: [],
            assignedToMe: [],
            completed: [],
            pending: [],
        }
    },
    computed: {
        ...mapGetters(['projects', 'userDetails']),
    },
    async mounted() {
        this.setCurrPage('yourwork')
        if (!this.userDetails) await this.getUserDetails()
        this.getProjects()
        this.getReportedIssues()
        this.getAssigneedIssues()
    },
    methods: {
        ...mapMutations(['setCurrPage']),
        ...mapActions(['getProjects', 'getUserDetails']),

        // Fetch the all Issue created by me
        async getReportedIssues() {
            const email = this.userDetails.email
            const payload = {
                method: 'get',
                url: `issue/user/reported/${email}`,
                headers: {
                    Authorization: localStorage.getItem('token'),
                },
            }
            const response = await axios(payload)
            this.createdByMe = response.data.issue
        },
        // Fetch the all Issue which is assigneed to me (then from here i can check completed , not completed and total)
        async getAssigneedIssues() {
            const email = this.userDetails.email
            const payload = {
                method: 'get',
                url: `issue/user/assigneed/${email}`,
                headers: {
                    Authorization: localStorage.getItem('token'),
                },
            }
            const response = await axios(payload)
            this.assignedToMe = response.data.issue
            this.completed = this.assignedToMe.filter((item) => {
                if (item.status === 'DONE') return item
            })
            this.pending = this.assignedToMe.filter((item) => {
                if (item.status !== 'DONE') return item
            })
            // console.log(response.data)
        },
    },
}
</script>

<style scoped>
.recent-project {
    min-height: 280px;
}
</style>
