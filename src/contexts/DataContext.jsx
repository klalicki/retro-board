import React from "react";
import { useState, useContext, createContext } from "react";
import { sampleData } from "../sampleData";
export const DataContext = createContext();

export const DataProvider = ({children}) => {
  const [data, setData] = useState(sampleData);


  return (<DataContext.Provider value={ }>
    {children}
  </DataContext.Provider>)

}