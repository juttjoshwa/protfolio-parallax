import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./Pages/Hero";
import { AnimatePresence } from "framer-motion";
import axios from "axios";
import Login from "./Pages/Login";
import Admin from "./Pages/Admin";

function App() {
  axios.defaults.baseURL = "https://parallax-backend.vercel.app/api";
  axios.defaults.withCredentials = true;
  return (
    <div>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
