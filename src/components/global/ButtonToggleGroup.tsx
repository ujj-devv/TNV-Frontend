import { Dispatch, SetStateAction } from "react";
import { ButtonGroupType } from "../pages/Home/PricingSection";
import Button from "../ui/Button/Button";

type ButtonGroupPropType = {
    setActiveButton: Dispatch<SetStateAction<number>>; 
    activeButton:number, 
    buttons:ButtonGroupType[]
}

const ButtonGroup = ({setActiveButton, activeButton, buttons}:ButtonGroupPropType) => {
  

  const handleButtonClick = (id:number) => {
    setActiveButton(id); // Set the clicked button as active
  };

  return (
    <div className="flex gap-4">
      {buttons.map(({ id, text, type }:ButtonGroupType) => (
        <Button
          key={id}
          text={text}
          type={type}
          isActive={activeButton === id} 
          onClick={() => handleButtonClick(id)} 
        />
      ))}
    </div>
  );
};

export default ButtonGroup;
