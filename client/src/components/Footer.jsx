import React from 'react'
import "../css/Footer.css"
import { Link } from "react-router-dom"
import { AiOutlineMail } from "react-icons/ai"
import { BsTelephone } from "react-icons/bs"
import { CiLocationOn } from "react-icons/ci"
import { TbNetwork } from "react-icons/tb"
import { useSelector } from "react-redux"
import { BsInstagram } from "react-icons/bs"
import { BsFacebook } from "react-icons/bs"
const Footer = () => {
  const { currentUser } = useSelector( state => state.user );
  return (
    <footer className='footer'>
      <div className='flex flex-col gap-10 sm:gap-4'>
        {/* footer brand logo */ }
        <div className='footer-items'>

          <div className='footer-section-1'>
            <h1>NextLand</h1>
            <p className='text-slate-200'>Trust in us to find your perfect property, <br />because your dreams are our priority</p>
          </div>

          {/* quick link */ }
          <div className='quick-links'>
            <h1 className='mb-4 text-slate-500 text-3xl font-bold'>Quick Links</h1>
            <div className='flex flex-col gap-4'>
              <Link to={ "/" } className='text-slate-200'>
                Home
              </Link>
              <Link to={ "/about" } className='text-slate-200'>
                About
              </Link>
              <Link to={ "/contact" } className='text-slate-200'>
                Contact
              </Link>
              <Link to={ "/search" } className='text-slate-200'>
                Find a Property
              </Link>
              { currentUser ? (
                " "
              ) : (
                <Link to={ "/signin" } className='text-slate-200'>
                  Sign in
                </Link>
              ) }

            </div>
          </div>

          {/* Contact */ }
          <div className='contact'>
            <h1 className='mb-4 text-slate-500 text-3xl font-bold'>Contact</h1>
            <div className='flex flex-col gap-4'>
              <div className='flex items-center gap-2'>
                < AiOutlineMail className='2xl text-slate-200' />
                <a href="mailto:info@nextlandpk.com" class="text-white">info@nextlandpk.com</a>
              </div>
              <div className='flex items-center gap-2'>
                < BsTelephone className='2xl text-slate-200' />
                <a href="tel:+923006900008">
                  <p className="text-white">+92-300-6900008</p>
                </a>
              </div>
              <div className='flex items-center gap-2'>
                < BsTelephone className='2xl text-slate-200' />
                <a href="tel:+923212655552">
                  <p class="text-white">+92-321-2655552</p>
                </a>
              </div>
              <div>
                <h1 className='text-4xl text-slate-500 font-semibold'>Socials</h1>
                <div className='flex gap-4'>
                  <a href="https://instagram.com/nextlandpk?igshid=OGQ5ZDc2ODk2ZA==" target='blank'>
                    <BsInstagram className='text-slate-300 mt-[10px]' />
                  </a>
                  <a href="https://www.facebook.com/profile.php?id=61552426563200" target='blank'>
                    <BsFacebook className='text-slate-300 mt-[10px]' />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* address */ }
          <div className='address flex flex-col gap-4'>
            <div className=''>
              <h1 className='mb-4 text-slate-500 text-3xl font-bold'>Address</h1>
              <div className='flex gap-1 items-baseline'>
                <CiLocationOn className='loaction-icon text-slate-200' />
                <p className='text-slate-200 locate'>Khyaban-e-Jinaah Read,<br /> Ch-Market  office no# 4</p>
              </div>
            </div>
            <div className=''>
              <h1 className='mb-4 text-slate-500 text-2xl font-bold'>Website Developed By:</h1>
              <div className='developed flex gap-2'>
                <TbNetwork className='text-2xl text-slate-200' />
                <p className='text-slate-200 locate'>Powered by
                  <a href="http://faizanhaiderdev.online" className='font-bold underline'> Faizan Haider </a>
                  <br />from
                  <a href="" className='font-bold underline'>     InnovaWeb Solution</a>
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* lower section */ }
        <div className='bottom flex sm:flex flex-wrap gap-4 justify-between p-3'>
          <p className='text-slate-200'>&copy; 2023 NextLand. All Rights Reserved</p>
          <Link to={ "/privacy-policy" } className='text-slate-200 underline'>
            Privacy policy
          </Link>
        </div>




      </div>
    </footer>
  )
}

export default Footer

