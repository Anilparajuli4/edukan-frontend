import type { Status } from "../../store/authSlice"


interface User{
    id:string,
    email:string,
    userName: string
}


interface Category{
    id:string,
    categoryName: string
}

export interface Product{
    id:string,
    productName: string,
    productDescription: string,
    productPrice: number,
    productTotalStockQty: number,
    productImageUrl: string,
    createdAt: string,
    udatedAt:string,
    userId:string,
    categoryId: string,
    user: User, 
    category: Category
}


export interface ProductState{
product: Product[],
status: Status
singleProduct: Product | null
}


 
