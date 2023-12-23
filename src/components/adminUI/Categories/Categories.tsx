"use client";
import { useState } from "react";
import Loader from "@/components/Loader/Loader";
import { useGetCategoriesQuery } from "@/redux/api/performerApi";
import { Flex, Radio, Modal } from "antd";
import Styles from "./Category.module.css";
import { useCreateCategoryMutation } from "@/redux/api/adminApi";

type ICategory = {
  id: number;
  category: string;
};

import CreateQuiz from "./CreateQuiz";
import { useRouter } from "next/navigation";

const Categories = () => {
  const router = useRouter();
  const { data, isLoading } = useGetCategoriesQuery(undefined);
  const [createCategory] = useCreateCategoryMutation();
  //create category states
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [categoryCreating, setCategoryCreating] = useState(false);
  const [category, setCategory] = useState("");

  const handleCreateCategory = async () => {
    setCategoryCreating(true);
    const res = await createCategory({ category }).unwrap();
    if (res.success) {
      setCategoryModalOpen(false);
      setCategoryCreating(false);
    } else {
      setCategoryCreating(false);
      setCategory("");
      Modal.error({
        content: "Category already exist",
      });
    }
  };

  return (
    <div>
      <h1>Categories</h1>
      <div className={Styles.category_container}>
        {isLoading ? (
          <Loader />
        ) : (
          <Flex gap={20} wrap="wrap">
            {data?.result.map((category: ICategory) => (
              <div key={category.id} className={Styles.category_item}>
                <h3 style={{ padding: "5px 0" }}>{category.category}</h3>
                <button
                  className={Styles.add_question_btn}
                  onClick={() => {
                    router.push(`create-question/${category.id}`);
                  }}
                >
                  Add a Quiz
                </button>
              </div>
            ))}
          </Flex>
        )}
      </div>
      <button
        className={Styles.create_category_btn}
        onClick={() => setCategoryModalOpen(true)}
      >
        Create a Category
      </button>
      {/* create category modal */}
      <Modal
        title={<h4>Create a category</h4>}
        open={categoryModalOpen}
        onOk={handleCreateCategory}
        okText={"Create"}
        confirmLoading={categoryCreating}
        okButtonProps={{ disabled: !category && true }}
        onCancel={() => {
          setCategory("");
          setCategoryModalOpen(false);
        }}
      >
        <div>
          <input
            style={{ padding: "5px", margin: "15px 0", width: "100%" }}
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            type="text"
            placeholder="Category name"
          />
        </div>
      </Modal>
    </div>
  );
};

export default Categories;
