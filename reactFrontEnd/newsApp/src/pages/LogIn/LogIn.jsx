import React, { useState } from "react";
import { GetNewsService } from "../../services/ApiService";

import "./Login.css";
import { useNavigate } from "react-router-dom";

function LogIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //check if user exist,
  //if user exist read the cookie and save it to local storage or local session

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userBody = {
      email: email,
      password: password,
    };
    try {
      const result = await GetNewsService.logIn(
        userBody.email,
        userBody.password,
      );
      console.log(result);
      if (result.success) {
        navigate("/news");
      } else {
        alert("wrong email or password");
      }
    } catch (error) {
      console.log("ups", error);
    } finally {
      console.log("finally");
    }
  };

  return (
    <>
      <div className="mt-20 mb-20 text-center bannerTop bg-slate-300 py-3">
        <h1 className="font-mono text-lg">SECRET WEAPONS OF RUSSIAN BOTS</h1>
      </div>
      <div className="loginContainer mt-52 flex justify-around">
        <div className="titleContainer">
          <div className="text-center">SignIn</div>
          <br />
          <div>
            <input
              className="mb-9 w-56"
              value={email}
              placeholder="  enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
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
