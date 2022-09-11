import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useContext, useEffect } from "react";
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import { AuthContext } from "./contexts/AuthContextProvider"
import NavigationBar from "./components/NavigationBar";

function App() {
  const { user, setUser } = useContext(AuthContext)
  useEffect(() => {
    const foo = async () => {

      setUser(JSON.parse(localStorage.getItem('user')))
    }
    foo()
  }, [])
  return (
    <BrowserRouter >
      <NavigationBar />
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="login" />} />
        <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
