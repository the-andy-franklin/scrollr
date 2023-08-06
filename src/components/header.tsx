"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Header() {
  const { status } = useSession();

  return (
    <header className="p-4 flex justify-between items-center border-b border-black">
      <h1 className="text-2xl font-bold">Scrollr</h1>
      <div className="flex items-center gap-4">
        {(() => {
          if (status === "loading") return <p>Loading...</p>;
          if (status === "unauthenticated") return (
            <button
              onClick={() => signIn()}
              className="bg-white text-blue-500 px-4 py-2 rounded active:bg-gray-200"
            >
              Login
            </button>
          );
          if (status === "authenticated") return (
            <button
              onClick={() => signOut()}
              className="bg-white text-blue-500 px-4 py-2 rounded active:bg-gray-200"
            >
            Sign Out
            </button>
          );
        })()}
      </div>
    </header>
  );
}
