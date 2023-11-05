"use client"

import { SideMenuContextType } from "@/types/types";
import { createContext } from "react";


export const defaultValues: SideMenuContextType ={
    toggleSideMenu: false,
    settoggleSideMenu: () => {},

    notificationDropdown: false,
    setNotificationDropdown: () => {},
    
    toggleMenu: false,
    setToggleMenu: () =>{},
    collapsePanel: false,
    setcollapsePanel: () =>{},
}
export const SideMenuContext = createContext<SideMenuContextType>(defaultValues)
