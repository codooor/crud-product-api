import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Mission from "./Pages/Mission";
import Products from "./Pages/Products";
import Testimonials from "./Pages/Testimonials";
import Login from "./Pages/Login";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main className="app-container">
          <Hero className="hero-photo" />
          <Routes>
            <Route path="/mission" element={<Mission />} />
            <Route path="/products" element={<Products />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
