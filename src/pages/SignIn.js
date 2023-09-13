import React, { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

export default function SignIn() {

    const navigate = useNavigate();

const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
 
  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  }
  async function onSubmit(e) {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredential.user) {
        navigate("/myapp");
      }
    } catch (error) {
      const errorCode = error.code;
    const errorMessage = error.message;
    }
  }

  return (
    <>
    <div className='bg-neutral-800'>
      <section className="font-rajdhani">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
            <a href="/social-media-react" className="flex items-center mb-6 text-2xl font-semibold text-neutral-100 dark:text-white">
                MyApp    
            </a>
            <div className="w-full bg-neutral-100 rounded-lg shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign In to the App
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input type="email" name="email" id="email" onChange={onChange} className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input type="password" autoComplete="current-password" name="password" id="password" onChange={onChange} placeholder="••••••••" className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <button type="submit" className="w-full text-neutral-100 bg-neutral-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Log In</button>
                        <p className="text-sm font-light text-white0 dark:text-gray-400">
                            Don't have an account? 
                            <Link to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500"> Sign Up here</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
      </section> 
    </div>
    </>
  )
}
