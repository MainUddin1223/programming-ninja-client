import { baseApi } from "./baseApi";

const adminUrl = "/admin";

const adminApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createCategory: build.mutation({
      query: (category) => ({
        url: `${adminUrl}/add-category`,
        method: "POST",
        data: category,
      }),
      invalidatesTags: ["admin"],
    }),
    addQuiz: build.mutation({
      query: (data) => ({
        url: `${adminUrl}/add-quiz/${data.categoryId}`,
        method: "POST",
        data: data.quizData,
      }),
      invalidatesTags: ["admin"],
    }),
  }),
});

export const { useCreateCategoryMutation, useAddQuizMutation } = adminApi;
