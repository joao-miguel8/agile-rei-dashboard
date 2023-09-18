import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectProperties } from "@/redux/reducers/properties";
import { searchInputValue } from "../../redux/reducers/searchBar";

function PropertyCardGalleryView() {
	const properties = useSelector(selectProperties);
	const searchInput = useSelector(searchInputValue);

	const filteredPropertiesList = properties.filter(properties => {
		return properties.name?.includes(searchInput);
	});

	return (
		<>
			<div className="p-2 w-full grid gap-y-6 gap-x-4 grid-cols-2 sm:grid-cols-4  ">
				{filteredPropertiesList.map(property => {
					return (
						<div key={property.id} className="bg-white hover:-translate-y-3 duration-300 ease-in-out shadow-md">
							<img src={property.image} alt="" className="w-full" />
							<div className="p-2">
								<h3 className="mt-2 text-16 font-bold truncate">{property.name}</h3>
								<p className="mt-2 text-14">{property.address}</p>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default PropertyCardGalleryView;
