import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";

function App() {
  const name = "Tiendita";
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer nameEcommerce={name} />
    </div>
  );
}

export default App;
