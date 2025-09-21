import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product, ProductState } from "../globals/types/productTypes";
import type { Status } from "./authSlice";
import type { AppDispatch, RootState } from "./store";
import API from "../http";




const initialState:ProductState = {
    product : [] ,
    status: 'loading',
    singleProduct: null
}

const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
         setProduct(state:ProductState, action:PayloadAction<Product[]>){
            state.product = action.payload
         },
        setStatus(state:ProductState, action:PayloadAction<Status>){
            state.status = action.payload 
        },

          setSingleProduct(state:ProductState, action:PayloadAction<Product>){
            state.singleProduct= action.payload
         },
    }

})

export const {setProduct, setStatus, setSingleProduct} = productSlice.actions
export default productSlice.reducer



export function fetchProduct(){
    return async function fetchProductThunks(dispatch:any){
     dispatch(setStatus('loading'))
    try {
    const response = await API.get('admin/product')
 
    
    if(response.status === 201 ||  response.status === 200){
 dispatch(setStatus('success'))
dispatch(setProduct(response.data.data))

    }else{
 dispatch(setStatus('error'))
    }
} catch (error:any) {
     dispatch(setStatus('error'))
}
    }
}

export function fetchSingleProduct(productId:string){
    return async function fetchSingleProductThunks(dispatch:AppDispatch, getState: ()=> RootState){
       const state = getState()
       const existingProduct = state.products.product.find((product)=> product.id === productId)
       if(existingProduct){
        dispatch(setSingleProduct(existingProduct))
        dispatch(setStatus("success"))
       }else{
        dispatch(setStatus('loading'))
    try {
    const response = await API.get(`admin/product/${productId}`)
 
    
    if(response.status === 201 ||  response.status === 200){
 dispatch(setStatus('success'))
dispatch(setSingleProduct(response.data.data))

    }else{
 dispatch(setStatus('error'))
    }
} catch (error:any) {
     dispatch(setStatus('error'))
}
       }

    }
}