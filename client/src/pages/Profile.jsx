import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-sm mx-auto">
      <h1 className="text-3xl font-semibold text-center my-5">Profile</h1>
      <form action="" className="flex flex-col gap-4">
        <img
          src={currentUser.avatar}
          alt="Profile"
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center"
        />
        <input
          type="text"
          placeholder="username"
          id="username"
          className="border p-3 rounded-lg outline-slate-400"
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          className="border p-3 rounded-lg outline-slate-400"
        />
        <input
          type="text"
          placeholder="password"
          id="password"
          className="border p-3 rounded-lg outline-slate-400"
        />
        <button className="text-white p-3 rounded-lg bg-slate-700 hover:bg-slate-900 uppercase  disabled:opacity-80">
          Update
        </button>
      </form>

      <div className="flex justify-between mt-3">
        <span className="text-red-600 cursor-pointer">Delete Account</span>
        <span className="text-red-600 cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}
