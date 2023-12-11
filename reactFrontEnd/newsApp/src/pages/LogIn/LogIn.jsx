import React, { useEffect, useState } from "react";
// import { GetNewsService } from "../../services/ApiService";

import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function LogIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await login(email, password);
      console.log(user);
      if (result.statusCode === 200) {
        navigate("/news");
      } else {
        alert("wrong email or password");
        navigate("/");
      }
    } catch (error) {
      console.log("ups", error);
    } finally {
      console.log("finally");
    }
  };
  return (
    <>
      <div className="loginContainer mt-32 flex justify-around">
        <div className="titleContainer">
          <div className="text-center">SignIn</div>
          <br />
          <input
            className="mb-9 w-56"
            value={email}
            placeholder="  enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            className="w-56"
            value={password}
            placeholder="  enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <div className="flex justify-around mt-9">
            <button onClick={handleSubmit} className="px-5">
              SignIn
            </button>
          </div>
        </div>
      </div>

      <h1 className="text-center my-7">Or</h1>
      <div className="flex justify-around">
        <button onClick={() => navigate("/create")} className="px-5">
          {" "}
          Create Account
        </button>
      </div>
    </>
  );
}

export default LogIn;
