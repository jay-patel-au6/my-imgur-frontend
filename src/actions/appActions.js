import { NEWPOST } from './types'

// const baseUrl = `http://localhost:8080`
const baseUrl = `https://my-imgur-backend.herokuapp.com`


export const newPost = formData => async dispatch => {
    const response = await fetch(`${baseUrl}/newpost`, {
        method: 'POST',
        credentials: 'include',
        // headers: {
        //     "Content-Type": "application/json",
        // },
        body: formData
    })
    const responseJson = await response.json()
    console.log(responseJson, 'appActions')
    return dispatch({
        type: NEWPOST,
        payload: responseJson
    })

}