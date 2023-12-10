/* eslint-disable react/prop-types */

import JobList from "../../components/JobList";
import { useEffect } from "react";
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from "react-redux";
import { useListJobsQuery } from "../../slices/jobApiSlice";
import { setMyJob } from "../../slices/jobSlice";
import Spinner from "../../components/Spinner";

const MyJobs = ({query}) => {
    const { data,error, isLoading } = useListJobsQuery();

    const dispatch = useDispatch()
    const { myJobs } = useSelector((state) => state.jobs)
    useEffect(() => {
        dispatch(setMyJob(data))
    }, [dispatch,data])

    useEffect(() => {
        if(error) {
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
    }, [error])

    if(isLoading) {
        return (
            <Spinner/>
        )
    }

    if(myJobs && myJobs.filter((job) => job.status === 2).length > 0 && query) {
        return (
            <>
                {myJobs
                    .filter((job) => job.status === 2 && (job.title.toLowerCase().includes(query.toLowerCase())))
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

    if (myJobs && myJobs.filter((job) => job.status === 2).length > 0 && !query) {
        return (
            <>
                {myJobs
                    .filter((job) => job.status === 2)
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

export default MyJobs