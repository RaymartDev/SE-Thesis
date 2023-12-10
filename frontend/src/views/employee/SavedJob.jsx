/* eslint-disable react/prop-types */

import JobList from "../../components/JobList";
import { useEffect } from "react";
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from "react-redux";
import { setSaveJob } from '../../slices/jobSlice'
import { useListSaveQuery } from "../../slices/jobApiSlice";
import Spinner from "../../components/Spinner";

const SavedJob = ({query}) => {
    const { data,error, isLoading } = useListSaveQuery();

    const dispatch = useDispatch()
    const { savedJobs } = useSelector((state) => state.jobs)
    useEffect(() => {
        dispatch(setSaveJob(data))
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

    if(savedJobs && savedJobs.length > 0 && query) {
        return (
            <>
                {savedJobs
                    .filter((job) => job.title.toLowerCase().includes(query.toLowerCase()))
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

    if (savedJobs && savedJobs.length > 0 && !query) {
        return (
            <>
                {savedJobs.map((job) => (
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

export default SavedJob