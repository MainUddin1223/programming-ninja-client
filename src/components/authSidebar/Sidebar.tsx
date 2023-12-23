"use client";
import { Avatar } from "antd";
import Styles from "./Sidebar.module.css";
import user from "@/assets/user.jpg";
import Image from "next/image";
import Link from "next/link";

const getSidebarItems = (role: string) => {
  if (role == "performer") {
    return (
      <div>
        <div className={Styles.profile_section}>
          <Avatar size={100} icon={<Image src={user} alt="user" />} />
          <div>
            <p>Name : MR Hacker</p>
            <p>Email: hacker@gmail.com</p>
            <p>Rank : 10</p>
          </div>
        </div>
        <div className={Styles.nav_item_container}>
          <Link href={"/"}>Home</Link>
          <Link href={"/performer"}>Dashboard</Link>
          <Link href={"/performer/give-test"}>Give a Test</Link>
          <Link href={"performer/quiz"}>My Tests</Link>
          <Link href={"/performer/give-test"}>Leader Board</Link>
        </div>
      </div>
    );
  } else if (role == "admin") {
    return (
      <div>
        <div>
          <Avatar size={84} icon={<Image src={user} alt="user" />} />
          <p>Admin</p>
          <p>Email</p>
          <p>Rank</p>
        </div>
        <div>
          <Link href={"/"}>Home</Link>
          <Link href={"performer/dashboard"}>Categories</Link>
          <Link href={"performer/give-test"}>Create question</Link>
          <Link href={"performer/quiz"}>Questions</Link>
          <Link href={"performer/give-test"}>Leader Board</Link>
          <Link href={"performer/give-test"}>Performers</Link>
        </div>
      </div>
    );
  }
};

const Sidebar = () => {
  const sidebar = getSidebarItems("performer");
  return (
    <div>
      {sidebar}
      <button className={Styles.logout_btn}>Logout</button>
    </div>
  );
};

export default Sidebar;
