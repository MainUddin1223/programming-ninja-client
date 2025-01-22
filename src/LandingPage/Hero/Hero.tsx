import Styles from "./Hero.module.css";
import react_logo from "@/assets/react_logo.png";
import ts_logo from "@/assets/js_logo.png";
import python_logo from "@/assets/python_logo.png";
import php_logo from "@/assets/php_logo.png";
import tailwind_logo from "@/assets/tailwind_logo.png";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {

  return (
    <div className={Styles.container}>
      <div>
      </div>
      <div className={Styles.slogan_container}>
        <h1 className={Styles.slogan}>
          Become an Interview cracker. Give test on you stack and become a Ninja
        </h1>
        <Link href={"/performer"}>
          <button className={Styles.start_btn}>Start a Test</button>
        </Link>
      </div>
      <Image
        src={react_logo}
        alt="react_logo"
        width={300}
        style={{
          position: "absolute",
          top: "-50px",
          left: "-50px",
          zIndex: "1",
          opacity: ".7",
        }}
      />
      <Image
        src={python_logo}
        alt="python_logo"
        width={300}
        style={{
          position: "absolute",
          bottom: "-50px",
          right: "-50px",
          zIndex: "1",
          opacity: ".7",
        }}
      />
    </div>
  );
};

export default Hero;
