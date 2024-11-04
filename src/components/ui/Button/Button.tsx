import { ButtonPropTypes, ButtonType } from "./button.types"

const Button = ({ text, type, icon, customStyles, isActive = true, onClick }: ButtonPropTypes) => {
    const primaryStyle = `text-white border-white border-2 rounded-lg py-2 px-4 text-md text-gray-200 ${isActive ? 'bg-[#32736A]': 'bg-[#F3FAF8]'}`
    const secondaryStyle = 'text-[#32736A] font-semibold text-lg'

    const buttonStyles = `${type === ButtonType.PRIMARY ? primaryStyle : secondaryStyle} flex items-center justify-between gap-3`
    return (
        <button className={`${buttonStyles} ${customStyles}`} onClick={onClick}>
            {text}
            {icon}
        </button>
    )
}

export default Button
