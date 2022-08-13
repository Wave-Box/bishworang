import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { apiUrl } from '../../siteSetting/ApiUrl';


export const fetchAuthorization = createAsyncThunk(
    'user/fetchAuthorization',
    async () => {
        const token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).token ? JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).token : null
        return token
    }
)

export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async () => {
        const token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).token || null
        const data = {
            Authorization: `Bearer ${token}`
        }
        const user = await axios.get(`${apiUrl}/customer/info`, { headers: data })



        return user?.data
    }
)

// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };



export const userSlice = createSlice({
    name: "user",
    initialState: {
        token: null,
        userInfo: null,
        login: null,
    },
    reducers: {


        userAuthenticate: (state, action) => {
            state.token = action.payload
        },
        logOut: (state, action) => {
            state.token = null
            state.userInfo = null
        }
    },

    extraReducers: (builder) => {

        builder.addCase(fetchAuthorization.fulfilled, (state, action) => {
            state.login = action.payload
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.userInfo = action.payload
        })

    },
})


export const { logOut, userAuthenticate } = userSlice.actions


export default userSlice.reducer