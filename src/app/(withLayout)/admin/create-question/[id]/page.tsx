"use client";

import { Button, Input, Modal, Radio, Space } from "antd";
import { useState, useRef } from "react";
import type { RadioChangeEvent } from "antd";
import Search from "antd/es/input/Search";
import { useAddQuizMutation } from "@/redux/api/adminApi";

type IDProps = {
  params: any;
};

const AddQuiz = ({ params }: IDProps) => {
  const searchInputRef = useRef();
  const [questionType, setQuestionType] = useState("single");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState<string[]>([]);
  const [answers, setAnswer] = useState<string[]>([]);
  const [addQuiz] = useAddQuizMutation();

  const handleQuestion = (value: string) => {
    if (!value) {
      Modal.error({
        content: "Answer can not be empty",
      });
    } else {
      setOptions([...options, value]);
    }
  };

  const handleAnswers = (value: string) => {
    if (!value) {
      Modal.error({
        content: "Answer can not be empty",
      });
    } else {
      if (questionType == "single" && answers.length > 0) {
        Modal.error({
          content: "Answer must not be more than one",
        });
      } else {
        setAnswer([...answers, value]);
      }
    }
  };

  const handleAddQuiz = async () => {
    if (!options.length || !answers.length || !question) {
      Modal.error({
        content: "Please fill the all required field",
      });
    } else if (options.length < 3) {
      Modal.error({
        content: "Options must contain at least 3 options",
      });
    } else {
      const res = await addQuiz({
        categoryId: params.id,
        quizData: { questionType, options, answer: answers, question },
      }).unwrap();
      if (res.success) {
        Modal.success({
          content: "Quiz add successfully",
        });
      } else {
        Modal.error({
          content: "Failed to add quiz",
        });
      }
    }
    setQuestion("");
    setOptions([]);
    setAnswer([]);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Create a quiz</h1>
      <div>
        <h3>Select Question type</h3>
        <Radio.Group
          onChange={(e: RadioChangeEvent) => {
            setQuestionType(e.target.value);
            setAnswer([]);
          }}
          value={questionType}
          style={{ margin: "10px 0" }}
        >
          <Radio value={"single"}>
            <p style={{ color: "rgb(224, 223, 223)" }}>Single</p>
          </Radio>
          <Radio value={"multiple"}>
            <p style={{ color: "rgb(224, 223, 223)" }}>Multiple choice</p>
          </Radio>
        </Radio.Group>
      </div>
      <div>
        <p style={{ padding: "10px 0" }}>Question</p>
        <Input
          type="text"
          size="large"
          style={{ borderRadius: "5px" }}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="input question"
        />
      </div>
      <div>
        <p style={{ padding: "10px 0" }}>Options</p>
        {options.map((option, i) => (
          <div key={i} style={{ margin: "10px 0" }}>
            <p
              style={{
                backgroundColor: "var(--secondary)",
                display: "inline-block",
                padding: "5px 10px",
              }}
            >
              {option}{" "}
              <span
                style={{
                  backgroundColor: "red",
                  padding: "5px 8px",
                  display: "inline-block",
                  cursor: "pointer",
                  borderRadius: "2px",
                }}
                onClick={() => {
                  const filteredOptions = options.filter(
                    (opt) => option !== opt,
                  );
                  setOptions(filteredOptions);
                }}
              >
                x
              </span>
            </p>
          </div>
        ))}
        <div style={{ margin: "10px 0" }}>
          <Search
            placeholder="input search text"
            enterButton="Add"
            size="large"
            onSearch={handleQuestion}
          />
        </div>
      </div>
      <div>
        <p>Answers</p>
        {answers.map((answer, i) => (
          <div key={i} style={{ margin: "10px 0" }}>
            <p
              style={{
                backgroundColor: "var(--secondary)",
                display: "inline-block",
                padding: "5px 10px",
              }}
            >
              {answer}{" "}
              <span
                style={{
                  backgroundColor: "red",
                  padding: "5px 8px",
                  display: "inline-block",
                  cursor: "pointer",
                  borderRadius: "2px",
                }}
                onClick={() => {
                  const filteredAnswers = answers.filter(
                    (ans) => answer !== ans,
                  );
                  setAnswer(filteredAnswers);
                }}
              >
                x
              </span>
            </p>
          </div>
        ))}
        <div style={{ margin: "10px 0" }}>
          <Search
            placeholder="Add answer"
            allowClear
            enterButton="Add"
            size="large"
            onSearch={handleAnswers}
          />
        </div>
      </div>
      <button
        onClick={handleAddQuiz}
        style={{ margin: "25px 0", padding: "10px 25px", cursor: "pointer" }}
      >
        Create
      </button>
    </div>
  );
};

export default AddQuiz;
