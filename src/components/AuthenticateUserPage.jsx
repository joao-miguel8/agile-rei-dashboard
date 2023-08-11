import { auth, googleProvider } from "../firebase-server/firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import googleLogo from '@/assets/img/google-logo.svg'


const AuthenticateUserPage = ({ userEmail, userPassword, userEmailSignIn,  userPasswordSignIn }) => {


const signIn = async () => {
try { await createUserWithEmailAndPassword(auth, userEmail, userPassword)
} catch(error) { console.error(error); }
}

const signInWithGoogle = async () => {
try { await signInWithPopup(auth, googleProvider);
} catch(error) { console.error(error); }
}

return (
  <div className="flex flex-col gap-4 justify-around max-w-sm mt-20 m-auto px-6 pb-8 py-4 rounded-md bg-white" >
    <h2 className="text-26 font-medium">Log in</h2>
    <div className="flex flex-col gap-3" >
        <div className="flex flex-col" >
          <label htmlFor="" className="text-14 font-medium">Email</label>
          <input onChange={(e) => userEmailSignIn(e)} placeholder="Email" type="email" className="mt-2 p-2 border border-neutral-400" />
        </div>
        <div className="flex flex-col">
            <label htmlFor="" className="mt-4 text-14 font-medium" >Password</label>
            <input onChange={(e) => userPasswordSignIn(e)} placeholder="Password" type="password" className="mt-2 p-2 border border-neutral-400"/>
        </div>
    </div>
    <div className="mt-10 flex flex-col gap-4" >
        <button  onClick={signIn} className="p-2 font-light rounded-sm bg-blue-600 text-neutral-50" >Log in</button>
        <button onClick={signInWithGoogle} className=" flex gap-2 p-2 items-center justify-center rounded-sm border border-black"> <img src={googleLogo} alt="google logo" className="w-6" /> Sign in With Google</button>
    </div>
  </div>
)
}

export default AuthenticateUserPage;