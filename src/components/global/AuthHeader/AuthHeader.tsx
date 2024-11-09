import { AuthHeaderPropType } from "./auth-header.types"

const AuthHeader = ({ authHeading, authDescription }: AuthHeaderPropType) => {
    return (
        <div className="flex flex-col gap-2 text-center">
            <h2 className="text-[#32736A] font-bold text-3xl">{authHeading}</h2>
            <p className="text-[#9EA0A0]">{authDescription}</p>
        </div>
    )
}

export default AuthHeader
