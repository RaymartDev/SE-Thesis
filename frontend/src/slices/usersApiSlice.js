import { apiSlice } from "./apiSlice";
const USERS_URL = '/api/users'

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/login`,
                method: 'POST',
                body: data
            })
        }),
        logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: 'POST',
            })
        }),
        register: builder.mutation({
          query: (data) => ({
            url: `${USERS_URL}/register`,
            method: 'POST',
            body: data,
          })
        }),
        updateUser: builder.mutation({
            query: (data) => ({
              url: `${USERS_URL}/profile`,
              method: 'PUT',
              body: data,
            }),
        }),
        getProfile: builder.query({
            query: (params) => ({
                url: `${USERS_URL}/other/${params.id}`,
                method: 'GET',
            })
        })
    })
})

export const { useLoginMutation, useLogoutMutation, useRegisterMutation, useUpdateUserMutation, useGetProfileQuery } = usersApiSlice