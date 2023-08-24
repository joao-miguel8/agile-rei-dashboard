
import { useDispatch, useSelector } from 'react-redux'
import { setEmail, setPassword } from '../redux/reducers/login';
import {  auth, googleProvider } from "../firebase-server/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { Link, useNavigate } from 'react-router-dom';
import googleLogo from '@/assets/img/google-logo.svg'
import LogoutButton from './LogoutButton';


function Login ()  {

const dispatch = useDispatch();
const  emailInput  = useSelector(state => state.userAuthForm.emailInput);
const  passwordInput  = useSelector(state => state.userAuthForm.passwordInput);

const navigate = useNavigate()


const signInWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider).then((user) => {
      if (user) {
        navigate('/dashboard')
        console.log(user);
      }
    });
  } catch { (error) => {
    console.error(error)
  }
}
}


const userSignInAction = async () => {
  try {
    signInWithEmailAndPassword (auth, emailInput, passwordInput).then((user) => {
      if (user) {
        navigate('/dashboard');
        console.log(user);
      } else {
        navigate('/login');
      }
      })
  } catch { (error) => {
    console.error(error);
  }
}
}

return (
    <div className='mt-10 m-auto w-96 border-2'>
      <LogoutButton />
      <div className='flex gap-2' >
        <img src="" alt="img" />
        <span>Agile REI</span>
      </div>
{/* ------------- */}
      <div className='flex flex-col items-center' >
        <h3 className="mt-14 text-26 font-medium">Log in</h3>
        <span className='text-14 font-thin text-neutral-900' >Welcome, please enter your details</span>
        <button onClick={signInWithGoogle} className="px-4 py-2 mt-4 flex gap-2  items-center justify-center text-14 rounded-sm border border-black"> <img src={googleLogo} alt="google logo" className="w-6" /> Sign in With Google</button>
      </div>
      {/* ------------- */}
          <div >
            <div className='flex flex-col' >
            <input onChange={(e) => dispatch(setEmail(e.target.value))} placeholder="Email" type="email" className="mt-2 p-2 border-b-2	 border-neutral-200 focus:outline-none" />
            </div>
            {/* password Input container */}
            <div className="flex flex-col">
                <input onChange={(e) => dispatch(setPassword(e.target.value))} placeholder="Password" type="password" className="mt-2 p-2 border-b-2 border-neutral-200 focus:outline-none"/>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-4" >
              <button onClick={userSignInAction} className="mt-2 flex gap-2 p-2 items-center justify-center rounded-sm border bg-blue-500 text-white">Log in</button>
                <Link to={"/createAccount"} >
                    <button className="flex gap-4 justify-center font-light hover:text-blue-700">
                      <span>Don't have an account?</span>
                    <span className='font-medium border-b-2'>Sign up for free</span>
                     </button>
                </Link>
          </div>
    </div>
)
}

export default Login;