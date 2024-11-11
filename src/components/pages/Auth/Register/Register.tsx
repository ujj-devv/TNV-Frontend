import RegisterForm from "../../../global/Forms/RegisterForm";
import RegisterImage from "../../../../assets/png/lei-flower.jpg";
import AuthImageSection from "../../../global/AuthImageSection/AuthImageSection";
import AuthHeader from "../../../global/AuthHeader/AuthHeader";

const Register = () => {
  return (
    <div>
      <div className="h-screen overflow-y-auto flex flex-wrap w-full" style={{ height: "calc(var(--vh, 1vh) * 100)" }}>
        <AuthImageSection image={RegisterImage} altText="Register Image" />

        {/* Content Section */}
        <div className="flex flex-col justify-center gap-16 items-center w-full md:w-1/2 px-6 md:px-12 lg:px-24">
          <AuthHeader
            authHeading={"Sign Up"}
            authDescription={"Create an account to proceed"}
          />
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
