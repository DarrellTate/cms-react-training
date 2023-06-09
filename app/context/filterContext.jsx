'use client'
import { createContext, useContext, useEffect, useState } from "react";

// create the context
const FilterContext = createContext({});

// export the context
export const FilterContextProvider = ({ children }) => {

    const characterFilter = [
        { value: "", text: "Character" },
        { value: "1009368", text: "Iron Man" },
        { value: "1009220", text: "Captain America" },
        { value: "1009664", text: "Thor" },
        { value: "1009268", text: "Deadpool" },
        { value: "1009562", text: "Scarlet Witch" },
        { value: "1009189", text: "Black Widow" },
        { value: "1009707", text: "Wasp" },
        { value: "1010763", text: "Gamora" }
    ];

    const creatorFilter = [
        { value: "", text: "Creator" },
        { value: "12787", text: "Kate Leth" },
        { value: "24", text: "Brian Michael Bendis" },
        { value: "30", text: "Stan Lee" },
        { value: "32", text: "Steve Ditko" },
        { value: "196", text: "Jack Kirby" },
    ];

    const path = `https://gateway.marvel.com/v1/public`

    // set the default state
    const [newPath, setNewPath] = useState('');
    const [selectedCharacter, setSelectedCharacter] = useState('');
    const [selectedCreator, setSelectedCreator] = useState('');

    useEffect(() => {
        if (selectedCharacter.length && selectedCreator.length){
            setNewPath(prev => `${path}/characters/${selectedCharacter}/comics?creators=${selectedCreator}&`);
        }
        else if (selectedCharacter.length){
            setNewPath(prev => `${path}/characters/${selectedCharacter}/comics?`);
        }
        else if (selectedCreator.length){
            setNewPath(prev => `${path}/creators/${selectedCreator}/comics?`);
        } else {
            setNewPath('');
        }
    // }, [selectedCharacter])
    })

    return (
        <FilterContext.Provider
            value={
                {
                    characterFilter,
                    selectedCharacter,
                    setSelectedCharacter,

                    creatorFilter,
                    selectedCreator,
                    setSelectedCreator,

                    newPath,
                    setNewPath
                }
            }
        >
            {children}
        </FilterContext.Provider>
    )
};

export const useFilterContext = () => useContext(FilterContext);