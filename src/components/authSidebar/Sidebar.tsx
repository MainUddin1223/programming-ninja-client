"use client";
import { Avatar } from "antd";
import Styles from "./Sidebar.module.css";
import user from "@/assets/user.jpg";
import Image from "next/image";
import Link from "next/link";
import { getAuthInfo } from "@/utils/jwt";
import { useRouter } from "next/navigation";

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
          <Link href={`/${role}`}>Dashboard</Link>
          <Link href={`/${role}/give-test`}>Give a Test</Link>
          <Link href={`/${role}/quiz`}>My Tests</Link>
          <Link href={`/${role}/give-test`}>Leader Board</Link>
        </div>
      </div>
    );
  } else if (role == "admin") {
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
          <Link href={`/${role}/categories`}>Categories</Link>
          <Link href={`/${role}/create-question`}>Create question</Link>
          <Link href={`/${role}/questions`}>Questions</Link>
          <Link href={`/${role}/leader-board`}>Leader Board</Link>
          <Link href={`/${role}/performers`}>Performers</Link>
        </div>
      </div>
    );
  }
};

const Sidebar = () => {
  const router = useRouter();
  const authInfo: any = getAuthInfo();
  if (!authInfo) {
    router.push("/login");
  }
  const sidebar = getSidebarItems(authInfo.role);
  return (
    <div>
      {sidebar}
      <button className={Styles.logout_btn}>Logout</button>
    </div>
  );
};

export default Sidebar;
