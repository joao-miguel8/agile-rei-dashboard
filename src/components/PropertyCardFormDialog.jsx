import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../firebase-server/firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import { setProperties } from "../redux/reducers/properties";
import { selectProperties } from "../redux/reducers/properties";

function PropertyCardFormDialogModal({ closeDialog }) {
	const dispatch = useDispatch();
	const properties = useSelector(selectProperties);
	console.log(properties);
	// set state for tag input to format tags as array on form submit
	const [tagInput, setTagInput] = useState("");
	console.log(tagInput);
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

	// add property form data into database
	const addPropertyCard = async e => {
		e.preventDefault();

		try {
			const propertiesRef = await addDoc(collection(db, "properties"), formData);
			dispatch(setProperties([...properties, formData]));
			console.log(properties);
		} catch (error) {
			console.error(error);
		}
		closeDialog();
	};

	function handleTagsInput(e) {
		setTagInput(
			e.target.value.split(",").map(tag => {
				return tag.trim().replace(/ {2,}/g, " ");
			})
		);
		setFormData({ ...formData, tags: tagInput });
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
							<input required onChange={e => handleUploadImageFile(e, setFormData, formData)} accept="image" type="file" id="property-img" name="property-img" className="text-14" />
							<label className="mt-3 text-14 font-medium">Property Name:</label>
							<input required maxLength={40} onChange={e => setFormData({ ...formData, name: e.target.value })} type="text" value={formData.name} className="border outline-0" />
							<label className="mt-3 text-14 font-medium">Property Status:</label>
							<select onChange={e => setFormData({ ...formData, status: e.target.value })} className={`border w-fit`} name={formData.status}>
								{Object.entries(propertyStatus).map(([key, value]) => {
									return (
										<option value={value} key={value}>
											{value}
										</option>
									);
								})}
							</select>
							<label className="mt-3 text-14 font-medium">Property Unit Details:</label>
							<span className="text-12 text-gray-400">ex. 2 bedroom, 2 bathroom, pool </span>
							<input maxLength={36} onChange={e => handleTagsInput(e)} name="tags" type="text" value={formData.tagInput} className="border outline-0" />
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

// store image in firebase with Storage provided by firebase
function handleUploadImageFile(e, setFormData, formData) {
	const imageFile = e.target.files[0];
	const storageRef = ref(storage, `propertyCardImage/${imageFile.name}`);
	const uploadTask = uploadBytesResumable(storageRef, imageFile);

	uploadTask.on(
		"state_changed",
		snapshot => {
			const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
			console.log("Upload is " + progress + "% done");
			switch (snapshot.state) {
				case "paused":
					console.log("Upload is paused");
					break;
				case "running":
					console.log("Upload is running");
					break;
			}
		},
		error => {
			// Handle unsuccessful uploads
			console.error(error);
		},
		() => {
			getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
				console.log("File available at", downloadURL);
				setFormData({ ...formData, image: downloadURL });
			});
		}
	);
}

export default PropertyCardFormDialogModal;
