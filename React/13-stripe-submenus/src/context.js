import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [submenuLinks, setSubmenuLinks] = useState(sublinks);
    const [showSubmenu, setShowSubmenu] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(showSidebar => !showSidebar);
    }

    const toggleSubmenu = () => {
        setShowSubmenu(showSubmenu => !showSubmenu)
    }


    return (
        <AppContext.Provider 
            value={{
                showSidebar,
                toggleSidebar,
                submenuLinks,
                setSubmenuLinks,
                showSubmenu
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppProvider }
