import { NavLink } from "react-router-dom"

const TermsRedirectNode = () => {
    return (
        <div className="text-[#9EA0A0] text-base">
            I accept your{" "}
            <NavLink
                to={`terms-policy`}
                className="text-blue-600 hover:underline" 
            >
                Terms and Conditions and Privacy Policy
            </NavLink>

        </div>
    )
}

export default TermsRedirectNode
