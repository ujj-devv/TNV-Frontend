import LargeHeader from "../components/global/LargeHeader";
import Button from "../components/ui/Button/Button";
import { InputType, InputVariant } from "../components/ui/Input/input.enums";
import MuiInput from "../components/ui/Input/MuiInput";
import { ButtonType } from "../components/ui/Button/button.types";
import { IoMdArrowBack } from "react-icons/io";
import NavigationLink from "../components/ui/NavigationLink/NavigationLink";
import { FaFingerprint } from "react-icons/fa";

const ForgotPassword = () => {
    return (
        <div className="flex items-center justify-center min-h-screen px-6">
            <div className="flex flex-col gap-8 items-center w-full max-w-lg">
                <FaFingerprint className="text-4xl" />
                <div className="flex flex-col gap-2 justify-center items-center">

                    <LargeHeader text={"Forgot Password?"} className="text-xl text-center" />
                    <p className="text-base text-[#9EA0A0]  text-center">
                        No worries, we'll send you reset instructions.
                    </p>
                </div>
                <div className="w-full space-y-4">
                    <MuiInput
                        id={"email"}
                        label={"Email"}
                        variant={InputVariant.OUTLINED}
                        disabled={false}
                        value={""}
                        type={InputType.TEXT}
                        name={"email"}
                        onChange={() => ""}
                        placeholder={"Enter your email"}
                        required
                    />
                    <Button
                        text={"Reset Password"}
                        type={ButtonType.PRIMARY}
                        onClick={() => ""}
                        customStyles="w-full"
                    />
                    <NavigationLink>
                        <IoMdArrowBack />
                        Back to Login
                    </NavigationLink>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
