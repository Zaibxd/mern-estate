import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function () {
  // useState hook to manage form data. 'formData' stores input values,
  // and 'setFormData' is the function to update the state.
  const [formData, setFormData] = useState({});

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Function to handle input changes dynamically
  const handleChange = (e) => {
    // Using the spread operator to preserve existing form data and only update
    // the field that corresponds to the id of the input being changed
    setFormData({
      ...formData, // Keep all other form data unchanged
      [e.target.id]: e.target.value, // Update the specific field (id is used as the key)
    });
  };

  const handleSubmit = async (e) => {
    //prevent page loading on submitting form
    e.preventDefault();

    try {
      setLoading(true);
      //create proxy in vite.config.js
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="max-w-sm p-3 mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Sign up</h1>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          className="border p-3 rounded-lg outline-slate-400"
          type="text"
          placeholder="Username"
          id="username"
          onChange={handleChange}
        />
        <input
          className="border p-3 rounded-lg outline-slate-400"
          type="email"
          placeholder="Email"
          id="email"
          onChange={handleChange}
        />
        <input
          className="border p-3 rounded-lg outline-slate-400"
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="text-white p-3 bg-slate-700 rounded-lg uppercase hover:bg-slate-800 transition "
        >
          {loading ? "Loading..." : "Signup"}
        </button>
      </form>

      <div className="flex gap-2 mt-5">
        <p>Already have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-700">Sign In</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
}
