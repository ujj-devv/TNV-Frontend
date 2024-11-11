import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

const NavigationLink = ({children}:{children:ReactNode}) => {
    return (
        <>
            <NavLink
                to="/login"
                className="flex justify-center items-center gap-2 font-semibold text-base text-[#9EA0A0] hover:text-[#32736A] hover:scale-105 transition-all duration-200"
                >
                {children}
            </NavLink>
        </>
    )
}

export default NavigationLink
