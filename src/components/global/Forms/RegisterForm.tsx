import { Formik } from "formik";
import MuiInput from "../../ui/Input/MuiInput";
import { InputType, InputVariant } from "../../ui/Input/input.enums";
import Button from "../../ui/Button/Button";
import { ButtonType } from "../../ui/Button/button.types";
import MuiCheckbox from "../../ui/Checkbox/MuiCheckbox";
import TermsRedirectNode from "../../pages/Auth/Register/TermsRedirectNode";
import { NavLink } from "react-router-dom";

type formValuesType = {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    termsAndCondition: boolean
}

const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    termsAndCondition: false
}

const RegisterForm = () => {

    const onSubmit = (values: formValuesType) => {
        console.log('values are', values)
    }
    return (
        <div className="m-32 flex flex-col gap-6">
            <Formik
                initialValues={initialValues}
                // validate={values => {
                //     const errors = {};
                //     if (!values.email) {
                //         errors.email = 'Required';
                //     } else if (
                //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                //     ) {
                //         errors.email = 'Invalid email address';
                //     }
                //     return errors;
                // }}
                onSubmit={(values) => onSubmit(values)}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                        <MuiInput
                            id={"firstName"}
                            label={"First Name"}
                            variant={InputVariant.OUTLINED}
                            disabled={false}
                            value={values.firstName}
                            type={InputType.TEXT}
                            name={"firstName"}
                            onChange={handleChange}
                            placeholder={"Enter your First Name"}
                            required
                        />
                        <MuiInput
                            id={"lastName"}
                            label={"Last Name"}
                            variant={InputVariant.OUTLINED}
                            disabled={false}
                            value={values.lastName}
                            type={InputType.TEXT}
                            name={"lastName"}
                            onChange={handleChange}
                            placeholder={"Enter your Last Name"}
                            required
                        />
                        <MuiInput
                            id={"email"}
                            label={"Email"}
                            variant={InputVariant.OUTLINED}
                            disabled={false}
                            value={values.email}
                            type={InputType.TEXT}
                            name={"email"}
                            onChange={handleChange}
                            placeholder={"Enter your email"}
                            required
                        />
                        <MuiInput
                            id={"password"}
                            label={"Password"}
                            variant={InputVariant.OUTLINED}
                            disabled={false}
                            value={values.password}
                            type={InputType.PASSWORD}
                            name={"password"}
                            onChange={handleChange}
                            placeholder={"Enter your password"}
                            required
                        />
                        <MuiCheckbox
                            isChecked={values.termsAndCondition}
                            handleChange={handleChange}
                            label={<TermsRedirectNode />}
                            name="termsAndCondition"
                        />
                        <Button
                            text={"Create An Account"}
                            type={ButtonType.PRIMARY}
                            onClick={() => ""}
                        />

                    </form>
                )}
            </Formik>
            <div className="text-[#9EA0A0]">
                <p>Already have an account?{" "}
                    <NavLink
                        to={`/login`}
                        className="text-black hover:underline"
                    >
                        Sign In
                    </NavLink></p>
            </div>
        </div>
    )
}

export default RegisterForm
