"use client";
import Styles from "./QuizTest.module.css";

import { useGetTestByIdQuery } from "@/redux/api/performerApi";
import Loader from "../Loader/Loader";
import Quiz from "./Quiz/Quiz";
import { Button } from "antd";
import { useRouter } from "next/navigation";

const QuizTest = ({ id }: { id: number }) => {
  const { data, isLoading } = useGetTestByIdQuery(id);
  const router = useRouter();
  if (isLoading) {
    return <Loader />;
  }
  console.log(data);
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
            disabled={
              data.wrongAnswer + data.rightAnswer !== 10 || data.isCompleted
                ? true
                : false
            }
          >
            Complete
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
