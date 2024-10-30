import { navlinks } from "../../util/data/navlinks.data"
import Button from "../ui/Button/Button"

const NavBar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-[#32736A]">
      <div className="flex gap-4 ">
        {
          navlinks.map(({ name, id }) => (
            <div className="text-white font-medium text-base" key={id}>{name}</div>
          ))
        }
      </div>
      <div className="flex gap-4">
        <Button text="Sign in" />
        <Button text="Sign up" />
      </div>
    </div>
  )
}

export default NavBar
