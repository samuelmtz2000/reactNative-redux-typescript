import {createAction, createReducer} from '@reduxjs/toolkit'
import { RootState } from '../store'

type UserState = {
 login: boolean
}

const initialState={
 login: false
}

export const setLogin = createAction('[USER] Set Login', (isLoggedIn: boolean) => ({
    payload: {
        isLoggedIn,
    },
}))


export const selectLogin = (state: RootState): boolean => state.user.login

const userReducer = createReducer(initialState, builder => {
    builder.addCase(setLogin, (state, action) => {
        state.login = action.payload.isLoggedIn
    })
})

export default userReducer