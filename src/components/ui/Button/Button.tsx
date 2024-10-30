import { ButtonTypes } from "./button.types"

const Button = ({ text }: ButtonTypes) => {

    const buttonStyles = `text-white border-white border-2 rounded-lg py-2 px-4 text-md text-gray-200 bg-[#32736A]`
    return (
        <button className={buttonStyles}>
            {text}
        </button>
    )
}

export default Button
