/* eslint-disable react/prop-types */

import JobList from "../../components/JobList";
import { useEffect } from "react";
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from "react-redux";
import { setJob } from '../../slices/jobSlice'
import { useAvailableJobsQuery } from "../../slices/jobApiSlice";
import Spinner from "../../components/Spinner";

const AvailableJobs = ({query}) => {
    const { data,error, isLoading } = useAvailableJobsQuery();

    const dispatch = useDispatch()
    const {jobsInfo } = useSelector((state) => state.jobs)
    useEffect(() => {
        dispatch(setJob(data))
    }, [dispatch,data])

    useEffect(() => {
        if(error) {
            if(error.data) {
                toast.error(error.data.message, {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            }
        }
    }, [error])

    if(isLoading) {
        return (
            <Spinner/>
        )
    }

    if (jobsInfo && jobsInfo.length > 0 && query) {
        return (
            <>
                {jobsInfo
                    .filter((job) => job.status === 1 && (job.title.toLowerCase().includes(query.toLowerCase())))
                    .map((job) =>  (
                        <JobList
                            key={job._id}
                            title={job.title}
                            salary={job.estimatedBudget}
                            description={job.description}
                            rate={job.rate}
                            expertise={job.expertise}
                            id={job._id}
                        />
                    ))
                }
            </>
        )
    }

    if (jobsInfo && jobsInfo.length > 0 && !query) {
        return (
            <>
                {jobsInfo
                    .filter((job) => job.status === 1)
                    .map((job) => (
                    <JobList
                        key={job._id}
                        title={job.title}
                        salary={job.estimatedBudget}
                        description={job.description}
                        rate={job.rate}
                        expertise={job.expertise}
                        id={job._id}
                    />
                ))}
            </>
        );
    } else {
        return (
            <JobList
                key={1}
                title="No data Available"
                salary={-1}
                description="There are no data available yet"
                rate={0}
                expertise={""}
                id=""
            />
        );
    }
}

export default AvailableJobs