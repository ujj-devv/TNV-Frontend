import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const leiRecordsApi = createApi({
  reducerPath: "leiRecordsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_BASE_URL, // Base URL from environment
  }),
  endpoints: (builder) => ({
    getLeiRecords: builder.query({
      query: () => ({
        url: "",
        // method: "GET",
      }),
    }),
  }),
});

export const { useGetLeiRecordsQuery } = leiRecordsApi;
