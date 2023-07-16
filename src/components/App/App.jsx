// import logo from "./../../logo.svg";
import "./App.css";
import { sampleData } from "../../sampleData";

// components
import CardList from "../CardList/CardList";
import Card from "../Card/Card";
function App() {
  console.log(sampleData);
  return (
    <div className="App">
      <div className="card-list-container">
        {sampleData.map((list, listIndex) => {
          return (
            <CardList
              listName={list.listName}
              listIndex={listIndex}
              items={list.listContents}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
