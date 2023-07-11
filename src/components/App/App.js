// import logo from "./../../logo.svg";
// import "./App.css";
import { sampleData } from "../../sampleData";
function App() {
  console.log(sampleData);
  return (
    <div className="App">
      <ol>
        {sampleData.map((item) => {
          return (
            <li key={item.listName}>
              {item.listName}
              <ul>
                {item.listContents.map((listItem) => {
                  return <li key={listItem.itemText}>{listItem.itemText}</li>;
                })}
              </ul>
            </li>
          );
        })}
      </ol>
      <header className="App-header"></header>
    </div>
  );
}

export default App;
