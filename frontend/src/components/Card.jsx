/* eslint-disable react/prop-types */
const Card = (props) => {
    return (
        <div>
            <h1 className="font-extrabold text-black text-xl w-2/5">{props.title}</h1>
            <p className="mt-8">{props.desc}</p>
            <img src={props.img} className="mt-7"/>
        </div>
    )
}

export default Card