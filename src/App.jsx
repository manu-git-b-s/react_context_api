import { Container } from "react-bootstrap";
import Store from "./pages/Store.jsx";
import Navbar from "./components/Navbar.jsx";
import { ShoppingCartProvider } from "./context/ShoppingCartContext.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <ShoppingCartProvider>
        <Navbar />
        <Container className="mb-4">
          <Store />
        </Container>
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
