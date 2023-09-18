import { auth } from "@/firebase-server/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setEmail, setPassword } from "../../redux/reducers/login";
import { useDispatch, useSelector } from "react-redux";

const CreateAccountPage = () => {
	const dispatch = useDispatch();
	const emailInput = useSelector(state => state.userAuthForm.emailInput);
	const passwordInput = useSelector(state => state.userAuthForm.passwordInput);

	const registerUser = async () => {
		try {
			const userCredential = await createUserWithEmailAndPassword(auth, emailInput, passwordInput);
			console.log(userCredential);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="flex flex-col gap-4 justify-around max-w-sm mt-20 m-auto px-6 pb-8 py-4 rounded-md bg-white">
			<h2 className="text-26 font-medium">Create Account</h2>
			<div className="flex flex-col gap-3">
				<div className="flex flex-col">
					<label htmlFor="" className="text-14 font-medium">
						Email
					</label>
					<input onChange={e => dispatch(setEmail(e.target.value))} placeholder="Email" type="email" className="mt-2 p-2 border border-neutral-400" />
				</div>
				<div className="flex flex-col">
					<label htmlFor="" className="mt-4 text-14 font-medium">
						Password
					</label>
					<input onChange={e => dispatch(setPassword(e.target.value))} placeholder="Password" type="password" className="mt-2 p-2 border border-neutral-400" />
				</div>
			</div>
			<div className="mt-10 flex flex-col gap-4">
				<button onClick={registerUser} className=" flex gap-2 p-2 items-center justify-center rounded-sm border bg-blue-500 text-white">
					Create Account
				</button>
			</div>
		</div>
	);
};

export default CreateAccountPage;
