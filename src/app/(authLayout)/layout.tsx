import React from "react";
import { LogoutOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import Styles from "./layout.module.css";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className={Styles.nav_container}>
        <div className={Styles.nav_items_container}>
          <h1>Programming Ninja</h1>
          <Avatar
            style={{ backgroundImage: "var(--primary)", cursor: "pointer" }}
            size={30}
            icon={<LogoutOutlined />}
          />
        </div>
      </div>
      <div className={Styles.content_section}>
        <div className={Styles.content_container}>
          <div className={Styles.sidebar_container}>
            <div className={Styles.sidebar_items_container}>
              <h1></h1>
            </div>
          </div>
          <div className={Styles.children_container}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
