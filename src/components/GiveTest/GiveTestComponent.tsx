"use client";
import { useState } from "react";
import Styles from "./GiveTest.module.css";

import {
  useGetCategoriesQuery,
  useGiveTestMutation,
} from "@/redux/api/performerApi";
import { Flex, Modal } from "antd";
import Loader from "../Loader/Loader";
import { useRouter } from "next/navigation";

type ICategory = {
  id: number;
  category: string;
};

const GiveTestComponent = () => {
  const [isPreparing, setIsPreparing] = useState(false);
  const { data, isLoading } = useGetCategoriesQuery(undefined);
  const [selectedCategory, setSelectedCategory] = useState<undefined | number>(
    undefined,
  );
  const router = useRouter();
  const [giveTest] = useGiveTestMutation();

  const handlePrepareQuestion = async () => {
    try {
      setIsPreparing(true);
      const res = await giveTest(selectedCategory).unwrap();
      if (res.success) {
        Modal.success({
          content: "Your Question is ready",
        });
        setIsPreparing(false);
        router.push(`/quiz-test/${res.id}`);
        console.log(res);
      } else {
        setIsPreparing(false);
        Modal.error({
          content: res.message || "Failed to prepare question",
        });
      }
    } catch (error) {
      console.log(error);
      setIsPreparing(false);
      Modal.error({
        content: "Failed to prepare question",
      });
    }
  };

  return (
    <div>
      {isLoading || (isPreparing && <Loader />)}
      <div>
        <Flex gap={16}>
          {data?.result.map((category: ICategory) => (
            <div
              onClick={() => setSelectedCategory(category.id)}
              key={category.id}
              className={`${
                category.id == selectedCategory && Styles.active_category_bg
              } ${Styles.category_container}`}
            >
              <h1>{category.category}</h1>
            </div>
          ))}
        </Flex>
      </div>
      <button
        className={`${
          selectedCategory ? Styles.start_test_btn : Styles.disabled_btn
        }`}
        onClick={handlePrepareQuestion}
      >
        Start test
      </button>
    </div>
  );
};

export default GiveTestComponent;
