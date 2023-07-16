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

  /**
   * The `addItem` function adds a new item to a specific column in a data array.
   */
  const addItem = (columnId) => {
    // generate a unique ID for the item to make it easier to find
    const itemId = Date.now();
    const newItem = {
      itemId: itemId,
      itemText: "text",
      itemUpvoteCount: 0,
      itemDownvoteCount: 0,
    };
    const newData = [...data];
    newData[columnId].listContents.push(newItem);
    setData(newData);
  };

  /**
   * The `removeItem` function removes the specified item from the specified column.
   */
  const removeItem = (columnId, itemId) => {
    const newData = [...data];
    newData[columnId].listContents.splice(itemId, 1);
    setData(newData);
  };
  return (
    <DataContext.Provider value={{ data, addItem, removeItem }}>
      {children}
    </DataContext.Provider>
  );
};
