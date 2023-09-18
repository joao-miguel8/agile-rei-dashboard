import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
<<<<<<< HEAD
import Dashboard from "./components/Dashboard";
import PropertiesPage from "./components/properties-page/PropertiesPage";
import Notes from "./components/Notes";
import Contacts from "./components/Contacts";
import ErrorPage from "@/components/ErrorPage";
import Login from "@/components/Login";
import CreateAnAccount from "@/components/CreateAccount";
=======
import DashboardPage from "@/pages/dashboard-page/DashboardPage";
import PropertiesPage from "@/pages/properties-page/PropertiesPage";
import NotesPage from "@/pages/notes-page/NotesPage";
import ContactsPage from "@/pages/contacts-page/ContactsPage";
import ErrorPage from "@/pages/error-page/ErrorPage";
import LoginPage from "@/pages/login-page/LoginPage";
import CreateAccountPage from "@/pages/create-account-page/CreateAccountPage";
>>>>>>> feature-properties-search-functionality

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
<<<<<<< HEAD
			<Route path="/" element={<Login />} />
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/properties" element={<PropertiesPage />} />
			<Route path="/notes" element={<Notes />} />
			<Route path="/contacts" element={<Contacts />} />
			<Route path="/login" element={<Login />} />
			<Route path="/createAccount" element={<CreateAnAccount />} />
=======
			<Route path="/" element={<LoginPage />} />
			<Route path="/dashboard" element={<DashboardPage />} />
			<Route path="/properties" element={<PropertiesPage />} />
			<Route path="/notes" element={<NotesPage />} />
			<Route path="/contacts" element={<ContactsPage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/createAccount" element={<CreateAccountPage />} />
>>>>>>> feature-properties-search-functionality
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
