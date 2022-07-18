import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import httpReq from '../../services/http.service';
import { apiUrl } from '../../siteSetting/ApiUrl';


export const fetchBanner = createAsyncThunk(
    'site/banner',
    async () => {
        const banner = await httpReq.get("/banners")
        return banner
    }
)

export const fetchUser = createAsyncThunk(
    'site/category',
    async () => {
        const token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).token
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



export const siteSlice = createSlice({
    name: "site",
    initialState: {
        banner: [],
        category: [],
        loading: "idle",

    },
    reducers: {


        userAuthenticate: (state, action) => {
            state.token = action.payload
        },
        login: (state, action) => {
            // state.login = action.payload
        }
    },

    extraReducers: (builder) => {

        builder.addCase(fetchBanner.pending, (state, action) => {
            state.loading = 'pending'
        })
        builder.addCase(fetchBanner.fulfilled, (state, action) => {
            state.banner = action.payload
            state.loading = 'fulfilled'
        })
        builder.addCase(fetchBanner.rejected, (state, action) => {
            state.loading = 'idle'
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.category = action.payload
        })

    },
})


export const { login, userAuthenticate } = siteSlice.actions


export default siteSlice.reducer