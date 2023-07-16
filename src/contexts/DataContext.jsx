import React from "react";
import { useState, useContext, createContext } from "react";
import { sampleData } from "../sampleData";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(sampleData);
  /* list of functions to implement
addItem(item)
removeItem(item)
moveItem(direction)

*/
  const addItem = (column) => {
    // generate a unique ID for the item to make it easier to find
    const itemId = Date.now();
    const newItem = {
      itemId: itemId,
      itemText: "text",
      itemUpvoteCount: 0,
      itemDownvoteCount: 0,
    };
    const newData = [...data];
    newData[column].listContents.push(newItem);
    setData(newData);
  };

  return (
    <DataContext.Provider value={{ data, addItem }}>
      {children}
    </DataContext.Provider>
  );
};
