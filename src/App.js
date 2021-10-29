import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer";
function App() {

  return (
    <><BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <div className="App">
            <ItemListContainer />
            <ItemDetailContainer />
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
                <p>
                  {" "}
                  Edit <code> src / App.js </code> and save to reload.{" "}
                </p>{" "}
            <a className="App-link" href="https://reactjs.org" target="_blank"
            rel="noopener noreferrer">
            {" "} Learn React{" "}
            </a>{" "}
            </header>{" "}
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
