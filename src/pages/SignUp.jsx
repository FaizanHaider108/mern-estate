import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import {BiArrowBack} from "react-icons/bi"
import OAuth from '../components/OAuth';
const SignUp = () => {
  const [formData, setFormData] = useState( {} );
  const [error, setError] = useState( null );
  const [loading, setLoading] = useState( false );
  const navigate = useNavigate();
  // handle change on the input of the form
  const handleChange = ( e ) => {
    setFormData(
      {
        ...formData,
        [e.target.id]: e.target.value,
      }
    )
  }
  console.log( formData );
  // function for submitting the data
  const handleSubmit = async ( e ) => {
    e.preventDefault();
    try {
      setLoading( true );
      const res = await fetch( "/api/auth/signup",
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify( formData )
        } );
      const data = await res.json();
      if ( data.success === false ) {
        setError( data.message );
        setLoading( false );
        return;
      }
      setLoading( false );
      setError( null );
    navigate("/signin")
    } catch ( error ) {
      setLoading( false );
      setError( error.message );
    }
  }

  return (
     <div>
      <Link to={"/"}>
      <BiArrowBack className='text-4xl m-10 text-slate-700'/>
      </Link>
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>
        Sign up
      </h1>
      {/* form input */ }
      <form action="" className='flex flex-col gap-4' onSubmit={ handleSubmit }>
        <input type="text" placeholder='username' className='border p-3 rounded-lg ' id='username' onChange={ handleChange } />
        <input type="email" placeholder='email' className='border p-3 rounded-lg ' id='email' onChange={ handleChange } />
        <input type="password" placeholder='password' className='border p-3 rounded-lg ' id='password' onChange={ handleChange } />
        <button disabled={ loading } className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          { loading ? "Loading..." : "Sign up" }
        </button>
        <OAuth />
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an Account</p>
        <Link to={ "/signin" }>
          <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
      { error && <p className='text-red-500'>{ error }</p>}
      </div>
      </div>
  )
}

export default SignUp