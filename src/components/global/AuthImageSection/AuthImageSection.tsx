import { AuthImagePropType } from "./authImage.types";

const AuthImageSection = ({ image, altText }: AuthImagePropType) => {
  return (
    <div className="md:block hidden flex-1 overflow-hidden relative z-[1]">
      <div className="absolute left-0 h-full w-full z-[-1] bg-[#0f172a]">
        <img
          src="https://images.unsplash.com/photo-1514227973936-5bebfc160b59?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt={altText}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default AuthImageSection;
