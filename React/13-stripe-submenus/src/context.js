import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [showSubmenu, setShowSubmenu] = useState(false);
    const [page, setPage] = useState({ page: '', links: [] });
    const [location, setLocation] = useState({});

    const toggleSidebar = () => {
        setShowSidebar(showSidebar => !showSidebar);
    }

    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find((sublink) => sublink.page === text);
        setPage(page);
        setLocation(coordinates);
        setShowSubmenu(true);
    }

    const closeSubmenu = () => {
        setShowSubmenu(false)
    }


    return (
        <AppContext.Provider 
            value={{
                showSidebar,
                toggleSidebar,
                showSubmenu,
                openSubmenu,
                closeSubmenu,
                location,
                page
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
