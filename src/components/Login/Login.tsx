"use client";
import { Card, Input, Modal, message } from "antd";
import Styles from "./Login.module.css";
import BackButton from "../BackButton/BackButton";
import Link from "next/link";
import { useState } from "react";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { getAuthInfo } from "@/utils/jwt";
import { useRouter } from "next/navigation";
import Loader from "../Loader/Loader";

const LoginComponent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [userLogin] = useUserLoginMutation();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      const res = await userLogin({ ...loginData }).unwrap();
      if (res.success) {
        message.success("User logged in successfully");
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
      setLoginData({ email: "", password: "" });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      Modal.error({
        content: "Failed to login",
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
            Login to your account
          </h1>
          <div>
            <div className={Styles.input_div}>
              <p style={{ padding: "10px 0", fontSize: "17px" }}>User email</p>
              <Input
                placeholder="john@gmail.com"
                type="email"
                value={loginData.email}
                onChange={(e) => {
                  setLoginData({
                    ...loginData,
                    email: e.target.value,
                  });
                }}
              />
            </div>
            <div className={Styles.input_div}>
              <p style={{ padding: "10px 0", fontSize: "17px" }}>
                User password
              </p>
              <Input.Password
                placeholder="************"
                value={loginData.password}
                onChange={(e) => {
                  setLoginData({
                    ...loginData,
                    password: e.target.value,
                  });
                }}
              />
            </div>

            <button
              disabled={!loginData.email || !loginData.password ? true : false}
              className={`${
                !loginData.email || !loginData.password
                  ? Styles.disabled_btn
                  : Styles.login_btn
              } `}
              onClick={handleLogin}
            >
              Login
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
            <p>New to Programming ninja ?</p>
            <Link
              href="/signUp"
              style={{ color: "#070d17", fontSize: "15px", fontWeight: "bold" }}
            >
              Sign up now !
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoginComponent;
