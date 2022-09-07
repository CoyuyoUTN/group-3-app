import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";

function App() {
  const name = "G&&G";
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element="" />
        <Route
          path="/products"
          element={<ItemListContainer nameEcommerce={name} />}
        />
        <Route
          path="/category/:category"
          element={<ItemListContainer nameEcommerce={name} />}
        />
        <Route path="*" element="404" />
      </Routes>
    </div>
  );
}

export default App;
