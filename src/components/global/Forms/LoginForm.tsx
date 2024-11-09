import { Formik } from "formik";
import MuiInput from "../../ui/Input/MuiInput";
import { InputType, InputVariant } from "../../ui/Input/input.enums";
import Button from "../../ui/Button/Button";
import { ButtonType } from "../../ui/Button/button.types";
import { NavLink } from "react-router-dom";

type formValuesType = {
  email: string,
  password: string,
}

const initialValues = {
  email: '',
  password: '',
}

const LoginForm = () => {

  const onSubmit = (values: formValuesType) => {
    console.log('values are', values)
  }
  return (
    <div className="flex flex-col gap-6">
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => onSubmit(values)}
      >
        {({
          values,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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
            <NavLink
              to={`/forgot-password`}
              className="text-[#32736A] font-bold hover:underline"
            >
              Forgot Password?
            </NavLink>
            <Button
              text={"Sign In"}
              type={ButtonType.PRIMARY}
              onClick={() => ""}
            />
          </form>
        )}
      </Formik>
      <div className="text-[#9EA0A0]">
        <p>Don’t have an account?{" "}
          <NavLink
            to={`/register`}
            className="text-black hover:underline"
          >
            Sign Up
          </NavLink></p>
      </div>

    </div>
  )
}

export default LoginForm
