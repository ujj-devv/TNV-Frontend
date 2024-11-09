import { AuthImagePropType } from "./authImage.types"


const AuthImageSection = ({image, altText}:AuthImagePropType) => {
  return (
    <div className="md:block hidden flex-1 overflow-hidden relative z-[1]">
          <div className="absolute left-0 h-full w-full z-[-1] bg-[#0f172a]">
            <img
              src={image}
              alt={altText}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
  )
}

export default AuthImageSection
