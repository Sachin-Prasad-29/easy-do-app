import axios from 'axios'

const getUserSvc = async () => {
    const reqData = {
        method: 'get',
        url: 'auth/profile',
        headers: {
            Authorization: localStorage.getItem('token'),
        },
    }
    // console.dir(reqData)
    try {
        const response = await axios(reqData)
        // console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
        return error.response.data
    }
}

export { getUserSvc }
