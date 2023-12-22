"use client";
import { Button, Card, Input } from "antd";
import Styles from "./Login.module.css";

const LoginComponent = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.card_container}>
        <Card>
          <h1>Login</h1>
          <div>
            <Input />
            <Input.Password placeholder="input password" />
            <Button>Login</Button>
          </div>
          <div>
            <p>New to Programming ninja ?</p>
            <a href="/signUp">Sign up</a>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LoginComponent;
