/* eslint-disable react/prop-types */
const TeamCard = (props) => {
    return (
        <div>
            <p className="font-bold">{props.name}</p>
            <p>{props.pos}</p>
            <img src={props.img} className="h-96 w-full"/>
        </div>
    )
}

export default TeamCard