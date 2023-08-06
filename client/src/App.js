import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="app-container">
        <Hero className="hero-photo" />
      </main>
    </>
  );
}

export default App;
