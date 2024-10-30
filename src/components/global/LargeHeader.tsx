
const LargeHeader = ({text, color}:{text:string, color:string}) => {
  return (
    <div>
      <h1 className={`text-${color} font-bold text-5xl`}>{text}</h1>
    </div>
  )
}

export default LargeHeader
