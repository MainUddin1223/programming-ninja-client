import { baseApi } from "./baseApi";

const performerUrl = "/performer";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query({
      query: () => ({
        url: `${performerUrl}/categories`,
        method: "GET",
      }),
      providesTags: ["performer", "admin"],
    }),
    getTestById: build.query({
      query: (id) => ({
        url: `${performerUrl}/my-tests/${id}`,
        method: "GET",
      }),
      providesTags: ["performer"],
    }),
    getMyTests: build.query({
      query: () => ({
        url: `${performerUrl}/my-tests`,
        method: "GET",
      }),
      providesTags: ["performer"],
    }),
    giveTest: build.mutation({
      query: (id) => ({
        url: `${performerUrl}/request-test/${id}`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGiveTestMutation,
  useGetTestByIdQuery,
  useGetMyTestsQuery,
} = authApi;
