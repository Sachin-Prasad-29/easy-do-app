import axios from 'axios'

const fetchIssueDetailsSvc = async (issueId) => {
    const payload = {
        method: 'get',
        url: `/issue/${issueId}`,
        headers: {
            Authorization: localStorage.getItem('token'),
        },
    }
    try {
        const response = await axios(payload)
        // console.log(response.data)
        return response.data
    } catch (error) {
        // console.log(error)
        return error.response.data
    }
}

const fetchAllIssuesOfProject = async (projectId) => {
    const payload = {
        method: 'get',
        url: `/issue/project/${projectId}`,
        headers: {
            Authorization: localStorage.getItem('token'),
        },
    }
    try {
        const response = await axios(payload)
        // console.log(response.data)
        return response.data
    } catch (error) {
        // console.log(error)
        return error.response.data
    }
}

const updateIssue = async (data, issueId) => {
    const payload = {
        method: 'patch',
        url: `/issue/${issueId}`,
        headers: {
            Authorization: localStorage.getItem('token'),
        },
        data
    }
    try {
        const response = await axios(payload)
        // console.log(response.data)
        return response.data
    } catch (error) {
        // console.log(error)
        return error.response.data
    }
}

export { fetchIssueDetailsSvc, fetchAllIssuesOfProject, updateIssue }
