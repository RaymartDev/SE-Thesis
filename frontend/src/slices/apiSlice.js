import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({ baseUrl: '' })

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['Job'],  
    refetchOnMountOrArgChange: 10,
    // eslint-disable-next-line no-unused-vars
    endpoints: (builder) => ({})
})