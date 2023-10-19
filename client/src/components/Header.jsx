import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { FaSearch } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
    const { currentUser } = useSelector( state => state.user );
    const [searchTerm, setSearchTerm] = useState( '' );
    const [ToggleMenu, setToggleMenu] = useState( false );
    const navigate = useNavigate();

    const handleSubmit = ( e ) => {
        e.preventDefault();
        const urlParams = new URLSearchParams( window.location.search );
        urlParams.set( 'searchTerm', searchTerm );
        const searchQuery = urlParams.toString();
        navigate( `/search?${searchQuery}` );
    }

    useEffect( () => {
        const urlsParams = new URLSearchParams( location.search );
        const searchTermFromUrl = urlsParams.get( 'searchTerm' );
        if ( searchTermFromUrl ) {
            setSearchTerm( searchTermFromUrl );
        }
    }, [location.search] );

    const handleToggleMenu = () => {
        setToggleMenu( !ToggleMenu ); // Toggle the menu state
    };

    return (
        <header className='bg-slate-100 top-0 shadow-md fixed w-full z-10 '>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <Link to="/">
                    <h1 className='hidden sm:inline font-bold text-sm sm:text-4xl flex'>
                        <span className='text-slate-500'>Next</span>
                        <span className='text-slate-700'>Land</span>
                    </h1>
                </Link>

                <form
                    onSubmit={ handleSubmit }
                    className='bg-slate-200 text-slate-500 p-3 rounded-lg flex items-center'>
                    <input
                        type="text"
                        placeholder='Search Property...'
                        className='bg-transparent outline-none w-44 sm:w-64'
                        value={ searchTerm }
                        onChange={ ( e ) => setSearchTerm( e.target.value ) }
                    />
                    <button>
                        <FaSearch className='text-slate-500' />
                    </button>
                </form>

                <ul className='flex sm:gap-6 gap-2 '>
                    <Link to="/">
                        <li className='hidden sm:inline hover:underline cursor-pointer'>Home</li>
                    </Link>
                    <Link to="/SalesTeam">
                        <li className='hidden sm:inline hover:underline cursor-pointer'>Sales Team</li>
                    </Link>
                    <Link to="/about">
                        <li className='hidden sm:inline hover:underline cursor-pointer'>About</li>
                    </Link>
                    <Link to="/contact">
                        <li className='hidden sm:inline hover:underline cursor-pointer'>Contact</li>
                    </Link>
                    <Link to='/profile'>
                        { currentUser ? (
                            <img className='rounded-full h-7 w-7 object-cover' src={ currentUser.avatar } alt='profile' />
                        ) : (
                            <li className='hover:underline cursor-pointer'>Sign in</li>
                        ) }
                    </Link>

                    {/* mobile menu */ }
                    <div className='mobile-menu'>
                        <div className={ `flex flex-col items-center gap-5 top-5 right-2` }>
                            <GiHamburgerMenu onClick={ handleToggleMenu } className='text-slate-900 text-2xl' />
                            <div className={ `p-3 left-0 flex flex-col gap-10 absolute top-20 bg-slate-900 w-full  ${ToggleMenu ? 'visible' : 'hidden'}` }>
                                <Link className='text-white text-xl' to="/">Home</Link>
                                <Link className='text-white text-xl' to="/SalesTeam">
                                    Sales Team
                                </Link>
                                <Link className='text-white text-xl' to="/about">About</Link>
                                <Link className='text-white text-xl' to="/contact">Contact</Link>

                            </div>
                        </div>
                    </div>
                </ul>
            </div>
        </header>
    );
}

export default Header;
