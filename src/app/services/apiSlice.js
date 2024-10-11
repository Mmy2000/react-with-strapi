import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import CookieService from "../../pages/CookieService";
import { createStandaloneToast } from "@chakra-ui/react";

const { toast } = createStandaloneToast();

export const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: ["Products"],
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: true,
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SERVER_URL,
  }),
  endpoints: (build) => ({
    // for Products
    getDashboardData: build.query({
      query: (arg) => {
        const { page } = arg;
        return {
          url: `/api/products?populate=thumbnail,categories&pagination[page]=${page}&pagination[pageSize]=7`,
        };
      },
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.data.map(({ id }) => ({
                type: "Products",
                id,
              })),
              "Products",
            ]
          : ["Products"],
    }),

    // for Categories
    getDashboardCategoryData: build.query({
      query: () => {
        return {
          url: `/api/categories`,
        };
      },
      providesTags: (result, error, arg) =>
        result
          ? [
              ...result.data.map(({ id }) => ({
                type: "Products",
                id,
              })),
              "Products",
            ]
          : ["Products"],
    }),

    // DELETE for product
    deleteDashboardProduct: build.mutation({
      query(id) {
        return {
          url: `/api/products/${id}`,
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${CookieService.get("jwt")}`,
          },
        };
      },
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          // Success notification
          toast({
            title: "Product Deleted.",
            description: "The product was successfully deleted.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        } catch (error) {
          // Error notification
          toast({
            title: "Delete Failed.",
            description: "There was an issue deleting the product.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      },
      invalidatesTags: ["Products"],
    }),

    // Delete Category
    deleteDashboardCategory: build.mutation({
      query(id) {
        return {
          url: `/api/categories/${id}`,
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${CookieService.get("jwt")}`,
          },
        };
      },
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          // Success notification
          toast({
            title: "Category Deleted.",
            description: "The Category was successfully deleted.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        } catch (error) {
          // Error notification
          toast({
            title: "Delete Failed.",
            description: "There was an issue deleting the Category.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      },
      invalidatesTags: ["Products"],
    }),

    // UPDATE
    updateDashboardProduct: build.mutation({
      query: ({ id, body }) => ({
        url: `/api/products/${id}`,
        method: "PUT",
        headers: {
          Authorization: `Bearer ${CookieService.get("jwt")}`,
        },
        body,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          apiSlice.util.updateQueryData(
            "getDashboardData",
            id,
            (draft) => {
              Object.assign(draft, patch);
            }
          )
        );
        try {
          await queryFulfilled;
          // Success notification
          toast({
            title: "Product Updated.",
            description: "The product was successfully updated.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        } catch (error) {
          patchResult.undo();
          // Error notification
          toast({
            title: "Update Failed.",
            description: "There was an issue updating the product.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      },
      invalidatesTags: ["Products"],
    }),

    // ADD/CREATE
    createDashboardProduct: build.mutation({
      query: ({ body }) => ({
        url: `/api/products/`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${CookieService.get("jwt")}`,
        },
        body,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          // Success notification
          toast({
            title: "Product Created.",
            description: "The product was successfully created.",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        } catch (error) {
          // Error notification
          toast({
            title: "Creation Failed.",
            description: "There was an issue creating the product.",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      },
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetDashboardDataQuery,
  useDeleteDashboardProductMutation,
  useUpdateDashboardProductMutation,
  useCreateDashboardProductMutation,
  useGetDashboardCategoryDataQuery,
  useDeleteDashboardCategoryMutation,
} = apiSlice;
