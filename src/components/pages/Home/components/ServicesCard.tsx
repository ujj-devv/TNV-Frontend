import ForwardArrowIcon from "../../../../assets/svg/ForwardArrowIcon";
import Button from "../../../ui/Button/Button"
import { ButtonType } from "../../../ui/Button/button.types";
interface ServicesCardProps {
    action: string;
    name: string;
    description: string;
}

const ServicesCard = ({name, description, action}:ServicesCardProps) => {
  return (
    <div className="border-b border-[#B2DDD3] pb-16">
      <h4 className="text-[#222222] text-2xl font-semibold mb-2">{name}</h4>
      <p className="text-[#9EA0A0] text-lg font-normal mb-4">{description}</p>
      <Button onClick={() => ""} type={ButtonType.SECONDARY} text={action} icon={<ForwardArrowIcon/>} customStyles="font-semibold text-lg"/>
    </div>
  )
}

export default ServicesCard
