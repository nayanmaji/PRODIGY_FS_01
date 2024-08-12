import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handelSignUp = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.cpassword) {
      alert("Password and Confirm Password do not Match.");
      return;
    }
    try {
      const response = await fetch('http://localhost:4000/signup', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          password: formData.password,
          cpassword: formData.cpassword,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        const { token } = data;
        localStorage.setItem("token", token);
        navigate("/home");
      }
      else {
        const errorData = await response.json();
        alert(errorData.message);}
      
    } catch (error) {
      const errorMessage = error.message || "An unexpected error occurred";
    window.alert(errorMessage);
    }
  };

  return (
    <>
      <form onSubmit={handelSignUp} className="max-w-sm mx-auto">
        <h2 className="text-3xl text-center font-bold py-10">SIGNUP</h2>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            ENTER YOUR FULL NAME
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
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
            value={formData.phone}
            onChange={handleChange}
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
            value={formData.password}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="cpassword"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Confirm Password
          </label>
          <input
            type="password"
            name="cpassword"
            value={formData.cpassword}
            onChange={handleChange}
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

export default SignUp;
