import React from "react";
import { useState, useContext, createContext } from "react";
import { sampleData } from "../sampleData";
export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(sampleData);

  /**
   * The `addItem` function adds a new card to the end of a specific column.
   * @param columnIndex: the id of the column to add a card to
   */
  const addItem = (columnIndex) => {
    // generate a unique ID for the item to make it easier to find
    const itemId = Date.now();
    const newItem = {
      itemId: itemId,
      itemText: "text",
      itemUpvoteCount: 0,
      itemDownvoteCount: 0,
    };
    const newData = [...data];
    newData[columnIndex].listContents.push(newItem);
    setData(newData);
  };

  /**
   * The `removeItem` function removes the specified card from the specified column.
   * @param columnIndex: the column from which to remove a card
   * @param itemIndex: the id of the card to remove
   */
  const removeItem = (columnIndex, itemIndex) => {
    const newData = [...data];
    newData[columnIndex].listContents.splice(itemIndex, 1);
    setData(newData);
  };

  /**
   * The `moveItem` function moves a card from one column to the end of another column. If targetcolumnIndex is out of bounds, the function will wrap the card over to the opposite edge
   * @param columnIndex: the column that the card is currently in
   * @param itemIndex: the current id of the item to move
   * @param targetcolumnIndex: the id of the column to which the item should be moved
   */
  const moveItem = (columnIndex, itemIndex, targetcolumnIndex) => {
    let safeTargetColumnIndex = targetcolumnIndex;
    // handle wrapping cards off the edges of the board
    if (safeTargetColumnIndex < 0) {
      safeTargetColumnIndex = data.length - 1;
    }
    if (safeTargetColumnIndex > data.length - 1) {
      safeTargetColumnIndex = 0;
    }
    const newData = [...data];
    const itemToMove = newData[columnIndex].listContents[itemIndex];
    newData[columnIndex].listContents.splice(itemIndex, 1);
    newData[safeTargetColumnIndex].listContents.push(itemToMove);
    setData(newData);
  };

  return (
    <DataContext.Provider value={{ data, addItem, removeItem, moveItem }}>
      {children}
    </DataContext.Provider>
  );
};
