import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    tagTypes: ['Products'],
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_SERVER_URL }),
    endpoints: (build) => ({
        getDashboardData: build.query({
            query: (arg) => {
                const { page} = arg;
                return {
                    url: `/api/products?populate=thumbnail,categories&pagination[page]=${page}&pagination[pageSize]=7`,
                };
            },
            providesTags: ['Products'],
        }),
    }),
});

export const { useGetDashboardDataQuery } = apiSlice;
