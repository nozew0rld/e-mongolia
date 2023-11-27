import React from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="">
        <div className="flex flex-col">
          <label for="fname"> Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            className="border-[1px] border-solid border-black rounded-2xl w-[250px] h-[50px]"
          />
        </div>
        <div className="flex flex-col">
          <label for="pass"> Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            className="border-[1px] border-solid border-black rounded-2xl w-[250px] h-[50px]"
          />
        </div>
      </div>
      <button
        className="w-[100px] h-[50px] bg-light-blue-700 mt-10 rounded-xl border-[1px] border-solid border-black"
        onClick={() => {
          navigate("/home");
        }}
      >
        Login
      </button>
      <div
        className="mt-10 text-xl underline text-blue-400 active:text-blue-150 "
        onClick={() => {
          navigate("/signin");
        }}
      >
        Sign in
      </div>
    </div>
  );
};

export default Login;
