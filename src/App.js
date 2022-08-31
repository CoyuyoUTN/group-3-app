import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  const name = "G&&G";
  return (
    <div className="App">
      <NavBar />
      <Link to="products">About</Link>
      <Routes>
        <Route
          path="/products"
          element={<ItemListContainer nameEcommerce={name} />}
        />
        <Route path="*" element="404" />
      </Routes>
    </div>
  );
}

export default App;
