import { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase-server/firebase";

function PropertyCardFormDialogModal({ properties, setProperties, closeDialog }) {
	// Storing our property Status Options
	const propertyStatus = {
		vacant: "Vacant",
		rented: "Rented",
		inRepair: "In Repair",
	};

	// property Form initial data
	const initialPropertyData = {
		image: "",
		name: "",
		status: "",
		tags: [],
		address: "",
	};

	// creating state for our form data object
	const [formData, setFormData] = useState({ ...initialPropertyData });

	// add property formdata into database
	const addPropertyCard = async e => {
		e.preventDefault();
		try {
			const propertiesRef = await addDoc(collection(db, "properties"), formData);
		} catch (error) {
			console.error(error);
		}
	};

	// formatting tags in form data from a string to array of strings
	function formatTagsInput(e) {
		const inputValue = e.target.value;
		const formattedValue = inputValue.split(",");
		setFormData({ ...formData, tags: formattedValue });
	}

	return (
		<>
			{
				<div>
					<div className="m-auto absolute z-50 top-0 bottom-0 left-0 right-0 h-fit min-w-[300px] max-w-[300px] p-4  border rounded-md bg-neutral-50 ">
						<div className="flex justify-between items-center ">
							<h2 className="text-20">Create Property</h2>
							<button onClick={closeDialog}>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
									<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</div>
						<form onSubmit={addPropertyCard} className="flex flex-col gap-2 mt-4">
							<label className="text-14 font-medium" htmlFor="">
								Property Image:
							</label>
							<input onChange={e => setFormData({ ...formData, image: e.target.files ? URL.createObjectURL(e.target.files[0]).slice(5) : null })} accept="image" type="file" id="property-img" name="property-img" className="text-14" />
							<label className="mt-3 text-14 font-medium">Property Name:</label>
							<input required maxLength={40} onChange={e => setFormData({ ...formData, name: e.target.value })} type="text" value={formData.name} className="border outline-0" />
							<label className="mt-3 text-14 font-medium">Property Status:</label>
							<select onChange={e => setFormData({ ...formData, status: e.target.value })} className={`border w-fit`} name={formData.status}>
								{Object.entries(propertyStatus).map(([key, value], index) => {
									return (
										<option value={value} key={key}>
											{value}
										</option>
									);
								})}
							</select>
							<label className="mt-3 text-14 font-medium">Property Unit Details:</label>
							<span className="text-12 text-gray-400">ex. 2 bedroom, 2 bathroom, pool </span>
							<input maxLength={36} onChange={formatTagsInput} name="tags" type="text" value={formData.tags} className="border outline-0" />
							<label className="text-14 font-medium" htmlFor="">
								Property Address:
							</label>
							<input required maxLength={40} onChange={e => setFormData({ ...formData, address: e.target.value })} value={formData.address} className="border outline-0" type="text" />
							<button className="p-2 mt-4 border-2" type="submit">
								Add Property
							</button>
						</form>
					</div>
					<div onClick={closeDialog} className="fixed inset-0 opacity-50 bg-black"></div>
				</div>
			}
		</>
	);
}

export default PropertyCardFormDialogModal;
