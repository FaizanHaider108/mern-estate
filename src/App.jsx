import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from "./pages/Signin"
import SignUp from './pages/SignUp';
import About from "./pages/About"
import Profile from "./pages/Profile"
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './pages/CreateListing';
import UpdateListings from './pages/UpdateListings';
import Listing from './pages/Listing';
import Search from './pages/Search';
import Contact from './pages/Contact.jsx';
const App = () => {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route exact path='/' element={<Home /> } />
        <Route  path='/signin' element={<Signin /> } />
        <Route path='/Sign-up' element={<SignUp /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/search' element={<Search /> } />
        <Route path='/contact' element={<Contact /> } />
        <Route path='/listing/:listingId' element={ <Listing /> } />
         <Route element={<PrivateRoute />}>
          <Route path='/profile' element={ <Profile /> } />
          <Route path='/create-listing' element={ <CreateListing /> } />
          <Route path='/update-listing/:listingId' element={<UpdateListings /> } />
        </Route>
      </Routes>
     
    </BrowserRouter>
  )
}

export default App