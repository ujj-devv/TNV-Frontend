const ForwardArrowIcon = ({fillColor = "#32736A"}:{fillColor?:string}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="16"
            fill="none"
            viewBox="0 0 18 16"
        >
            <path
                fill={fillColor}
                d="m11.03.72 6.75 6.75a.75.75 0 0 1 0 1.06l-6.75 6.75a.75.75 0 1 1-1.06-1.06l5.47-5.47H.75a.75.75 0 0 1 0-1.5h14.69L9.97 1.78A.75.75 0 0 1 11.03.72"
            ></path>
        </svg>
    )
}

export default ForwardArrowIcon
