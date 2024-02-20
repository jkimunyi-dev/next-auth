import Link from "next/link";
import React from "react";

const Nav = () => {
  return (
    <header className="bg-gray-600">
      <nav className="flex justify-between items-center px-10 py-5">
        <div className="text-l font-bold text-gray-100 "> MySite </div>
        <div className="flex gap-10">
          <Link href="/">Home</Link>
          <Link href="/create-user">Create User</Link>
          <Link href="/client-member">Client Member</Link>
          <Link href="/member">Member</Link>
          <Link href="/public">Public</Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
