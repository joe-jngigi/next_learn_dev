import { productsProps } from "@/app/typescript/types/types"
import { createContext } from "react"

type TProductContext = {
    TProducts: productsProps[],
    TAddProduct: (product: productsProps) => void
}

export const productContext = createContext<TProductContext>({
    TProducts: [],
    TAddProduct(product) {},
})