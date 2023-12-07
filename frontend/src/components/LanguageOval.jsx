/* eslint-disable react/prop-types */
const LanguageOval = (props) => {
    return (
        <button className="text-[#123E59] bg-[#efeff0] font-bold px-3 py-1 rounded-full mr-1 mt-1 text-xs">
            {props.language}
        </button>
    )
}

export default LanguageOval