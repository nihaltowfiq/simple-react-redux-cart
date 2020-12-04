import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart/Cart";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div>
      <h1 className="text-center badge-primary">Simple Redux Cart</h1>
      <Cart />
      <Shop />
    </div>
  );
}

export default App;
