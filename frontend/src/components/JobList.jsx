/* eslint-disable react/prop-types */
import Oval from './Oval'

const JobList = (props) => {
    return ( 
        <>
            <div className="px-6 py-8">
                <div>
                    <h1 className="cursor-pointer text-2xl overflow-hidden max-h-8 text-[#123E59]">{props.title}</h1>
                    {props.salary >= 0 && <p className="font-bold mt-3">Estimated. Budget ₱{props.salary}</p>}
                    {props.rate > 0 && <p className="font-bold mt-3">Hourly Rate ₱{props.rate}</p>}
                    <div className="overflow-hidden max-h-28">
                        <p className="mt-3">{props.description}</p>
                    </div>
                    
                </div>
                <div className="mt-3">
                    <Oval key={1} name={props.expertise} modalMode={props.modalMode}/>
                </div>
            </div>
        </>
    );
}

export default JobList;