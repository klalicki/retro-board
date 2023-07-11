// import logo from "./../../logo.svg";
// import "./App.css";
import { sampleData } from "../../sampleData";

// components
import CardList from "../CardList/CardList";
import Card from "../Card/Card";
function App() {
  console.log(sampleData);
  return (
    <div className="App">
      <ol>
        {sampleData.map((list) => {
          return (
            <CardList listName={list.listName}>
              {list.listContents.map((listItem) => {
                return <Card cardText={listItem.itemText}></Card>;
              })}
            </CardList>
          );
        })}
      </ol>
      <header className="App-header"></header>
    </div>
  );
}

export default App;
