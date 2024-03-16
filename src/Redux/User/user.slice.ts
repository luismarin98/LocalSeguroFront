import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './user.state';
import { removeItem, setItem } from '../../components/StorageFunctions';

const userSlice = createSlice({
    name: 'userStore',
    initialState,
    reducers: {
        setUser: (state, action) => {
            if (action.payload !== null) {
                state.user = action.payload;
                setItem('user', action.payload);
            }
        },
        logOut: (state) => {
            state.user = null;
            removeItem('user');
        },
        list_users: (state, action) => {
            if(action.payload !== null) {
                state.list_users = action.payload;
            }
        }
    }
})

export const { logOut, setUser, list_users } = userSlice.actions;
export { userSlice }