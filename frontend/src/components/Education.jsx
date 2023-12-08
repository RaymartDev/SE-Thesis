/* eslint-disable react/prop-types */

const Education = (props) => {
    return (
        <>
        <div className="flex justify-between items-center mt-2">
            <div>
                <p className="font-bold text-sm">{props.school}</p>
                <p className=" text-sm">{props.course} ({props.year})</p>
            </div>
        </div>
        </>
    )
}

export default Education