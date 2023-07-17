// import logo from "./../../logo.svg";
import "./App.css";
import { sampleData } from "../../sampleData";
import { DataProvider } from "../../contexts/DataContext";
import { ModeContextProvider } from "../../contexts/ModeContext";
// components
import CardList from "../CardList/CardList";
import TopBar from "../TopBar/TopBar";
import ModeWrapper from "../ModeWrapper/ModeWrapper";
function App() {
  return (
    <ModeContextProvider>
      <ModeWrapper>
        <div className="app">
          <TopBar></TopBar>
          <DataProvider>
            <div className="card-list-container">
              {sampleData.map((list, listIndex) => {
                return (
                  <CardList listName={list.listName} listIndex={listIndex} />
                );
              })}
            </div>
          </DataProvider>
          <footer></footer>
        </div>
      </ModeWrapper>
    </ModeContextProvider>
  );
}

export default App;
