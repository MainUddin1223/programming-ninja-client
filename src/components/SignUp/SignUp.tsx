"use client";
import { Card, Col, Input, Modal, Row, message } from "antd";
import Styles from "./SignUp.module.css";
import BackButton from "../BackButton/BackButton";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSignUpMutation } from "@/redux/api/authApi";
import { getAuthInfo } from "@/utils/jwt";
import Loader from "../Loader/Loader";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [signUp] = useSignUpMutation();

  const [signUpData, setSignUpData] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignUp = async () => {
    try {
      setIsLoading(true);
      const res = await signUp({ ...signUpData }).unwrap();
      if (res.success) {
        message.success("User Sign up successfully");
        const accessToken = res?.accessToken;
        typeof window !== "undefined" &&
          localStorage.setItem("accessToken", accessToken);
        const authInfo: any = getAuthInfo();
        setIsLoading(false);
      } else {
        setIsLoading(false);
        Modal.error({
          content: res.message || "Failed to login",
        });
      }
      setSignUpData({
        email: "",
        name: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      Modal.error({
        content: "Failed to Sign up",
      });
    }
  };
  return (
    <div className={Styles.container}>
      <BackButton />
      <div className={Styles.card_container}>
        {isLoading && <Loader />}
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
                  <Input
                    placeholder="john Doe"
                    value={signUpData.name}
                    onChange={(e) => {
                      setSignUpData({
                        ...signUpData,
                        name: e.target.value,
                      });
                    }}
                  />
                </div>
              </Col>
              <Col sm={12}>
                <div className={Styles.input_div}>
                  <p style={{ padding: "10px 0", fontSize: "17px" }}>
                    Your email
                  </p>
                  <Input
                    placeholder="john@gmail.com"
                    value={signUpData.email}
                    onChange={(e) => {
                      setSignUpData({
                        ...signUpData,
                        email: e.target.value,
                      });
                    }}
                  />
                </div>
              </Col>
              <Col sm={12}>
                <div className={Styles.input_div}>
                  <p style={{ padding: "10px 0", fontSize: "17px" }}>
                    Password
                  </p>
                  <Input.Password
                    placeholder="************"
                    value={signUpData.password}
                    onChange={(e) => {
                      setSignUpData({
                        ...signUpData,
                        password: e.target.value,
                      });
                    }}
                  />
                </div>
              </Col>
              <Col sm={12}>
                <div className={Styles.input_div}>
                  <p style={{ padding: "10px 0", fontSize: "17px" }}>
                    Confirm password
                  </p>
                  <Input.Password
                    placeholder="************"
                    value={signUpData.confirmPassword}
                    onChange={(e) => {
                      setSignUpData({
                        ...signUpData,
                        confirmPassword: e.target.value,
                      });
                    }}
                  />
                </div>
              </Col>
            </Row>

            <button
              disabled={
                !signUpData.email ||
                !signUpData.password ||
                !signUpData.confirmPassword ||
                !signUpData.name
                  ? true
                  : false
              }
              className={`${
                !signUpData.email ||
                !signUpData.password ||
                !signUpData.confirmPassword ||
                !signUpData.name
                  ? Styles.disabled_btn
                  : Styles.signUp_btn
              } `}
              onClick={handleSignUp}
            >
              Sign up
            </button>
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
