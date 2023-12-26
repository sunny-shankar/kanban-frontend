import React, { useState } from "react";

import userStore from "../store/user";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("test123");
  const { VITE_BASE_URL } = import.meta.env;
  const { userToken, setUserToken, toggleLoading } = userStore();
  const handleLogin = async () => {
    toggleLoading();
    const { data } = await axios({
      url: VITE_BASE_URL + "/api/v1/user/login",
      method: "POST",
      data: {
        email,
        password,
      },
    });
    setUserToken(data.data.access_token);
    toggleLoading();
  };

  return (
    <form
      className="bg-neutral shadow-xl m-auto mx-12 p-10 w-[40vw] flex flex-col justify-center items-center rounded"
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin();
      }}
    >
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text font-bold text-neutral-content">
            What is your Email?
          </span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label ">
          <span className="label-text font-bold text-neutral-content">
            Enter your password
          </span>
        </div>
        <input
          type="password"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button className="btn btn-primary mt-10 font-bold">
        Press to Login
      </button>
    </form>
  );
};

export default Login;
