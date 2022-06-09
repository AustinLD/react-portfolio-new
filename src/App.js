import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Layout from "./components/Layout"
import Home from "./components/Home";
import About from "./components/About"
import Contact from "./components/Contact"

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/react-portfolio" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </>
  )
}

export default App;