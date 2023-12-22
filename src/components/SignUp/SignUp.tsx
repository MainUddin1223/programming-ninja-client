"use client";
import { Card, Col, Input, Row } from "antd";
import Styles from "./SignUp.module.css";
import BackButton from "../BackButton/BackButton";
import Link from "next/link";
const SignUp = () => {
  return (
    <div className={Styles.container}>
      <BackButton />
      <div className={Styles.card_container}>
        <Card
          style={{
            backgroundImage: "var(--primary)",
            color: "rgb(222, 207, 207)",
          }}
        >
          <h1 style={{ textAlign: "center", margin: "10px" }}>
            Create your account
          </h1>
          <div>
            <Row gutter={20}>
              <Col sm={12}>
                <div className={Styles.input_div}>
                  <p style={{ padding: "10px 0", fontSize: "17px" }}>
                    Your name
                  </p>
                  <Input placeholder="john Doe" />
                </div>
              </Col>
              <Col sm={12}>
                <div className={Styles.input_div}>
                  <p style={{ padding: "10px 0", fontSize: "17px" }}>
                    Your email
                  </p>
                  <Input placeholder="john@gmail.com" />
                </div>
              </Col>
              <Col sm={12}>
                <div className={Styles.input_div}>
                  <p style={{ padding: "10px 0", fontSize: "17px" }}>
                    Password
                  </p>
                  <Input.Password placeholder="************" />
                </div>
              </Col>
              <Col sm={12}>
                <div className={Styles.input_div}>
                  <p style={{ padding: "10px 0", fontSize: "17px" }}>
                    Confirm password
                  </p>
                  <Input.Password placeholder="************" />
                </div>
              </Col>
            </Row>

            <button className={Styles.signUp_btn}>Sign up</button>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "15px",
            }}
          >
            <p>ALready have an account ?</p>
            <Link
              href="/login"
              style={{ color: "#070d17", fontSize: "15px", fontWeight: "bold" }}
            >
              Login now
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
