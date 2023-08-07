import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Mission from "./Pages/Mission";

function App() {
  return (
    <>
      <Navbar />
      <main className="app-container">
        <Hero className="hero-photo" />
        <Mission />
      </main>
    </>
  );
}

export default App;
