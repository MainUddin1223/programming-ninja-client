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
    giveTest: build.mutation({
      query: (id) => ({
        url: `${performerUrl}/request-test/${id}`,
        method: "POST",
      }),
    }),
  }),
});

export const { useGetCategoriesQuery, useGiveTestMutation } = authApi;
