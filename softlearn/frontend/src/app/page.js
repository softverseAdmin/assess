"use client";
import * as api from "./apiCall/apiClient";
import { useEffect } from "react";
import Link from "next/link";


export default function Home() {
  useEffect(() => {
    let subcribe = true;
    if (subcribe) {
      api
        .getAuthStatus()
        .then((auth) =>
          auth.isLoggedIn
            ? console.log("User is logged in")
            : console.log("User is not")
        );
    }
    return () => (subcribe = false);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-3 flex-col">
        <Link
          className=" px-6 py-3 bg-indigo-600 text-white rounded"
          href="/auth/login"
        >
          Go to Login
        </Link>
        <Link className=" px-6 py-3 bg-teal-400 rounded" href="/auth/register">
          Go to Register
        </Link>
      </div>
    </main>
  );
}
