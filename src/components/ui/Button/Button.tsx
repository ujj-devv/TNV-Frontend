import { ButtonPropTypes, ButtonType } from "./button.types"

const Button = ({ text, type, icon }: ButtonPropTypes) => {
    const primaryStyle = 'text-white border-white border-2 rounded-lg py-2 px-4 text-md text-gray-200 bg-[#32736A]'
    const secondaryStyle = 'text-[#32736A] font-semibold text-lg'

    const buttonStyles = `${type === ButtonType.PRIMARY ? primaryStyle : secondaryStyle} flex items-center justify-between gap-3`
    return (
        <button className={buttonStyles}>
            {text}
            {icon}
        </button>
    )
}

export default Button
