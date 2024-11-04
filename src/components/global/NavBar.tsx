import { navlinks } from "../../util/data/navlinks.data"
import Button from "../ui/Button/Button"
import { ButtonType } from "../ui/Button/button.types"

const NavBar = () => {
  return (
    <div className="flex justify-between items-center py-4 bg-[#32736A] ">
      <div className="flex gap-8 mx-auto">
        {
          navlinks.map(({ name, id }) => (
            <div className="text-white font-medium text-base" key={id}>{name}</div>
          ))
        }
      </div>
      <div className="flex gap-4 mx-16">
        <Button type={ButtonType.PRIMARY} text="Sign in" />
        <Button type={ButtonType.PRIMARY} text="Sign up" />
      </div>
    </div>
  )
}

export default NavBar
