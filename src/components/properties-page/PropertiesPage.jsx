import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProperties } from "../../redux/reducers/properties";
import { useEffect } from "react";
import { db } from "../../firebase-server/firebase";
import { collection, getDocs } from "firebase/firestore";
import MobileHeader from "../MobileHeader";
import PropertyCardGalleryView from "./propertyCardGalleryView";

function Properties() {
	const dispatch = useDispatch();
	const { properties } = useSelector(state => state.propertiesList);

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
	};

	useEffect(() => {
		getPropertyData();
	}, []);

	return (
		<>
			<MobileHeader />
			<PropertyCardGalleryView propertyData={properties} />
		</>
	);
}

export default Properties;
