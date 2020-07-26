import { DASHBOARD, REGISTER, LOGIN, LOGOUT, NEWPOST } from './../actions/types'

const initialState = {
    user: null,
    posts: [],
    errorName: null,
    errorMsg: null,
    error: null
}

export default (state = initialState, action) => {
    const { type, payload } = action
    switch(type) {
        case DASHBOARD:
            if(payload.user) return {
                ...state,
                user: payload.user,
                posts: payload.posts,
                errorName: null,
                errorMsg: null,
                error: null
            }
            else return {
                ...state,
                errorName: payload.errorName,
                errorMsg: payload.errorMsg,
                error: payload.error
            }

        case REGISTER:
            if(payload.user) return {
                ...state,
                user: payload.user,
                errorName: null,
                errorMsg: null,
                error: null
            }
            else return {
                ...state,
                errorName: payload.errorName,
                errorMsg: payload.errorMsg,
                error: payload.error
            }
        case LOGIN:
            if(payload.user) return {
                ...state,
                user: payload.user,
                errorName: null,
                errorMsg: null,
                error: null
            }
            else return {
                ...state,
                errorName: payload.errorName,
                errorMsg: payload.errorMsg,
                error: payload.error
            }
        case LOGOUT:
            if(payload.isLoggedOut) return {
                ...state,
                user: null,
                errorName: null,
                errorMsg: null,
                error: null

            }
            else return {
                ...state,
                errorName: payload.errorName,
                errorMsg: payload.errorMsg,
                error: payload.error
            }
        case NEWPOST:
            if(payload.newPost)
                return {
                    ...state,
                    posts: [payload.newPost, ...state.posts]
                }
            else return {
                ...state,
                errorName: payload.errorName,
                errorMsg: payload.errorMsg,
                error: payload.error
            }
        default:
            return state
    }
}