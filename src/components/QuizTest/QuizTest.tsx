"use client";
import Styles from "./QuizTest.module.css";

import { useGetTestByIdQuery } from "@/redux/api/performerApi";
import Loader from "../Loader/Loader";
import Quiz from "./Quiz/Quiz";
import { Button } from "antd";

const QuizTest = ({ id }: { id: number }) => {
  const { data, isLoading } = useGetTestByIdQuery(id);
  if (isLoading) {
    return <Loader />;
  }
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
        <Button>Complete</Button>
      </div>
    </div>
  );
};

export default QuizTest;
