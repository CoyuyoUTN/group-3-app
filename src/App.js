import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import PrincipalPage from "./Components/PrincipalPage";

function App() {
  const name = "G&&G";
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<PrincipalPage />} />
        <Route
          path="/products"
          element={<ItemListContainer nameEcommerce={name} />}
        />
        <Route
          path="/category/:category"
          element={<ItemListContainer nameEcommerce={name} />}
        />
        <Route
          path="/:id"
          element={<ItemListContainer nameEcommerce={name} />}
        />

        <Route path="*" element={<PrincipalPage />} />
      </Routes>
    </div>
  );
}

export default App;
