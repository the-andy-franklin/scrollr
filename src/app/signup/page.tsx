"use client";
import { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async () => {
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      window.location.href = '/';
    }
  };

  return (
    <div
      className="h-screen w-screen flex justify-center items-center bg-gray-800"
    >
      <div
        className="bg-white text-gray-700 p-6 rounded shadow-lg flex-shrink-0 text-center items-center flex flex-col gap-4 w-96"
      >
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <input
          className="border border-gray-300 rounded px-3 py-2 w-full"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border border-gray-300 rounded px-3 py-2 w-full"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white rounded px-3 py-2 w-1/2"
          type="submit"
          onClick={submit}
        >
            Sign Up
        </button>
      </div>
    </div>
  );
}