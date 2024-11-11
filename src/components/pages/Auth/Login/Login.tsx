import AuthHeader from "../../../global/AuthHeader/AuthHeader";
import AuthImageSection from "../../../global/AuthImageSection/AuthImageSection";
import LoginForm from "../../../global/Forms/LoginForm";
import RegisterImage from "../../../../assets/png/authImage.jpg";

const Login = () => {
  return (
    <div>
      <div
        className="h-screen overflow-y-auto flex flex-wrap w-full"
        style={{ height: "calc(var(--vh, 1vh) * 100)" }}
      >
        <AuthImageSection image={RegisterImage} altText="Login Image" />

        {/* Content Section */}
        <div className="flex flex-col justify-center gap-16 items-center w-full md:w-1/2 px-6 md:px-12 lg:px-24">
          <AuthHeader
            authHeading={"Sign In"}
            authDescription={"Sign in to proceed"}
          />
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
