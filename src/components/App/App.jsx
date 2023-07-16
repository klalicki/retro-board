// import logo from "./../../logo.svg";
import "./App.css";
import { sampleData } from "../../sampleData";
import { DataProvider } from "../../contexts/DataContext";
// components
import CardList from "../CardList/CardList";
function App() {
  return (
    <div className="app">
      <DataProvider>
        <div className="card-list-container">
          {sampleData.map((list, listIndex) => {
            return <CardList listName={list.listName} listIndex={listIndex} />;
          })}
        </div>
      </DataProvider>
    </div>
  );
}

export default App;
