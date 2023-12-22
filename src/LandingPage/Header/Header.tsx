import { Button, Flex } from "antd";
import Styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={Styles.header_section}>
      <div className={Styles.header_container}>
        <h1>Programming Ninja</h1>
        <div className={Styles.header_btn_grp}>
          <button className={Styles.header_btn}>Get Started</button>
          <button className={Styles.header_btn}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
