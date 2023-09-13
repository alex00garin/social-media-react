import React from "react"; 
import { Link } from 'react-router-dom';

function Welcome() {

  return (
  <>
    <section className='bg-neutral-800 flex h-screen w-auto justify-center items-center font-rajdhani'>
      <div className=" bg-neutral-100 rounded-md shadow-xl dark:bg-gray-900 p-40 px-10 md:px-40">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-10 text-4xl font-extrabold tracking-tight leading-none text-neutral-800 md:text-5xl lg:text-6xl dark:text-white uppercase">Welcome to my App</h1>
          <p className="mb-16 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400"></p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link to="/signup" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-neutral-800 hover:bg-neutral-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Sign Up
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </Link>
            <Link to="/signin" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-neutral-800 rounded-lg border border-gray-300 hover:bg-neutral-200 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Welcome;