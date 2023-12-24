"use client";

import { Button, Input, Modal, Radio, Space } from "antd";
import { useState } from "react";
import type { RadioChangeEvent } from "antd";
import Search from "antd/es/input/Search";
import { useAddQuizMutation } from "@/redux/api/adminApi";

type IDProps = {
  params: any;
};
const AddQuiz = ({ params }: IDProps) => {
  const [questionType, setQuestionType] = useState("single");
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState<string[]>([]);
  const [answers, setAnswer] = useState<string[]>([]);
  const [addQuiz] = useAddQuizMutation();

  const onSearch = (value: string) => {
    setOptions([...options, value]);
  };

  const handleAnswers = (value: string) => {
    if (questionType == "single" && answers.length > 0) {
      Modal.error({
        content: "Answer must not be more than one",
      });
    } else {
      setAnswer([...answers, value]);
    }
  };
  const handleAddQuiz = async () => {
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
  };

  return (
    <div>
      <p>Need redux impl</p>
      <h1>Create a quiz</h1>
      <div>
        <p>Select Question type</p>
        <Radio.Group
          onChange={(e: RadioChangeEvent) => {
            setQuestionType(e.target.value);
            setAnswer([]);
          }}
          value={questionType}
        >
          <Radio value={"single"}>
            <p style={{ color: "red" }}>Single</p>
          </Radio>
          <Radio value={"multiple"}>
            <p style={{ color: "red" }}>Multiple choice</p>
          </Radio>
        </Radio.Group>
      </div>
      <div>
        <p>Question</p>
        <input type="text" onChange={(e) => setQuestion(e.target.value)} />
      </div>
      <div>
        <p>Options</p>
        {options.map((option, i) => (
          <div key={i}>
            <h3>{option}</h3>
            <Button
              onClick={() => {
                const filteredOptions = options.filter((opt) => option !== opt);
                setOptions(filteredOptions);
              }}
            >
              Remove
            </Button>
          </div>
        ))}
        <div>
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Add"
            size="large"
            onSearch={onSearch}
          />
        </div>
      </div>
      <div>
        <p>Answers</p>
        {answers.map((answer, i) => (
          <div key={i}>
            <h3>{answer}</h3>
            <Button
              onClick={() => {
                const filteredAnswers = answers.filter((ans) => answer !== ans);
                setAnswer(filteredAnswers);
              }}
            >
              Remove
            </Button>
          </div>
        ))}
        <div>
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Add"
            size="large"
            onSearch={handleAnswers}
          />
        </div>
      </div>
      <button onClick={handleAddQuiz}>Create</button>
    </div>
  );
};

export default AddQuiz;
