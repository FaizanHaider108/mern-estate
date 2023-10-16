import React from 'react'
import { FaWhatsapp } from "react-icons/fa"
import Gondal from "../assets/Gondal.jpg"
import Umer from "../assets/umer.jpg"
import Zeeshan from "../assets/zeeshan.jpg"
import waqas from "../assets/waqas.jpg"
import Mubeen from "../assets/mubeen.jpg"
import Rahat from "../assets/Rahat.jpg"
import Waseer from "../assets/Mauzzam.jpg"
import Sharbaz from "../assets/sherbaz.jpg"
import Sohaib from "../assets/sohaib.jpg"
const Team = () => {
  return (
      <div className='mb-[50px] flex items-center justify-center flex-col p-3 bg-slate-900 max-w-6xl mx-auto h-[100%] rounded-lg'>
          {/* ceo section */}
          <div className='flex flex-wrap gap-10 m-8'>
          <div className='flex align-center items-center gap-4 flex-col'>
                  <img className='w-40 h-40 rounded-full' src={ Sohaib } alt="Co-founder Sohaib Cheema" />
                  <h1 className='text-2xl text-white ' >Sohaib Cheema</h1>
                  <p className='text-sm text-blue-300'>Co-founder of NextLand</p>
                  <a href="https://wa.me/+923006900008" target='_blank' className='flex items-center gap-1 text-xl bg-green-500 p-3 text-white rounded-lg'>
                      <FaWhatsapp  className='text-2xl'/>
                      Whatsapp
                  </a>
          </div>
          <div className='flex align-center items-center gap-4 flex-col'>
                  <img className='w-40 h-40 rounded-full' src={ Sharbaz } alt="Co-founder Shairbaz" />
                  <h1 className='text-2xl text-white' >Muhammad Sherbaz</h1>
                  <p className='text-sm text-blue-300'>Co-founder of NextLand</p>
                  <a href="https://wa.me/+923006900008" target='_blank' className='flex items-center gap-1 text-xl bg-green-500 p-3 text-white rounded-lg'>
                      <FaWhatsapp  className='text-2xl'/>
                      Whatsapp
                  </a>
          </div>
          </div>

          {/* Team section */}
          <div className='mt-[100px] '>
          <h1 className='text-center text-4xl text-white uppercase'>Our Team</h1>
              <div className='flex flex-wrap items-center justify-evenly'>




                  <div className='flex flex-wrap justify-evenly gap-10 w-full'>
                      <div className='flex gap-10 flex-wrap mt-[50px]'>

                          <div className='flex align-center items-center gap-4 flex-col'>
                              <img className='w-40 h-40 rounded-full' src={ waqas } alt="Co-founder Sohaib Cheema" />
                              <h1 className='text-2xl text-white'>Waqas Cheema</h1>
                              <p className='text-sm text-blue-300'>Property Agent</p>
                              <a href="https://wa.me/+923002784228" target='_blank' className='flex items-center gap-1 text-xl bg-green-500 p-3 text-white rounded-lg'>
                                  <FaWhatsapp className='text-2xl' />
                                  Whatsapp
                              </a>
                          </div>



                      </div>


                      <div className='flex gap-10 flex-wrap mt-[50px]'>

                          <div className='flex align-center items-center gap-4 flex-col'>
                              <img className='w-40 h-40 rounded-full' src={ Rahat } alt="Co-founder Sohaib Cheema" />
                              <h1 className='text-2xl text-white'>Rahat Abbas</h1>
                              <p className='text-sm text-blue-300'>Property Agent</p>
                              <a href="https://wa.me/+923212627376" target='_blank' className='flex items-center gap-1 text-xl bg-green-500 p-3 text-white rounded-lg'>
                                  <FaWhatsapp className='text-2xl' />
                                  Whatsapp
                              </a>
                          </div>



                      </div>

                      <div className='flex gap-10 flex-wrap mt-[50px]'>

                          <div className='flex align-center items-center gap-4 flex-col'>
                              <img className='w-40 h-40 rounded-full' src={ Gondal } alt="Co-founder Sohaib Cheema" />
                              <h1 className='text-2xl text-white'>Asif Gondal</h1>
                              <p className='text-sm text-blue-300'>Property Agent</p>
                              <a href="https://wa.me/+923490745833" target='_blank' className='flex items-center gap-1 text-xl bg-green-500 p-3 text-white rounded-lg'>
                                  <FaWhatsapp className='text-2xl' />
                                  Whatsapp
                              </a>
                          </div>



                      </div>
                  </div>

                  <div className='flex flex-wrap justify-evenly w-full'>
                      <div className='flex gap-10 flex-wrap mt-[50px]'>

                          <div className='flex align-center items-center gap-4 flex-col'>
                              <img className='w-40 h-40 rounded-full' src={ Umer } alt="Co-founder Sohaib Cheema" />
                              <h1 className='text-2xl text-white'>Muhammad Umer</h1>
                              <p className='text-sm text-blue-300'>Property Agent</p>
                              <a href="https://wa.me/+923204091634" target='_blank' className='flex items-center gap-1 text-xl bg-green-500 p-3 text-white rounded-lg'>
                                  <FaWhatsapp className='text-2xl' />
                                  Whatsapp
                              </a>
                          </div>



                      </div>


                      <div className='flex gap-10 flex-wrap mt-[50px]'>

                          <div className='flex align-center items-center gap-4 flex-col'>
                              <img className='w-40 h-40 rounded-full' src={ Zeeshan } alt="Co-founder Sohaib Cheema" />
                              <h1 className='text-2xl text-white'>Zeeshan</h1>
                              <p className='text-sm text-blue-300'>Property Agent</p>
                              <a href="https://wa.me/+923244900225" target='_blank' className='flex items-center gap-1 text-xl bg-green-500 p-3 text-white rounded-lg'>
                                  <FaWhatsapp className='text-2xl' />
                                  Whatsapp
                              </a>
                          </div>



                      </div>

                      <div className='flex gap-10 flex-wrap mt-[50px]'>

                          <div className='flex align-center items-center gap-4 flex-col'>
                              <img className='w-40 h-40 rounded-full' src={ Mubeen } alt="Co-founder Sohaib Cheema" />
                              <h1 className='text-2xl text-white'>Mubeen</h1>
                              <p className='text-sm text-blue-300'>Property Agent</p>
                              <a href="https://wa.me/+923243799096" target='_blank' className='flex items-center gap-1 text-xl bg-green-500 p-3 text-white rounded-lg'>
                                  <FaWhatsapp className='text-2xl' />
                                  Whatsapp
                              </a>
                          </div>



                      </div>

                      <div className='flex gap-10 flex-wrap mt-[50px]'>

                          <div className='flex align-center items-center gap-4 flex-col'>
                              <img className='w-40 h-40 rounded-full' src={ Waseer } alt="Co-founder Sohaib Cheema" />
                              <h1 className='text-2xl text-white'>Mauzzam  Waseer</h1>
                              <p className='text-sm text-blue-300'>Property Agent</p>
                              <a href="https://wa.me/+923244188388" target='_blank' className='flex items-center gap-1 text-xl bg-green-500 p-3 text-white rounded-lg'>
                                  <FaWhatsapp className='text-2xl' />
                                  Whatsapp
                              </a>
                          </div>



                      </div>

                  </div>


              </div>

              </div>
   </div>
  )
}

export default Team


