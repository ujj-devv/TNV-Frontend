import { useParams } from "react-router-dom";
import { AuthType } from "./auth.enum"
import Login from "../../components/pages/Auth/Login/Login";
import Register from "../../components/pages/Auth/Register/Register";

const Auth = () => {
  const { authType } = useParams();
  return (
    <div>
      {
        authType === AuthType.LOGIN ? <Login />
        : authType === AuthType.REGISTER && <Register/>

      }
    </div>
  )
}

export default Auth
