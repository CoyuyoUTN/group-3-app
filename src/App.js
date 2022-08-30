import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";

function App() {
  const name = "G&&G";
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer nameEcommerce={name} />
    </div>
  );
}

export default App;
