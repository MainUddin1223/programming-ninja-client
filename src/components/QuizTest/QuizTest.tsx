"use client";
import Styles from "./QuizTest.module.css";

import { useGetTestByIdQuery } from "@/redux/api/performerApi";
import Loader from "../Loader/Loader";

const QuizTest = ({ id }: { id: number }) => {
  const { data, isLoading } = useGetTestByIdQuery(id);
  console.log(data);
  if (isLoading) {
    return <Loader />;
  }
  return <div className={Styles.container}></div>;
};

export default QuizTest;
