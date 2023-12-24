"use client";

import QuizTest from "@/components/QuizTest/QuizTest";

type IDProps = {
  params: any;
};
const page = ({ params }: IDProps) => {
  return (
    <div>
      <QuizTest id={params.id} />
    </div>
  );
};

export default page;
