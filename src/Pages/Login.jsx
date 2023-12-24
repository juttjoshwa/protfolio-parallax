import React, { useState } from "react";
import "./Login.css";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loading, setloading] = useState(false);
  const [name, setname] = useState("");
  const [user, setuser] = useState("");
  const [password, setpassword] = useState("");
  const nevigate = useNavigate();
  const HandleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const res = await axios.post("/login", {
        name: name,
        password: password,
      });
      setuser(res.data.user);
      setloading(false);
      nevigate("/admin");
    } catch (error) {
      toast.error("something went wrong");
      setloading(false);
    }
    setname("");
    setpassword("");
  };
  return (
    <div className="login-container">
      <section className="heading-section">
        <h1>Hi Joshwa</h1>
      </section>
      <section className="form-section">
        <form onSubmit={HandleSubmit}>
          <input
            value={name}
            required
            onChange={(e) => setname(e.target.value)}
            autoFocus
            type="text"
          />
          <input
            required
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            type="password"
          />
          <button type="submit">{loading ? "Loading" : "Go"}</button>
        </form>
      </section>
    </div>
  );
};

export default Login;
