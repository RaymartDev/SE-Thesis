/* eslint-disable react/prop-types */
const TeamCard = (props) => {
    return (
        <div className="hover:scale-110 transition duration-1000 ">
            <p className="font-bold">{props.name}</p>
            <p>{props.pos}</p>
            <img src={props.img} className="object-cover h-96 w-full"/>
        </div>
    )
}

export default TeamCard