import './App.css'
import { auth } from "./firebase-server/firebase";
import { onAuthStateChanged } from 'firebase/auth';
import AuthenticateUserPage from "@/components/AuthenticateUserPage"

import { createPortal } from "react-dom"
import { useEffect, useState } from "react"
import NavBar from "@/components/Navbar"
import PropertyCard from "@/components/PropertyCard"
import PropertyCardFormDialog from "@/components/PropertyCardFormDialog"

function App () {
  const [properties, setProperties] = useState([])
  const [deletedProperties, setDeletedProperties] = useState([])
  const [showCreatePropertyDialog, setShowCreatePropertyDialog] = useState(false)
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false)


// check if user is signed in or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUser(true);
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    }
  }, [])


  const signInEmailInput = (e) => {
  setUserEmail(e.target.value)
  }
  const signInPasswordInput = (e) => {
  setUserPassword(e.target.value)
  }


function handleShowPropertyDialog() {
setShowCreatePropertyDialog(!showCreatePropertyDialog)
}


function handleCardSelection(id) {
  if (deletedProperties.includes(id)) {
    setDeletedProperties((previousSelected) => previousSelected.filter((selectedID) => selectedID !== id ))
  } else {
    setDeletedProperties((previousSelected) => [...previousSelected, id])
  }
}


const handleRemoveProperty = (id) => {
return handleCardSelection(id)
}


const deleteSelectedProperties = () => {
  const newProperties = properties.filter(property => {
    return !deletedProperties.includes(property.id)
  })
  setProperties(newProperties)
  setDeletedProperties([])
}

return (
  <div>
    { !isLoggedIn ? <AuthenticateUserPage userEmailSignIn={signInEmailInput}  userPasswordSignIn={signInPasswordInput} userEmail={userEmail}   userPassword={userPassword} />
    :
  <>
    <NavBar />
    <section className="py-2 my-4 border-2 shadow-md bg-neutral-50 mx-2" >
      <h3 className="py-2 pl-4 text-22 font-medium border-b-2 border-neutral-300 ">My Properties</h3>
      <div className="relative px-2 mt-4 flex gap-4" >
        <button onClick={handleShowPropertyDialog} className=" flex items-center h-10 text-12 font-bold gap-2 pr-2 text-neutral-50 bg-green-500">
          <div className="flex items-center h-full text-neutral-50 bg-neutral-900 px-2" >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
          </div>
          Add Property</button>
        {showCreatePropertyDialog ? createPortal(<PropertyCardFormDialog properties={properties} setProperties={setProperties} closeDialog={handleShowPropertyDialog} />, document.getElementById('modal-portal')) : null }
         <button
           onClick={() => deleteSelectedProperties()}
           {...properties.length < 1 ? "disabled" : null }
           className={`flex items-center h-10 text-12 font-bold gap-2 pr-2 text-neutral-50 bg-red-500 ${properties.length < 1 ? "opacity-50" : null}`}
          >
            <div className="flex items-center h-full text-red-400 bg-neutral-900 px-2" >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
            </div>
            Delete Property
         </button>
      </div>
      <div className='flex gap-8 w-full overflow-x-auto pl-2 mt-8'>
    {properties.map((property) => {
      return (
        <PropertyCard
          id={property.id}
          key={property.id}
          cardData={property}
          onCardDelete={() => handleRemoveProperty(property.id)}
          isSelected={deletedProperties.includes(property.id)}
        />
      )
    })}
      </div>
    </section>
  </>}
  </div>
  )
}



export default App
