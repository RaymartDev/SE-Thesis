/* eslint-disable react/prop-types */
const JobList = (props) => {
    return ( 
        <>
            <div className="px-6 py-8">
                <div>
                    <h1 className="text-2xl overflow-hidden max-h-8 text-[#123E59]">{props.title}</h1>
                    <p className="font-bold mt-3">Hourly - Est. Budget $ {props.salary}</p>
                    <div className="overflow-hidden max-h-28">
                        <p className="mt-3">{props.description}</p>
                    </div>
                    
                </div>
                <div className="mt-3">
                    <button className="text-[#123E59] bg-[#efeff0] font-bold px-3 py-1 rounded-full mr-3 text-sm">
                        UI/UX Design
                    </button>
                    <button className="text-[#123E59] bg-[#efeff0] font-bold px-3 py-1 rounded-full mr-3 text-sm">
                        Web Development
                    </button>
                    <button className="text-[#123E59] bg-[#efeff0] font-bold px-3 py-1 rounded-full mr-3 text-sm">
                        Graphics Design
                    </button>
                </div>
            </div>
        </>
    );
}

export default JobList;