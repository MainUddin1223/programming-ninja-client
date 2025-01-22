import Image from "next/image";
import Styles from "./About.module.css";
import about_img from "@/assets/about_img (1).png";
const About = () => {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.about_header}>Enrich your programming skills</h1>
      <p style={{ textAlign: "center" }}>
        You can give test on different technologies and track your performance.
        It will encourage you to enrich your skills . We also providing the
        leader board where you can find your position.
      </p>
      <div
        className={Styles.image_container}
      >
        <Image
          src={about_img}
          alt="about_img"
          width={100}
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default About;
