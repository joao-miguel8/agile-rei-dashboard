import { useDispatch } from "react-redux";
import { setSearchInputValue } from "../../redux/reducers/searchBar";

const SearchBar = () => {
	const dispatch = useDispatch();

	return (
		<div className="ml-2 my-4 flex w-fit border-y border-r border-neutral-400 rounded-md overflow-hidden">
			<label htmlFor="property-search" className="p-1 flex items-center border-x border-neutral-400">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  text-neutral-500">
					<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
				</svg>
			</label>
			<input onChange={e => dispatch(setSearchInputValue(e.target.value))} name="property-search" type="text" className="pl-1 outline-none" />
		</div>
	);
};

export default SearchBar;
