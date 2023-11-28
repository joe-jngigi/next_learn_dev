import { productsProps, AuthContextType } from '@/types/types'
import { createContext } from "react"

type TProductContext = {
    TProducts: productsProps[],
    TAddProduct: (product: productsProps) => void
}

export const productContext = createContext<TProductContext>({
    TProducts: [],
    TAddProduct(product) {},
})


// So remember something important, when you create a type, it is 
const initialAuthStatus: AuthContextType = {
    isAuthenticated: false,
    login: () => {},
    logout: () => {},
}

// export const AppContext = createContext<AuthContextType>(initialAuthStatus)