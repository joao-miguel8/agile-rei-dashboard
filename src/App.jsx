import './App.css'
import NavBar from "@/components/Navbar"
import PropertyCard from "@/components/PropertyCard"

function App () {

const imgURL = 'https://place-hold.it/300x200'
const cardData = {
  img: imgURL,
  name: " National Union Plazawea eawe aw ",
  status: ["vacant"],
  metaData: ["2 bed", "1 bath"],
  address: "123 street CI Abingdon"
}


console.log(cardData);
return (
  <>
    <NavBar/>
    <section className="my-4 bg-neutral-100" >
      <h3 className="text-22 font-bold" >My Properties</h3>
      <div className="mt-4 flex gap-4" >
        <button className="p-3 text-14 font-bold bg-green-400 rounded-lg " >Add Property</button>
        <button className="p-2 text-14 font-bold bg-red-400 rounded-lg" >Delete Property</button>
      </div>
      <div className='flex gap-4 overflow-auto'  >
    <PropertyCard cardData={cardData} />
    <PropertyCard cardData={cardData} />
    <PropertyCard cardData={cardData} />
    
      </div>
    </section>
  </>
  )
}



export default App
