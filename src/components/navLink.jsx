"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();
  const isActive = pathName === link.url;

  return (
    <Link
      className={`rounded p-1 ${isActive ? "bg-black text-white" : ""} hover:text-white hover:bg-pink-200 transition font-mono`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
