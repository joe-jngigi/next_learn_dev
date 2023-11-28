import { createContext, FC } from "react";

// in this case I want to define a type for Typescript. I will the add it as a generic
import { ThemeTypes } from '@/types/types'

// this will be okay for JS, but for TS, we will have the other
//? const ThemeContext = createContext('light')

// You notice that when we pass in the value `light`, it will have a lint **Argument of type 'string' is not assignable to parameter of type 'ThemeTypes'.**
//? export const ThemeContext = createContext<ThemeTypes>('light')

// Since ThemeTypes is describing a datatype, same case we will create an variable, with the same structure, that is why we pass it in as an object.

export const defaultThemeValue: ThemeTypes = {
    themeValue: 'light'
}

export const ThemeContext = createContext<ThemeTypes>(defaultThemeValue)

// export default ThemeContextProvider
