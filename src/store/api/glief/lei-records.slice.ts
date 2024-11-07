import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LeiRecord } from "../types/LeiRecords.types";

export const leiRecordsApi = createApi({
  reducerPath: "leiRecordsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_BASE_URL, // Base URL from environment
  }),
  endpoints: (builder) => ({
    getLeiRecords: builder.query<LeiRecord[], void>({ // Type the query return as LeiRecord[]
      query: () => ({
        url: "", // Add the appropriate URL if needed
      }),
    }),
  }),
});

export const { useGetLeiRecordsQuery } = leiRecordsApi;
