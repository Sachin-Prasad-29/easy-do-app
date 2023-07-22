import axios from 'axios'

const getProjectsSvc = async () => {
    const payload = {
        method: 'get',
        url: '/project',
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

const getProjectByIdSvc = async (projectId) => {
  const payload = {
      method: 'get',
      url: `/project/${projectId}`,
      headers: {
          Authorization: localStorage.getItem('token'),
      },
  }
  // console.dir(payload)
  try {
      const response = await axios(payload)
    //   console.log(response.data)
      return response.data
  } catch (error) {
      console.log(error)
      return error.response.data
  }
}

export { getProjectsSvc,getProjectByIdSvc }
