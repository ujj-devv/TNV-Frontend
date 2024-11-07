import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LeiMain, LeiRecordParamsType } from "../types/LeiRecords.types";


export const leiRecordsApi = createApi({
  reducerPath: "leiRecordsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_BASE_URL, // Base URL from environment
  }),
  endpoints: (builder) => ({
    getLeiRecords: builder.query<LeiMain, LeiRecordParamsType>({
      query: ({searchTerm, countryCode}) => ({
        url: "",
        params: {
          "filter[entity.legalName]": searchTerm,
          "filter[entity.legalAddress.country]":countryCode
        },
      }),
    }),
  }),
});

export const { useGetLeiRecordsQuery } = leiRecordsApi;
