import { footerData, socialLinks } from "../../util/data/footer.data"

const Footer = () => {
  return (
    <div className="bg-[#2C2B40] p-32 flex justify-between ">
      <div className=" flex flex-col gap-6">
      {
        footerData.map(({ id, content }) => (
          <h5 className="text-[#E6E8F3] font-normal text-sm" key={id}>{content}</h5>
        ))}
    </div>
    <div className="self-end flex gap-8">
    {
      socialLinks.map(({ id, icon: Icon }) => (
        <div key={id} className="bg-[#F4F5FA] rounded-[4px] flex justify-center items-center w-[40px] h-[40px]" >
          <Icon />
        </div>
      ))
    }
      
    </div>
    </div>
  )
}

export default Footer
