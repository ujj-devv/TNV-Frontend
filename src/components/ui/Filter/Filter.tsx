import Button from "../Button/Button"
import { ButtonType } from "../Button/button.types"
import { FiFilter } from "react-icons/fi"

const Filter = ({onClick}) => {
  return (
    <div >
      <Button text={"Add Filter"} type={ButtonType.PRIMARY} onClick={onClick} icon={<FiFilter />}/>
    </div>
  )
}

export default Filter
