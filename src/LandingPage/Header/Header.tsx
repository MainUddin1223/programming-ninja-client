import Styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={Styles.header_section}>
      <div className={Styles.header_container}>
        <h1>Programming Ninja</h1>
        <div className={Styles.header_btn_grp}>
          <button className={Styles.header_btn}>Get Started</button>
          <a href="/login">
            <button className={Styles.header_btn}>Login</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
