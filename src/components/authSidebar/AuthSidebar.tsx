"use client";

import {
  CreditCardOutlined,
  HomeOutlined,
  TableOutlined,
  ThunderboltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import Link from "next/link";
// import { USER_ROLE } from './role';
export const sidebarItems = (role: string) => {
  const performerSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/`}>Home</Link>,
      icon: <HomeOutlined style={{ fontSize: "21px" }} />,
      key: `/`,
      style: { border: "1px solid var(--primary-color)" },
    },
    {
      label: <Link href={`/${role}/my-quiz`}>My Quiz</Link>,
      icon: <UserOutlined style={{ fontSize: "21px" }} />,
      key: `/${role}/my-quiz`,
      style: { border: "1px solid var(--primary-color)" },
    },
    {
      label: <Link href={`/${role}/categories`}>My Quiz</Link>,
      icon: <UserOutlined style={{ fontSize: "21px" }} />,
      key: `/${role}/categories`,
      style: { border: "1px solid var(--primary-color)" },
    },
    {
      label: <Link href={`/${role}/give-quiz`}>Give a Quiz</Link>,
      icon: <UserOutlined style={{ fontSize: "21px" }} />,
      key: `/${role}/give-quiz`,
      style: { border: "1px solid var(--primary-color)" },
    },
    {
      label: <Link href={`/${role}/leader-board`}>Give a Quiz</Link>,
      icon: <UserOutlined style={{ fontSize: "21px" }} />,
      key: `/${role}/leader-board`,
      style: { border: "1px solid var(--primary-color)" },
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/create-category`}>Create category</Link>,
      icon: <TableOutlined style={{ fontSize: "21px" }} />,
      key: `/${role}/create-category`,
      style: { border: "1px solid var(--primary-color)" },
    },
    {
      label: <Link href={`/${role}/create-quiz`}>Create a quiz</Link>,
      icon: <TableOutlined style={{ fontSize: "21px" }} />,
      key: `/${role}/create-quiz`,
      style: { border: "1px solid var(--primary-color)" },
    },
    {
      label: <Link href={`/${role}/leader-board`}>Leader board</Link>,
      icon: <TableOutlined style={{ fontSize: "21px" }} />,
      key: `/${role}/leader-board`,
      style: { border: "1px solid var(--primary-color)" },
    },
    {
      label: <Link href={`/${role}/manage-quiz`}>Manage quiz</Link>,
      icon: <TableOutlined style={{ fontSize: "21px" }} />,
      key: `/${role}/manage-quiz`,
      style: { border: "1px solid var(--primary-color)" },
    },
  ];

  if (role === "admin") return adminSidebarItems;
  else if (role === "performer") return performerSidebarItems;
};
