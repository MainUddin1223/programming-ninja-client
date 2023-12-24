"use client";
import Styles from "./QuizTest.module.css";

import {
  useCompleteTestMutation,
  useGetTestByIdQuery,
} from "@/redux/api/performerApi";
import Loader from "../Loader/Loader";
import Quiz from "./Quiz/Quiz";
import { Button, Modal } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

const QuizTest = ({ id }: { id: number }) => {
  const [completeTask] = useCompleteTestMutation();
  const { data, isLoading } = useGetTestByIdQuery(id);
  const [completing, setCompleting] = useState(false);
  const router = useRouter();
  if (isLoading) {
    return <Loader />;
  }

  const completeHandler = async () => {
    try {
      setCompleting(true);
      const res: any = await completeTask(id);
      console.log(res);
      if (res.data.success) {
        Modal.success({
          content: "Submission successful",
        });
        setCompleting(false);
        router.push("/performer/quiz");
      } else {
        setCompleting(false);
        Modal.error({
          content: "Submission failed",
        });
      }
    } catch (error) {
      console.log(error);
      setCompleting(false);
      Modal.error({
        content: "Submission Failed",
      });
    }
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.quiz_statics_container}>
        <h1>
          Quiz test on <span>{data.category.category}</span>
        </h1>
        <div className={Styles.score_container}>
          <div className={Styles.score}>
            <p>Total Score </p>
            <p>{data.score}</p>
          </div>
          <div className={Styles.score}>
            <p>Correct answer </p>
            <p>{data.rightAnswer}</p>
          </div>
          <div className={Styles.score}>
            <p>Wrong answer</p>
            {data.wrongAnswer}
          </div>
        </div>
      </div>
      <div className={Styles.question_container}>
        <div>
          {data.question.map((quiz: any, i: number) => (
            <Quiz key={quiz.id} quiz={quiz} id={i + 1} />
          ))}
        </div>
        <div className={Styles.quiz_btn_grp}>
          <Button
            onClick={completeHandler}
            disabled={
              data.wrongAnswer + data.rightAnswer !== 10 ||
              completing ||
              data.isCompleted
                ? true
                : false
            }
          >
            {completing ? "Completing" : "Complete"}
          </Button>
          <Button onClick={() => router.push("/performer/quiz")}>
            {data.isCompleted ? "My test" : "Skip now"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizTest;
