import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {user && <Route path="/home" element={<HomePage />} />}
      </Routes>
    </>
  );
}

export default App;
