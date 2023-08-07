import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Mission from "./Pages/Mission";
import Products from "./Pages/Products";

function App() {
  return (
    <>
      <Navbar />
      <main className="app-container">
        <Hero className="hero-photo" />
        <Mission />
        <Products />
      </main>
    </>
  );
}

export default App;
