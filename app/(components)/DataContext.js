'use client';

import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export function DataProvider({ children }) {
    const [currentLeague, setCurrentLeague] = useState('MLS');

    return (
        <DataContext.Provider value={{ currentLeague, setCurrentLeague}}>
            {children}
        </DataContext.Provider>
    )

}