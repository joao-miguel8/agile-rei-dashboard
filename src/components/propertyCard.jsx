import ArrowIcon from '@/assets/icons/Arrow'


function PropertyCard({cardData: {id, image, name, status, tags, address}, isSelected, onCardDelete }) {

const handleRemoveProperty = () => {
  onCardDelete(id)
}

const renderStatusColors =
  { renderVacant: status === "Vacant" ? "bg-gray-200 text-gray-500"   : "",
  renderRented: status === "Rented" ? "bg-green-200 text-green-600"  : "",
  renderInRepair: status === "In Repair" ? "bg-orange-200 text-orange-600"  : ""
  }


  return (
    <div onClick={handleRemoveProperty}  className={`flex flex-col justify-between overflow-hidden my-4 md:min-w-[340px] min-w-[250px] w-96 rounded-lg bg-neutral-50 border-2 shadow-lg ${isSelected ? "border-blue-400" : "border-transparent"}`} >
      <div className="w-full gap-3 " >
        <img className="w-full" src={image} alt=""/>
      </div>
      {/* Bottom Content */}
        <div className="flex w-full flex-col self-end">
            <div className="flex justify-between align-top px-2 mt-2 ">
              <div className='text-14 font-medium' >
              <h4 className="text-20 self-center word-spacing:90px" >{name}</h4>
              </div>
              <span className={`h-fit py-1 px-2 rounded-full text-12  ${renderStatusColors.renderVacant}  ${renderStatusColors.renderInRepair} ${renderStatusColors.renderRented} `}>{status}</span>
            </div>
                <div className=" flex gap-5 py-2 overflow-auto text-gray-600 px-2" >
                { tags.length > 1 ? tags.map((tag, index) => {
                  return (<div className='flex items-center gap-4' >
                  <p className='text-12 whitespace-nowrap capitalize' key={tag} >{tag}</p>
                  {index !== tags.length -1 && ( <div className='w-1 h-1 rounded-full bg-neutral-300' ></div>)} </div>)}) : <p className="text-12 capitalize" key={tags} >{tags}</p>}
                </div>
                <div className='flex flex-col justify-center py-1 px-2 bg-zinc-100' >
                    <h6 className="uppercase text-12 text-zinc-500">Property Address:</h6>
                    <p className="text-14 text-zinc-500" >{address}</p>
                </div>
                <div className="flex justify-between items-center px-2 py-1 mt-4 border-t-2 ">
                    <h6 className="text-14 text-zinc-500" >Detail Property</h6>
                    <span className="text-12 font-medium" >
                      <ArrowIcon/>
                    </span>
                </div>
        </div>
    </div>
  )
}
export default PropertyCard