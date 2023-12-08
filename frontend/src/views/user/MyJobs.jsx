/* eslint-disable react/prop-types */

import JobList from "../../components/JobList";
import { useEffect } from "react";
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from "react-redux";
import { setMyJob } from '../../slices/jobSlice'
import { useListJobsQuery } from "../../slices/jobApiSlice";
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
    
    if (myJobs && myJobs.length > 0 && query) {
        return (
            <>
                {myJobs
                    .filter((job) => job.title.toLowerCase().includes(query.toLowerCase()) || job.description.toLowerCase().includes(query.toLowerCase()))
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

    if (myJobs && myJobs.length > 0) {
        return (
            <>
                {myJobs.map((job) => (
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
                description="You have no request available yet"
                rate={0}
                expertise={''}
            />
        );
    }
}

export default MyJobs