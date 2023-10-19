import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../css/Home.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Header from "../components/Header";
import Footer from "../components/Footer";
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    
    fetchOfferListings();
  }, []);

  return (
    <div>
      <Header />
      <div className='container '>
        <h1 className='heading text-white' >
          Find your perfect place with
          <span className='text-white font-bold'> NextLand</span>
        </h1>
        <div className='para text-white sm:font-semibold font-normal '>
          At NextLand, we've built our reputation on trust. Our unwavering commitment to honesty, integrity, and exceptional service is the
          <br />
          foundation of our client relationships. Trust in us to find your perfect property because your dreams are our priority.
        </div>
        <Link to='/search' className='text-white font-bold hover:underline'>
          <button className='search-btn'>Let's Start</button>
        </Link>
      </div>

    

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {offerListings && offerListings.length > 0 && (
          <div>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent offers</h2>
              <Link className='text-sm text-blue-800 hover:underline' to='/search?offer=true'>Show more offers</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div>
            <div className='my-3'>
                <h2 className='text-2xl font-semibold text-slate-600'>Recent places for Rent</h2>
              <Link className='text-sm text-blue-800 hover:underline' to='/search?type=rent'>Show more places for rent</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {rentListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div>
            <div className='my-3'>
                 <h2 className='text-2xl font-semibold text-slate-600'>Recent Places for Sale</h2>
              <Link className='text-sm text-blue-800 hover:underline' to='/search?type=sale'>Show more places for sale</Link>
            </div>
            <div className='flex flex-wrap gap-4'>
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
