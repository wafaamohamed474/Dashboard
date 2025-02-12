 
import campsMap from "../../../assets/103149.jpg"

const CampsMap = () => {
  return (
    <>
        <h1 className="mb-5">خريطة المخيمات</h1>
        <div className="rounded-xl shadow-md overflow-hidden h-[80%]">
            <img src={campsMap} className="w-full h-full"/>
        </div>
      
    </>
  )
}

export default CampsMap
