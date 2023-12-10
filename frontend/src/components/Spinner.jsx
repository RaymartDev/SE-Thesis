import Avatar from '../img/avatar-thinking.svg'

const Spinner = () => {
    return (
        <div className="z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
            <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
            <img src={Avatar}  className="rounded-full h-28 w-28" />
        </div>
    )
}

export default Spinner