import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import PropertiesPage from "./components/properties-page/PropertiesPage";
import Notes from "./components/Notes";
import Contacts from "./components/Contacts";
import ErrorPage from "@/components/ErrorPage";
import Login from "@/components/Login";
import CreateAnAccount from "@/components/CreateAccount";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/" element={<Login />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/properties" element={<PropertiesPage />} />
			<Route path="/notes" element={<Notes />} />
			<Route path="/contacts" element={<Contacts />} />
			<Route path="/login" element={<Login />} />
			<Route path="/createAccount" element={<CreateAnAccount />} />
			<Route path="*" element={<ErrorPage />} />
		</Route>
	)
);
function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
