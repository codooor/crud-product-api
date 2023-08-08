import { Hero, Navbar } from "./components";
import {
  Mission,
  Products,
  Testimonials,
  Login,
  Register,
  Wholesale,
} from "./Pages/";
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
            <Route path="/register" element={<Register />} />
            <Route path="/wholesale" element={<Wholesale />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
