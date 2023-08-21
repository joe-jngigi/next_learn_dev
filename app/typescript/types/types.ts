export type PostProps ={
    id: number,
    title: string,
    body: string,
}

export type userType = {
    sessionId: number,
    name: string
}

export type productsProps ={
    99?:string,
    product_id?: number | string,
    product_name: string ,
    product_price: number |string,
    product_description: string,
    product_size: number |string,
    product_color: string
}

export type AuthContextType = {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
};