"use client";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useRouter } from "next/navigation";
const BackButton = () => {
  const router = useRouter();
  return (
    <div style={{ position: "absolute", top: "25px", left: "25px" }}>
      <Button
        onClick={() => router.back()}
        style={{ backgroundImage: "var(--primary)", border: "none" }}
      >
        <ArrowLeftOutlined style={{ color: "rgb(224, 223, 223)" }} />
      </Button>
    </div>
  );
};

export default BackButton;
