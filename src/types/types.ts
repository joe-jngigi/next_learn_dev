export type SideMenuContextType = {
    toggleSideMenu: boolean;
    settoggleSideMenu: React.Dispatch<React.SetStateAction<boolean>>;
    notificationDropdown: boolean;
    setNotificationDropdown: React.Dispatch<React.SetStateAction<boolean>>;
    toggleMenu: boolean;
    setToggleMenu: React.Dispatch<React.SetStateAction<boolean>>;
    collapsePanel: boolean;
    setcollapsePanel: React.Dispatch<React.SetStateAction<boolean>>
};

export type TLayoutProp = {
    children: React.ReactNode
}

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

export type ThemeTypes ={
    themeValue: 'light' | 'dark'
}

export type AuthContextType = {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
};