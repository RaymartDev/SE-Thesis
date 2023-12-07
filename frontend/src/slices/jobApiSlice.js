import { apiSlice } from "./apiSlice";
const JOBS_URL = '/api/users/jobs'

export const usersJobApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        listJobs: builder.query({
            query: () => ({
                url: `${JOBS_URL}/own/all`,
                method: 'GET',
            })
        }),
        availableJobs: builder.query({
            query: () => ({
                url: `${JOBS_URL}/all`,
                method: 'GET',
            })
        }),
        saveJob: builder.query({
            query: () => ({
                url: `${JOBS_URL}/own/save`,
                method: 'GET'
            })
        }),
        completeJob: builder.query({
            query: () => ({
                url: `${JOBS_URL}/own/complete`,
                method: 'GET'
            })
        }),
        createJob: builder.mutation({
            query: (data) => ({
                url: `${JOBS_URL}/create`,
                method: 'POST',
                body: data  
            })
        }),
        searchJob: builder.query({
            query: (query) => ({
                url: `${JOBS_URL}/jobs?query=${query}`
            })
        })
    })
})


export const { useListJobsQuery, useAvailableJobsQuery, useSaveJobQuery, useCompleteJobQuery, useCreateJobMutation, useSearchJobQuery } = usersJobApiSlice;