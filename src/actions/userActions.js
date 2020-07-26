import { DASHBOARD, REGISTER, LOGIN, LOGOUT } from './types'

// const baseUrl = `http://localhost:8080`
const baseUrl = `https://my-imgur-backend.herokuapp.com`

export const dashboard = () => async dispatch => {
    const response = await fetch(`${baseUrl}`, {
        method: 'GET',
        credentials: 'include',
    })
    const responseJson = await response.json()
    console.log(responseJson, 'userActions')
    return dispatch({
        type: DASHBOARD,
        payload: responseJson
    })
}

export const register = body => async dispatch => {
    console.log(body, typeof(body))
    const response = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify(body)
    })
    const responseJson = await response.json()
    console.log(responseJson, 'userActions')
    return dispatch({
        type: REGISTER,
        payload: responseJson
    })
}

export const login = body => async dispatch => {
    const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify(body)
    })
    const responseJson = await response.json()
    console.log(responseJson, 'userActions')
    return dispatch({
        type: LOGIN,
        payload: responseJson
    })
}

export const logout = token => async dispatch => {
    const response = await fetch(`${baseUrl}/logout`, {
        method: 'DELETE',
        credentials: 'include',
    })
    const responseJson = await response.json()
    console.log(responseJson)
    return dispatch({
        type: LOGOUT,
        payload: responseJson
    })
}