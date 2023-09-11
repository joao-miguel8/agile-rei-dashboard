import "../App.css";
import { db } from "../firebase-server/firebase";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { setProperties } from "../redux/reducers/properties";
import { useDispatch, useSelector } from "react-redux";
import PropertyCard from "@/components/PropertyCard";
import PropertyCardFormDialog from "@/components/PropertyCardFormDialog";
import MobileHeader from "./MobileHeader";

function Dashboard() {
	const dispatch = useDispatch();

	const { properties } = useSelector(state => state.propertiesList);
	console.log(properties);
	const [deletedProperties, setDeletedProperties] = useState([]);
	const [showCreatePropertyDialog, setShowCreatePropertyDialog] = useState(false);

	const getPropertyData = async () => {
		try {
			const arrayOfProperties = [];
			const propertiesRef = await getDocs(collection(db, "properties"));
			propertiesRef.forEach(doc => {
				const dataFetch = doc.data();
				arrayOfProperties.push(dataFetch);
			});
			dispatch(setProperties(arrayOfProperties));
		} catch (error) {
			console.error(error);
		}
		console.log("rerenderEffect01");
	};

	useEffect(() => {
		getPropertyData();
	}, []);

	function handleShowPropertyDialog() {
		setShowCreatePropertyDialog(!showCreatePropertyDialog);
	}

	// function handleCardSelection(id) {
	//   if (deletedProperties.includes(id)) {
	//     setDeletedProperties((previousSelected) => previousSelected.filter((selectedID) => selectedID !== id ))
	//   } else {
	//     setDeletedProperties((previousSelected) => [...previousSelected, id])
	//   }
	// }

	// const handleRemoveProperty = (id) => {
	// return handleCardSelection(id)
	// }

	//  const deleteSelectedProperties = async () => {
	//   const newProperties = properties.filter(property => {
	//     return !deletedProperties.includes(property.id)
	//   })
	//  const propertiesToDelete = await deleteDoc()
	//   setDeletedProperties(properties)
	// }

	return (
		<div>
			<MobileHeader />
			<section>
				<h3 className="mt-20 py-2 pl-4 text-22 font-medium">My Properties</h3>
				<div className="relative px-2 flex gap-4">
					<button onClick={handleShowPropertyDialog} className=" flex items-center h-10 text-12 font-bold gap-2 pr-2 text-neutral-50 bg-green-500">
						<div className="flex items-center h-full text-neutral-50 bg-neutral-900 px-2 ">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
							</svg>
						</div>
						Add Property
					</button>
					{showCreatePropertyDialog ? createPortal(<PropertyCardFormDialog properties={properties} setProperties={setProperties} closeDialog={handleShowPropertyDialog} />, document.getElementById("modal-portal")) : null}
					<button onClick={() => deleteSelectedProperties()} {...(properties.length < 1 ? "disabled" : null)} className={`flex items-center h-10 text-12 font-bold gap-2 pr-2 text-neutral-50 bg-red-500 ${properties.length < 1 ? "opacity-50" : null}`}>
						<div className="flex items-center h-full text-red-400 bg-neutral-900 px-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
								/>
							</svg>
						</div>
						Delete Property
					</button>
				</div>
				<div className="w-full pl-2 mt-8 flex gap-4 overflow-x-auto scrollbar-hide">
					{properties ? properties.map(property => <PropertyCard key={property.id} propertyData={property} onCardDelete={() => handleRemoveProperty(property.id)} isSelected={deletedProperties.includes(property.id)} />) : <p>Loading properties...</p>}
				</div>
			</section>
		</div>
	);
}

export default Dashboard;
