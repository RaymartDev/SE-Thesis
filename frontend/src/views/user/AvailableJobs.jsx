/* eslint-disable react/prop-types */

import JobList from "../../components/JobList";
import { useEffect } from "react";
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from "react-redux";
import { setJob } from '../../slices/jobSlice'
import { useAvailableJobsQuery } from "../../slices/jobApiSlice";
import Spinner from "../../components/Spinner";

const AvailableJobs = ({query}) => {
    const { data, refetch, isLoading } = useAvailableJobsQuery();

    const dispatch = useDispatch()
    const { jobsInfo } = useSelector((state) => state.jobs)


    useEffect(() => {
        refetch()
        dispatch(setJob(data))
    }, [refetch,dispatch,data])

    if(isLoading) {
        return (
            <Spinner/>
        )
    }

    if (jobsInfo && jobsInfo.filter((job) => job.status === 1).length > 0 && query) {
        return (
            <> 
                {jobsInfo
                    .filter((job) => job.status === 1 && (job.title.toLowerCase().includes(query.toLowerCase()) || job.description.toLowerCase().includes(query.toLowerCase())))
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

    if (jobsInfo && jobsInfo.filter((job) => job.status === 1).length > 0 && !query) {
        return (
            <>
            <div>
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
            </div>
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
            />
        );
    }
}

export default AvailableJobs