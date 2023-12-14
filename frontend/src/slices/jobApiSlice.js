import { apiSlice } from "./apiSlice";
const JOBS_URL = '/api/users/jobs'
const PROPOSAL_URL = '/api/users/proposal'
const REPORT_URL = '/api/users/report'

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
        saveJob: builder.mutation({
            query: (body) => ({
                url: `${JOBS_URL}/save`,
                method: 'POST',
                body: body
            })
        }),
        completeJob: builder.query({
            query: () => ({
                url: `${JOBS_URL}/own/complete`,
                method: 'GET'
            })
        }),
        listSave: builder.query({
            query: () => ({
                url: `${JOBS_URL}/own/save`,
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
        updateJob: builder.mutation({
            query: (data) => ({
                url: `${JOBS_URL}/update`,
                method: 'PUT',
                body: data
            })
        }),
        addProposal: builder.mutation({
            query: (data) => ({
                url: `${PROPOSAL_URL}`,
                method: 'POST',
                body: data
            })
        }),
        getProposal: builder.query({
            query: (params) => ({
                url: `${PROPOSAL_URL}/${params}`,
                method: 'GET',
            })
        }),
        deleteProposal: builder.mutation({
            query: (data) => ({
                url: `${PROPOSAL_URL}`,
                method: 'DELETE',
                body: data
            })
        }),
        approveProposal: builder.mutation({
            query: (data) => ({
                url: `${PROPOSAL_URL}/approve`,
                method: 'POST',
                body: data
            })
        }),
        addReport: builder.mutation({
            query: (data) => ({
                url: `${REPORT_URL}`,
                method: 'POST',
                body: data
            })
        })
    })
})


export const { 
    useListJobsQuery, 
    useAvailableJobsQuery, 
    useCompleteJobQuery, 
    useCreateJobMutation, 
    useUpdateJobMutation ,
    useAddProposalMutation,
    useDeleteProposalMutation,
    useGetProposalQuery,
    useListSaveQuery,
    useSaveJobMutation,
    useApproveProposalMutation,
    useAddReportMutation
} = usersJobApiSlice;