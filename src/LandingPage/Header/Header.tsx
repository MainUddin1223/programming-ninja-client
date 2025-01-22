"use client";
import Link from "next/link";
import Styles from "./Header.module.css";
import { getAuthInfo } from "@/utils/jwt";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Modal } from "antd";

const Header = () => {
  const router = useRouter();
  const [url, setUrl] = useState("/signUp");
  useEffect(() => {
    const authData: any = getAuthInfo();
    if (authData) {
      setUrl(authData.role);
    }
  }, [router])
  return (
    <div className={Styles.header_section}>
      <div className={Styles.header_container}>
        <h1>Programming Ninja</h1>
        <div className={Styles.header_btn_grp}>
          <Link href={url}>
            <button className={Styles.header_btn}>Get Started</button>
          </Link>
          <Link href="/login" className={Styles.login_btn}>
            <button className={Styles.header_btn}>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
