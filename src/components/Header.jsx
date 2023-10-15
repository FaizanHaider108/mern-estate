import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { FaSearch } from "react-icons/fa"
import { useSelector } from 'react-redux';

const header = () => {
    const {currentUser
    } = useSelector( state => state.user );
    const [searchTerm, setSearchTerm] = useState( '' );
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const urlParams = new URLSearchParams( window.location.search );
        urlParams.set( 'searchTerm', searchTerm );
        const searchQuery = urlParams.toString();
        navigate( `/search?${searchQuery}` );
    }

    useEffect(() => {
        const urlsParams = new URLSearchParams(location.search );
        const searchTermFromUrl = urlsParams.get( 'searchTerm' );
        if (searchTermFromUrl) {
            setSearchTerm( searchTermFromUrl );
        }
    }, [location.search])
    

    return (
        <header className='bg-slate-100 shadow-md fixed w-full z-10 '>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <Link to={ "/" }>
                    <h1 className='hidden sm:inline font-bold text-sm sm:text-4xl flex'>
                        <span className='text-slate-500'>Next</span>
                        <span className='text-slate-700'>Land</span>
                        
                    </h1>
                </Link>
               
                   <form
                    onSubmit={handleSubmit}
                    className='bg-slate-200 text-slate-500 p-3 rounded-lg flex items-center '>
                    <input type="text" placeholder='Search Property...' className='bg-transparent outline-none w-44 sm:w-64'
                     value={ searchTerm }
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    />
                    <button>
                    <FaSearch className='text-slate-500' />
                    </button>
                </form>
                
                <ul className='flex gap-6 '>
                    <Link to={"/"}>
                    <li className='hidden sm:inline hover:underline  cursor-pointer'>Home</li>
                    </Link>
                    <Link to={"/about"}>
                    <li className=' sm:inline hover:underline  cursor-pointer'>About</li>
                    </Link>
                    <Link to={"/contact"}>
                    <li className=' sm:inline hover:underline  cursor-pointer'>Contact</li>
                    </Link>
                    <Link to='/profile'>
                    { currentUser ? (
                            <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar}  alt='profile'/>
                    ) : (
                        <li className='hover:underline cursor-pointer'>Sign in</li>    
                    )} 
                    </Link>
 
                </ul>

              
            </div>
        </header>
    )
}

export default header