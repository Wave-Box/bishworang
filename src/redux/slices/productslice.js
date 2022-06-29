import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiUrl } from '../../siteSetting/ApiUrl'



export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',
    async () => {
        const response = await fetch(`${apiUrl}/products`)
        const product = await response.json()
        return product
    }
)


export const productSlice = createSlice({
    name: "product",
    initialState: {
        allProducts: [],
        cartList: [],
        search: '',
        openUser: false,
        loading: null
    },
    reducers: {

        searchInput: (state, action) => {
            state.search = action.payload
        },
        userPopUp: (state, action) => {
            console.log(action.payload);
            state.openUser = action.payload
        },

        addToCartList: (state, action) => {
            // const cartItem = state.cartList?.find((item) => item.id === action.payload.id & item.color === action.payload.color && item.size === action.payload.size);
            const cartItem = state.cartList?.find((item) => item.id === action.payload.id && item.size === action.payload.size && item.color === action.payload.color && item.unit === action.payload.unit && item.volume === action.payload.volume);

            console.log(cartItem);
            if (cartItem) {
                cartItem.qty = cartItem.qty + 1;
            } else {
                state.cartList.push({ ...action.payload, qty: action.payload.qty || 1 });
            }


        },
        // addToCartList: (state, action) => {
        //     const cartItem = state.cartList?.find((item) => item.id === action.payload.id);


        //     if (cartItem) {
        //         cartItem.qty = cartItem.qty + 1;
        //     } else {
        //         state.cartList.push({ ...action.payload, qty: action.payload.qty || 1 });
        //     }


        // },
        removeToCartList: (state, action) => {
            state.cartList = state.cartList.filter((items) => items.cartId !== action.payload)
        },
        incrementQty: (state, action) => {
            const cartItem = state.cartList?.find((item) => item.cartId === action.payload);


            if (cartItem) {
                cartItem.qty = cartItem.qty + 1;
            }

        },
        decrementQty: (state, action) => {
            const cartItem = state.cartList.find((item) => item.cartId === action.payload);


            if (cartItem.qty === 1) {
                state.cartList = state.cartList.filter(i => i.cartId !== action.payload)
            }
            if (cartItem.qty > 1) {
                cartItem.qty = cartItem.qty - 1;
            }


        },
        clearCartList: (state, action) => {
            state.cartList = []
        }
    },
    extraReducers: (builder) => {

        builder.addCase(fetchProducts.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false
            state.allProducts = action.payload
        })

    },
})


export const noLoginUser = () => {
    return (dispatch) => {
        dispatch(userPopUp(true))
    }
}

export const { searchInput, userPopUp, addToCartList, removeToCartList, incrementQty, decrementQty, clearCartList } = productSlice.actions


export default productSlice.reducer


