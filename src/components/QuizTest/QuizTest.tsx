"use client";

import { useGiveTestMutation } from "@/redux/api/performerApi";
import { useState } from "react";

const QuizTest = ({ id }: { id: number }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [giveTest] = useGiveTestMutation();
  return <div>QuizTest</div>;
};

export default QuizTest;
