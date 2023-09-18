import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import DashboardPage from "@/pages/dashboard-page/DashboardPage";
import PropertiesPage from "@/pages/properties-page/PropertiesPage";
import NotesPage from "@/pages/notes-page/NotesPage";
import ContactsPage from "@/pages/contacts-page/ContactsPage";
import ErrorPage from "@/pages/error-page/ErrorPage";
import LoginPage from "@/pages/login-page/LoginPage";
import CreateAccountPage from "@/pages/create-account-page/CreateAccountPage";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/" element={<LoginPage />} />
			<Route path="/dashboard" element={<DashboardPage />} />
			<Route path="/properties" element={<PropertiesPage />} />
			<Route path="/notes" element={<NotesPage />} />
			<Route path="/contacts" element={<ContactsPage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/createAccount" element={<CreateAccountPage />} />
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
