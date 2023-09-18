import { useSelector, useDispatch } from "react-redux";
import { setProperties } from "../../redux/reducers/properties";
import { useEffect } from "react";
import { db } from "../../firebase-server/firebase";
import { collection, getDocs } from "firebase/firestore";
import MobileHeader from "../../components/common/MobileHeader";
import PropertyCardGalleryView from "./propertyCardGalleryView";
import SearchBar from "../../components/common/SearchBar";

function PropertiesPage() {
	const dispatch = useDispatch();

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

	// get initial property data from database on first render
	useEffect(() => {
		getPropertyData();
	}, []);

	return (
		<>
			<MobileHeader />
			<SearchBar />
			<PropertyCardGalleryView />
		</>
	);
}

export default PropertiesPage;
