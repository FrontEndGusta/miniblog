import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
//hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";
import AboutX from "./pages/About/AboutX";
import HomeX from "./pages/Home/HomeX";
import NavbarX from "./components/NavbarX";
import FooterX from "./components/FooterX";
import LoginX from "./pages/Login/LoginX";
import RegisterX from "./pages/Register/RegisterX";

//context
import { AuthProvider } from "./context/AuthContext";
import CreatePostX from "./pages/CreatePost/CreatePostX";
import DashboardX from "./pages/Dashboard/DashboardX";

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <NavbarX />
          <div className="container">
            <Routes>
              <Route path="/" element={<HomeX />} />
              <Route path="/about" element={<AboutX />} />
              <Route
                path="/login"
                element={!user ? <LoginX /> : <Navigate to="/" />}
              />
              <Route
                path="/register"
                element={!user ? <RegisterX /> : <Navigate to="/" />}
              />
              <Route path="/posts/create" element={user ? <CreatePostX /> : <Navigate to="/login" />} />
              <Route path="/dashboard" element={user ? <DashboardX /> : <Navigate to="/login" />} />
            </Routes>
          </div>
          <FooterX />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
