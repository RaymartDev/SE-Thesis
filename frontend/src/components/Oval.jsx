/* eslint-disable react/prop-types */
const Oval = ({name, modalMode}) => {
    return (
        <button className={modalMode ? "bg-black bg-opacity-50 text-black font-bold px-3 py-1 rounded-full mr-3 text-sm" :"text-[#123E59] bg-[#efeff0] font-bold px-3 py-1 rounded-full mr-3 text-sm"}>
            {name}
        </button>
    )
}

export default Oval