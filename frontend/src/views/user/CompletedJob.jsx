/* eslint-disable react/prop-types */

import JobList from "../../components/JobList";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCompleteJob } from '../../slices/jobSlice'
import { useCompleteJobQuery } from "../../slices/jobApiSlice";
import Spinner from "../../components/Spinner";

const CompletedJob = ({query}) => {
    const { data, isLoading } = useCompleteJobQuery();

    const dispatch = useDispatch()
    const { completedJobs } = useSelector((state) => state.jobs)
    useEffect(() => {
        dispatch(setCompleteJob(data))
    }, [dispatch,data])

    if(isLoading) {
        return (
            <Spinner/>
        )
    }

    if (completedJobs && completedJobs.length > 0 && query) {
        return (
            <>
                {completedJobs
                    .filter((job) => job.title.toLowerCase().includes(query.toLowerCase()))
                    .map((job) =>  (
                        <JobList
                            key={job._id}
                            title={job.title}
                            salary={job.estimatedBudget}
                            description={job.description}
                            rate={job.rate}
                            expertise={job.expertise}
                            job={job._id}
                        />
                    ))
                }
            </>
        )
    }

    if (completedJobs && completedJobs.length > 0) {
        return (
            <>
                {completedJobs.map((job) => (
                    <JobList
                        key={job._id}
                        title={job.title}
                        salary={job.estimatedBudget}
                        description={job.description}
                        rate={job.rate}
                        expertise={job.expertise}
                        job={job._id}
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
                job=""
            />
        );
    }
}

export default CompletedJob