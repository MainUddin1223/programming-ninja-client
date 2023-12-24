"use client";

import { Button, Modal, Radio, RadioChangeEvent } from "antd";
import { useState } from "react";
import Styles from "./Quiz.module.css";
import { useSubmitAnswerMutation } from "@/redux/api/performerApi";

const Quiz = ({ quiz, id }: { quiz: any; id: number }) => {
  const [quizData, setQuizData] = useState(quiz);
  const [submitting, setSubmitting] = useState(false);
  const [selectedSingleAnswer, setSelectedSingleAnswer] = useState("");
  const [submitAnswer] = useSubmitAnswerMutation();

  const handleSubmitAnswer = async () => {
    setSubmitting(true);
    try {
      const question = quiz.quiz;
      const answerData = {
        answer: { answer: [selectedSingleAnswer] },
        id: quizData.id,
      };
      const result = await submitAnswer(answerData).unwrap();
      if (result) {
        setQuizData({ ...result.result, quiz: question });
      } else {
        Modal.error({
          content: "Failed to submit your answer",
        });
      }
    } catch (error) {
      console.log(error);
    }
    setSubmitting(false);
  };
  return (
    <div className={Styles.question_container}>
      <h3>
        {id}. {quizData.quiz.question}
      </h3>
      <div>
        <Radio.Group
          onChange={(e: RadioChangeEvent) =>
            setSelectedSingleAnswer(e.target.value)
          }
          disabled={quizData.answered}
          value={selectedSingleAnswer}
          style={{
            margin: "15px 0",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          {quizData.options.map((option: string, i: number) => (
            <Radio key={i} value={option}>
              <p style={{ color: "white" }}>{option}</p>
            </Radio>
          ))}
        </Radio.Group>
      </div>
      {quizData.answered && (
        <div>
          {quizData.isCorrectAnswer ? (
            <div>
              <p
                style={{ fontWeight: "Bold", fontSize: "17px", color: "green" }}
              >
                Correct answer
              </p>
              <p style={{ margin: "15px 0" }}>
                Your Answer{" "}
                {quizData.selectedAnswer.map((ans: string, i: number) => (
                  <p key={i} style={{ margin: "5px 0" }}>
                    {ans},
                  </p>
                ))}
              </p>
              <p style={{ margin: "15px 0", fontWeight: "bold" }}>
                Correct Answer:{" "}
                {quizData.correctAnswer.map((ans: string, i: number) => (
                  <p key={i} style={{ margin: "5px 0" }}>
                    {ans},
                  </p>
                ))}
              </p>
            </div>
          ) : (
            <div>
              <p style={{ fontWeight: "Bold", fontSize: "17px", color: "red" }}>
                Wrong answer !!!
              </p>
              <p style={{ margin: "15px 0" }}>
                Your Answer{" "}
                {quizData.selectedAnswer.map((ans: string, i: number) => (
                  <p key={i} style={{ margin: "5px 0" }}>
                    {ans},
                  </p>
                ))}
              </p>
              <p style={{ margin: "15px 0", fontWeight: "bold" }}>
                Correct Answer:{" "}
                {quizData.correctAnswer.map((ans: string, i: number) => (
                  <p key={i} style={{ margin: "5px 0" }}>
                    {ans},
                  </p>
                ))}
              </p>
            </div>
          )}
        </div>
      )}
      <Button
        disabled={quizData.answered || !selectedSingleAnswer || submitting}
        onClick={handleSubmitAnswer}
      >
        {submitting ? "Submitting" : "Submit"}
      </Button>
    </div>
  );
};

export default Quiz;
