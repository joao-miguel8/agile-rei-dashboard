import ArrowIcon from "@/assets/icons/Arrow";

function PropertyCard(propertyData, key, onCardDelete, isSelected) {
	const { address, id, image, name, status, tags } = propertyData.propertyData;
	const handleRemoveProperty = () => {
		onCardDelete(cardData?.FormData.id);
	};

	const renderStatusColors = {
		renderVacant: status === "Vacant" ? "bg-red-200 text-red-500" : "",
		renderRented: status === "Rented" ? "bg-green-200 text-green-600" : "",
		renderInRepair: status === "In Repair" ? "bg-orange-200 text-orange-500" : "",
	};

	return (
		<div onClick={handleRemoveProperty} className={`my-4 min-w-[260px] max-w-[340px] h-max[200px] flex flex-col justify-between shadow-[0_3px_10px_rgb(0,0,0,0.2)] ${isSelected ? "border-blue-40" : "border-transparent"}`}>
			<div className=" align-top">
				{/* IMAGE */}
				{image && (
					<div className="w-full gap-3">
						<img className="w-full" src={image} alt="" />
					</div>
				)}
				{/* NAME AND STATUS CONTAINER */}
				<div className="px-2 mt-2 flex justify-between items-start font-medium">
					<h4 className="text-wrap mr-2 text-20 self-center word-spacing:90px">{name}</h4>
					<span className={`whitespace-nowrap px-2 py-1 flex items-center justify-center text-12 rounded-lg ${renderStatusColors.renderVacant} ${renderStatusColors.renderInRepair} ${renderStatusColors.renderRented}`}>{status}</span>
				</div>
				{/* TAGS CONTAINER */}
				<div className="px-2 my-4 flex items-center overflow-auto scrollbar-hide">
					{tags?.map((tag, index) =>
						tags.length > 0 ? (
							<>
								<span key={index} className="text-12 whitespace-nowrap capitalize">
									{tag}
								</span>
								{index !== tags.length - 1 && <span className="mx-2">&#8226;</span>}
							</>
						) : (
							<p>{tag}</p>
						)
					)}
				</div>
				{/* PROPERTY ADDRESS */}
				<div className="py-1 px-2 flex flex-col justify-center bg-zinc-100">
					<h6 className="uppercase text-12 text-zinc-500">Property Address:</h6>
					<p className="text-14 text-zinc-500">{address}</p>
				</div>
			</div>
			{/* VIEW DETAILS BUTTON */}
			<a className="px-2 py-1 mt-4 flex justify-between items-center border-t-2">
				<h6 className="text-14 text-zinc-500">Detail Property</h6>
				<span className="text-12 font-medium">
					<ArrowIcon />
				</span>
			</a>
		</div>
	);
}
export default PropertyCard;
