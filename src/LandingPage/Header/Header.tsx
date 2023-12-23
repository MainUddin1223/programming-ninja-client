import Link from "next/link";
import Styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={Styles.header_section}>
      <div className={Styles.header_container}>
        <h1>Programming Ninja</h1>
        <div className={Styles.header_btn_grp}>
          <Link href={"/performer"}>
            <button className={Styles.header_btn}>Get Started</button>
          </Link>
          <Link href="/login">
            <button className={Styles.header_btn}>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
