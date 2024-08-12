import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/login", {
        phone,
        password,
      });
      const { token } = response.data;
      localStorage.setItem("token", token);
      navigate("/home");
    } catch (error) {
      const errorMessage = error.response?.data?.message || "An unexpected error occurred";
    window.alert(errorMessage);
    }
  };

  return (
    <>
      <form onSubmit={handleLogin} className="max-w-sm mx-auto py-20">
        <h2 className="text-3xl text-center font-bold py-10">LOGIN</h2>
        <div className="mb-5">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Your password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="flex items-start mb-5"></div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Login;
