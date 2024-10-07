import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    tagTypes: ['Products'],
    refetchOnReconnect:true,
    refetchOnMountOrArgChange:true,
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
        deleteDashboardProduct:build.mutation({
            query(id){
                return {
                    url:`/api/products/${id}`,
                    method:'DELETE'
                }
            }
        })
    }),
});

export const { useGetDashboardDataQuery,useDeleteDashboardProductMutation } = apiSlice;
