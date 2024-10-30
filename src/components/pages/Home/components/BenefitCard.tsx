import GlobeIcon from "../../../../assets/svg/GlobeIcon"

const BenefitCard = ({name, description}:{name:string,description:string}) => {
  return (
    <div>
      <div className="flex gap-2 mb-2">
        <GlobeIcon/>
        <h4 className="font-bold text-lg">{name}</h4>
      </div>
      <p className="text-[#9EA0A0] font-normal text-base">{description}</p>
    </div>
  )
}

export default BenefitCard
