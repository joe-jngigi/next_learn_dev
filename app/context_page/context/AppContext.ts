// 'use client'
import { AuthContextType } from "@/app/typescript/types/types";
import { createContext } from "react";

// So remember something important, when you create a type, it is 
const initialAuthStatus: AuthContextType = {
    isAuthenticated: false,
    login: () => {},
    logout: () => {},
}

export const AppContext = createContext<AuthContextType>(initialAuthStatus)