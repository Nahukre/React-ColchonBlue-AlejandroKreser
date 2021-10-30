import logo from "./logo.svg";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Contacto } from "./pages/Contacto/Contacto";
import Inversiones from "./pages/Inversiones/Inversiones";
import { Footer } from "./components/Footer/Footer";

function App() {

  return (
    <><BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <div className="App">
            <ItemListContainer />
            {/* <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
                <p>
                  {" "}
                  Edit <code> src / App.js </code> and save to reload.{" "}
                </p>{" "}
            <a className="App-link" href="https://reactjs.org" target="_blank"
            rel="noopener noreferrer">
            {" "} Learn React{" "}
            </a>{" "}
            </header>{" "} */}
          </div>
        </Route>
        <Route exact path="/Inversiones">
          <div className="App">
            <Inversiones />
          </div>  
        </Route>
        <Route exact path="/Contacto">
          <div className="App">
            <Contacto />
          </div>  
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
