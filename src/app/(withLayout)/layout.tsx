"use client";
import { LogoutOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import Styles from "./layout.module.css";
import Sidebar from "@/components/authSidebar/Sidebar";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader/Loader";
import { useRouter } from "next/navigation";
import { getAuthInfo } from "@/utils/jwt";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();
  const getAuth = getAuthInfo();

  useEffect(() => {
    if (!getAuth) {
      router.push("/login");
      setIsLoading(false);
    }
    setIsLoading(false);
  }, [router, isLoading, getAuth]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <div className={Styles.nav_container}>
        <div className={Styles.nav_items_container}>
          <Link href={"/"}>
            <h1 style={{ cursor: "pointer" }}>Programming Ninja</h1>
          </Link>
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
              <Sidebar />
            </div>
          </div>
          <div className={Styles.children_container}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
