import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutX from "./pages/About/AboutX";
import HomeX from "./pages/Home/HomeX";
import NavbarX from "./components/NavbarX";
import FooterX from "./components/FooterX";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavbarX/>
      <div className="container">
      <Routes>
        <Route path="/" element={<HomeX/>}/>
        <Route path="/about" element={<AboutX/>}/>
        </Routes>
        </div>
        <FooterX/>
      </BrowserRouter>
    </div>
  );
}

export default App;
