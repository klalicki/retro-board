// import logo from "./../../logo.svg";
import "./App.css";
import { sampleData } from "../../sampleData";
import { DataProvider } from "../../contexts/DataContext";
// components
import CardList from "../CardList/CardList";
function App() {
  console.log(sampleData);
  return (
    <div className="App">
      <div className="card-list-container">
        <DataProvider>
          {sampleData.map((list, listIndex) => {
            return (
              <CardList
                listName={list.listName}
                listIndex={listIndex}
                // items={list.listContents}
              />
            );
          })}
        </DataProvider>
      </div>
    </div>
  );
}

export default App;
