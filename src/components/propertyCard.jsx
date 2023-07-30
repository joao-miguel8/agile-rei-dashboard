import ArrowIcon from '@/assets/icons/Arrow'





function PropertyCard({cardData: {img, name, status, metaData, address }}) {
  
  return (
    <div className="min-w-[240px]	 my-4 rounded-lg bg-neutral-50 border-2 shadow-md" >
      <div className=" gap-3" >
          <img className="w-full" src={img} alt="image of property"/>
      </div>
      
      {/* Bottom Content */}
      <div className="px-2 pb-2 max-w-xs		 ">
          <div className="mt-2 flex justify-between" >
            <h4 className="font-bold self-center" >{name}</h4>
            <span className="h-fit py-1 px-2 rounded-full text-12 bg-lime-200 opacity-02">{status}</span>
          </div>
          <div className=" flex gap-5 mt-2 py-2 overflow-auto text-gray-600" >
           {metaData.map((data, index) => (
            <p key={index} className="whitespace-nowrap flex text-12">
              {data}
            </p>
           ))}
          </div>
          <div>
              <h6 className="text-12 font-bold">Property Address:</h6>
              <p className="text-12" >{address}</p>
          </div>
      <div className="mt-4 flex justify-between items-center">
        <h6 className="text-12 font-bold" >Detail Property</h6>
        <span className="text-12 font-medium" >
          <ArrowIcon/>
        </span>
      </div>
      </div>
    </div>
  )
}

export default PropertyCard