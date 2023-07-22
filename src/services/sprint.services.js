import axios from 'axios'

const fetchSprintsSvc = async (projectId) => {
    const payload = {
        method: 'get',
        url: `/sprint/project/${projectId}`,
        headers: {
            Authorization: localStorage.getItem('token'),
        },
    }
    // console.dir(payload)
    try {
        const response = await axios(payload)
        // console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
        return error.response.data
    }
}

export { fetchSprintsSvc }
