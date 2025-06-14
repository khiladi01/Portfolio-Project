import { Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./Pages/Home";

function App() {

  return (
    <>
        <Nav />
        <Routes>

          <Route path="/" element={<Home />} />
          
        </Routes>
        <Footer />
    </>
  )
}

export default App
