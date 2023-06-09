'use client'
import { useState, createContext, useContext } from "react";

// create context
const FavoriteContext = createContext({});

// export context provider
export const FavoriteContextProvider = ({ children }) => {

    // sets the initial state to an array of comics
    const [favoriteList, setFavoriteList] = useState([]);
    
    return (
        // Pass the favoriteList state to any component wrapped in this context
        <FavoriteContext.Provider
            value={
                {
                    favoriteList,
                    setFavoriteList
                }
            }
        >
            {children}
        </FavoriteContext.Provider>
    )
};

// export useContext
export const useFavoriteContext = () => useContext(FavoriteContext);