import { navlinks } from "../../util/navlinks.data"
import Button from "../ui/Button/Button"

const NavBar = () => {
  return (
    <div className="flex bg-[#32736A]">
      {
        navlinks.map(({name, id}) => (
            <div className="text-white" key={id}>{name}</div>
        ))
      }
      <Button text="Sign in"/>
      <Button text="Sign up"/>
    </div>
  )
}

export default NavBar
