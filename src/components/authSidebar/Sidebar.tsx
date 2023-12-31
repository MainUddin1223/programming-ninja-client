import { Avatar } from "antd";
import Styles from "./Sidebar.module.css";
import user from "@/assets/user.jpg";
import Image from "next/image";
import Link from "next/link";
import { getAuthInfo } from "@/utils/jwt";
import { useAppSelector } from "@/redux/hooks";
import Logout from "../Logout/Logout";

const getSidebarItems = (role: string, authData: any) => {
  if (role == "performer") {
    return (
      <div>
        <div className={Styles.profile_section}>
          <Avatar size={100} icon={<Image src={user} alt="user" />} />
          <div>
            <p>Name : {authData.name}</p>
            <p>Email: {authData.email}</p>
          </div>
        </div>
        <div className={Styles.nav_item_container}>
          <Link href={"/"}>Home</Link>
          <Link href={`/${role}`}>Dashboard</Link>
          <Link href={`/${role}/give-test`}>Give a Test</Link>
          <Link href={`/${role}/quiz`}>My Tests</Link>
          <Link href={`/${role}/leader-board`}>Leader Board</Link>
        </div>
      </div>
    );
  } else if (role == "admin") {
    return (
      <div>
        <div className={Styles.profile_section}>
          <Avatar size={100} icon={<Image src={user} alt="user" />} />
          <div>
            <p>Name : {authData.name}</p>
            <p>Email: {authData.email}</p>
          </div>
        </div>
        <div className={Styles.nav_item_container}>
          <Link href={"/"}>Home</Link>
          <Link href={`/${role}/`}>Dashboard</Link>
          <Link href={`/${role}/categories`}>Categories</Link>
          <Link href={`/${role}/leader-board`}>Leader Board</Link>
          {/* <Link href={`/${role}/performers`}>Performers</Link> */}
        </div>
      </div>
    );
  }
};

const Sidebar = () => {
  const authInfo: any = getAuthInfo();
  const { authData } = useAppSelector((state) => state.authData);
  const sidebar = getSidebarItems(authInfo.role, authData);
  return (
    <div>
      {sidebar}
      <Logout>
        <button
          className={Styles.logout_btn}
          onClick={() => {
            window;
          }}
        >
          Logout
        </button>
      </Logout>
    </div>
  );
};

export default Sidebar;
