import { ButtonTypes } from "./button.types"

const Button = ({ text }: ButtonTypes) => {

    const buttonStyles = `text-white border-white border-4 text-md text-gray-200`
    return (
        <button className={buttonStyles}>
            {text}
        </button>
    )
}

export default Button
