"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

const Logout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const handleLogout = () => {
    typeof window !== "undefined" && localStorage.clear();
    router.push("/");
  };
  return <div onClick={handleLogout}>{children}</div>;
};

export default Logout;
