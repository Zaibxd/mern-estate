import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className="max-w-sm p-3 mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Sign up</h1>

      <form className="flex flex-col gap-4" action="">
        <input
          className="border p-3 rounded-lg"
          type="text"
          placeholder="Username"
          id="username"
        />
        <input
          className="border p-3 rounded-lg"
          type="email"
          placeholder="Email"
          id="email"
        />
        <input
          className="border p-3 rounded-lg"
          type="password"
          placeholder="Password"
          id="password"
        />
        <button className="text-white p-3 bg-slate-700 rounded-lg uppercase hover:bg-slate-800 transition ">
          Sign up
        </button>
      </form>

      <div className="flex gap-2 mt-5">
        <p>Already have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-700">Sign In</span>
        </Link>
      </div>
    </div>
  );
}
