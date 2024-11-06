import { ButtonPropTypes, ButtonType } from "./button.types"

const Button = ({ text, type, icon, customStyles, isActive = true, onClick }: ButtonPropTypes) => {
    const primaryStyle = ` border-white border-2 rounded-lg py-2 px-4 text-md text-base font-semibold ${isActive ? 'bg-[#32736A] text-white': 'bg-[#F3FAF8] text-[#32736A]'}`
    const secondaryStyle = 'text-[#32736A] font-semibold text-lg'
    const whiteBgButtonStyle = "bg-white text-[#32736A] text-base font-normal rounded-lg py-2 px-4"

    const buttonStyles = `${type === ButtonType.PRIMARY ? primaryStyle : ButtonType.WHITE_BG ? whiteBgButtonStyle: secondaryStyle} flex items-center justify-center gap-3`
    return (
        <button className={`${customStyles} ${buttonStyles} `} onClick={onClick}>
            {text}
            {icon}
        </button>
    )
}

export default Button
