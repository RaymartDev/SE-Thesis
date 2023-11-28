/* eslint-disable react/prop-types */
const Feature = (props) => {
    return (
        <div className="flex text-center justify-center items-center">
            <div className="h-10 w-1 bg-[#F6B51D] mr-5"></div>
            <p className="text-3xl font-extrabold">{props.name}</p>
        </div>
    )
}

export default Feature