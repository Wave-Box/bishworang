import { combineReducers } from '@reduxjs/toolkit'
import authReducer from "./slices/auth";
import messageReducer from "./slices/message";
import productReducer from './slices/productslice'
import siteSlice from './slices/siteSlice'
import userReducer from './slices/userSlice'


const rootReducer = combineReducers({
    auth: authReducer,
    message: messageReducer,
    cart: productReducer,
    user: userReducer,
    site: siteSlice,
    
}
)
export default rootReducer