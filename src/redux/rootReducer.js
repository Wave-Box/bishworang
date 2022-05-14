import { combineReducers } from '@reduxjs/toolkit'
import productReducer from './slice/productslice'
import siteSlice from './slice/siteSlice'
import userReducer from './slice/userSlice'


const rootReducer = combineReducers({
    cart: productReducer,
    user: userReducer,
    site: siteSlice,
}
)
export default rootReducer