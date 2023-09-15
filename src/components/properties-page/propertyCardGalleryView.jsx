import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectProperties } from "@/redux/reducers/properties";
function PropertyCardGalleryView() {
	const properties = useSelector(selectProperties);
	console.log(properties);
	return (
		<>
			{properties.length > 0 ? (
				<div className="p-2 w-full grid gap-4 grid-cols-2 sm:grid-cols-4">
					{properties.map(property => {
						return (
							<div key={property.id} className=" border-2 ">
								<img src={property.image} alt="" className="w-full bg-purple-200" />
								<h3 className="font-bold truncate">{property.name}</h3>
								<p>{property.address}</p>
							</div>
						);
					})}
				</div>
			) : (
				<p className="text-24">Loading Properties</p>
			)}
		</>
	);
}

export default PropertyCardGalleryView;
