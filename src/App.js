import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Contacto } from "./pages/Contacto/Contacto";
import Inversiones from "./pages/Inversiones/Inversiones";
import { Footer } from "./components/Footer/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Provider from "./contexts/cartContext";
import PaginaNoEncontrada from "./pages/PaginaNoEncontrada/PaginaNoEncontrada";

function App() {

  return (
    <BrowserRouter>
      <Provider>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <div className="App">
              <ItemListContainer />
            </div>
          </Route>
          <Route exact path="/category/:categoriaTo">
            <div className="App">
              <ItemListContainer />
            </div>  
          </Route>
          <Route exact path="/item/:inversionesId">
            <div className="App">
              <ItemDetailContainer />
            </div>  
          </Route>
          <Route exact path="/inversiones">
            <div className="App">
              <Inversiones />
            </div>  
          </Route>
          <Route exact path="/contacto">
            < div className="App">
              <Contacto />
            </div>  
          </Route>
          <Route exact path="/cart">
            <div className="App">
              <Cart />
            </div>  
          </Route>
          <Route path="/*">
            <div className="App">
              <PaginaNoEncontrada/>
            </div>  
          </Route>
        </Switch>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
