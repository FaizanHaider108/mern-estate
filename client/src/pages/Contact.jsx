import React from 'react'
import Header from "../components/Header"
import Footer from "../components/Footer"
import SmallMap from "../components/Smallmap"
const Contact = () => {
  return (
    <div>
      <Header />
      <div className='h-[100%] bg-slate-900 p-10 '>
        <div className='max-w-6xl mx-auto'>
          {/* form section */ }
          <div className='mt-[100px] flex justify-evenly flex-wrap '>
            {/* email contact section */ }
            <div className='flex flex-col'>
              <h1 className='text-2xl text-white font-semibold'>Point of Contact</h1>

              <div className='flex flex-col'>
                <div>
                  <h3 className='mt-[50px] text-xl text-white'>Contact through Email</h3>
                  <a class="text-sm text-blue-700" href="mailto:info@nextlandpk.com">info@nextlandpk.com</a>

                </div>
                <div>
                  <h3 className='mt-[20px] text-xl text-white'>Call us at</h3>
                  <a href="tel:+923006900008">
                    <p className="text-sm text-blue-700  font-semibold">+92-300-6900008</p>
                  </a>
                  <a href="tel:+923212655552">
                    <p class="text-sm text-blue-700  font-semibold">+92-321-2655552</p>
                  </a>
                </div>

                <div className='mt-20'>
                  <h1 className='text-2xl text-white font-semibold'>Our Location</h1>
                  <p className='text-sm text-blue-700 '>Khayaban-e-jinnah, <br />Ch Market office No # 4</p>
                  <div className='mt-[20px]'>
                    <SmallMap />
                  </div>
                </div>
              </div>
            </div>

            {/* map form */ }
            <div className="contact-form flex flex-col gap-10">
              <div>
                <h1 className='text-2xl text-white font-semibold'>Submit the form <span className='text-sm text-blue-700'>(so we can contact you)</span></h1>
              </div>
              <div>
                <form className='flex flex-col'
                  action="https://formsubmit.co/info@nextlandpk.com" method="POST">

                  <label className='mb-3 font-semibold text-white '> Name</label>
                  <input type="text"
                    className='p-2 w-full outline-none text-white rounded-lg bg-slate-700 peer-invalid:visible'
                    name="name" placeholder='Your Name'></input>

                  <label className='mb-3 mt-4 font-semibold text-white '> Email</label>
                  <input type="email"
                    className='p-2 w-full outline-none text-white rounded-lg bg-slate-700 peer-invalid:visible'
                    name="email" placeholder='Enter your Email'></input>

                  <label className='mb-3 mt-4 font-semibold text-white '> Message</label>
                  <textarea type="text"
                    className='p-2 w-full outline-none text-white rounded-lg bg-slate-700 peer-invalid:visible h-[100px]'
                    name="message" placeholder='Enter your Message'></textarea>

                  <button className=' mt-4 p-3 bg-blue-700 border-none text-white font-semibold rounded-md' type="submit">Send Inquiry </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact



// PIA Housing Society
