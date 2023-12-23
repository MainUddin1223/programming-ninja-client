"use client";

import {
  useGetTestByIdQuery,
  useGiveTestMutation,
} from "@/redux/api/performerApi";
import { useState } from "react";

const QuizTest = ({ id }: { id: number }) => {
  const { data, isLoading } = useGetTestByIdQuery(id);
  console.log(data);
  return <div>QuizTest</div>;
};

export default QuizTest;
