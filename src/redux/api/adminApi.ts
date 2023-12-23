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
  }),
});

export const { useCreateCategoryMutation } = adminApi;
