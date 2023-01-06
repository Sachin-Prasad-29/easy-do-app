import axios from 'axios'

const fetchBacklogSvc = async (backlogId) => {
    const payload = {
        method: 'get',
        url: `/backlog/${backlogId}`,
        headers: {
            Authorization: localStorage.getItem('token'),
        },
    }
    // console.dir(payload)
    try {
        const response = await axios(payload)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
        return error.response.data
    }
}

export { fetchBacklogSvc }
