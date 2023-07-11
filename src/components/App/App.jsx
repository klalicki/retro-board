// import logo from "./../../logo.svg";
// import "./App.css";
import { sampleData } from "../../sampleData";

// components
import CardList from "../CardList/CardList";
function App() {
  console.log(sampleData);
  return (
    <div className="App">
      <ol>
        {sampleData.map((item) => {
          return (
            <CardList listName={item.listName}></CardList>
            // <li key={item.listName}>
            //   {item.listName}
            //   <ul>
            //     {item.listContents.map((listItem) => {
            //       return <li key={listItem.itemText}>{listItem.itemText}</li>;
            //     })}
            //   </ul>
            // </li>
          );
        })}
      </ol>
      <header className="App-header"></header>
    </div>
  );
}

export default App;
