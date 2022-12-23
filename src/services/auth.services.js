import axios from 'axios'

const register = async (userDetails) => {
    const reqData = {
        method: 'post',
        url: 'auth/register',
        data: userDetails,
    }
    try {
        const response = await axios(reqData)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error.response.data)
        return error.response.data
    }
}

const login = async (userDetails) => {
    const reqData = {
        method: 'post',
        url: 'auth/login',
        data: userDetails,
    }
    try {
        const response = await axios(reqData)
        console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error.response.data)
        return error.response
    }
}

export { register, login }
