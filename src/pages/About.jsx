import React from 'react'
import Header from "../components/Header"
import { FaLocationArrow } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import alkabir from "../assets/alkabir.jpg"
import Footer from "../components/Footer"
import "../css/About.css"
import MapComponent from '../components/MapComponent'
import Team from '../components/Team'
const About = () => {
  return (
    <div>
      <Header />
      <div className='backImg'>
        <h1>ABOUT US</h1>
      </div>
      {/* ABOUT CONTENT */ }
      <div className='about-content  flex sm:flex-row flex-col max-w-6xl mx-auto p-3  gap-10 my-10 '>

        {/* 1 div */}
        <div className='about-info flex-1 max-w-4xl  border border-slate-700 p-4 rounded-lg'>
          <h3 className='text-4xl text-slate-700 font-bold uppercase'>Who We Are</h3>
          <p className='mt-16'>At NEXTLAND , we're a team of real estate experts who really know the property market. We're also skilled at building properties. We truly believe that our success depends on how happy our clients are. Our way of doing things is different from other companies, and it's what's helped us build long-lasting relationships with many happy client.</p>
          <div className='list mt-4'>
            <ul className='flex flex-col gap-6'>
              <div className='flex flex-col '>
                <span className='text-xl font-bold text-slate-700 uppercase'>You Come First:</span>
                <li>At NextLand, you're our top priority. We focus on what you need and want to give you the best solutions</li>
              </div>
              <div className='flex flex-col '>
                <span className='text-xl font-bold text-slate-700 uppercase'>We Know the Market: </span>
                <li>We really understand the property market in the areas we work in. This helps us make smart choices and give you good advice</li>
              </div>
              <div className='flex flex-col '>
                <span className='text-xl font-bold text-slate-700 uppercase'>Inventive Building: </span>
                <li>As builders, we're always coming up with new ideas to make homes that last.</li>
              </div>
              <div className='flex flex-col '>
                <span className='text-xl font-bold text-slate-700 uppercase'>We're in it for the Long Run: </span>
                <li>We want to be your trusted partners. Building trust and being open with you is very important to us.</li>
              </div>
              <div className='flex flex-col '>
                <span className='text-xl font-bold text-slate-700 uppercase'>Happy Clients: </span>
                <li>Lots of people have been happy with our work. They've found their dream homes with us</li>
              </div>
            </ul>
          </div>
        </div>


      {/* 2 div */}
        <div className='contact-about  border border-slate-700 h-full p-4 rounded-lg'>
          <h1 className='text-4xl bold text-slate-600 font-bold'>LOCATION: </h1>
          <div className='location-dev flex gap-4 items-baseline'>
            <FaLocationArrow className='text-slate-700'/>
            <p className='text-slate-700'>Khyaban-e-Jinnah Road,<br /> Ch.Market, office no # 4</p>
          </div>
          <div className='location-dev flex gap-4 items-baseline'>
            <MdEmail className='text-slate-700'/>
            <p className='text-slate-700'>info@nextlandpk.com</p>
          </div>
        </div>

      </div>
      {/* operate */}
      <div className='about-content border border-slate-700 rounded-lg bg-slate-400 flex sm:flex-col flex-col max-w-6xl mx-auto p-3  gap-10 my-10'>
         
      
         <h1 className='text-4xl font-bold text-white'>We Operate in :</h1>
     
        <div className='flex gap-3 items-center justify-center flex-wrap bg-slate-600 w-full rounded-lg p-3'>
         
          <div className='flex flex-col gap-2 items-center'>
            <img className='rounded-lg w-[200px] h-[100px]' src={ alkabir } alt="Al-Kabir Orchard" />
            <h1 className='text-sm text-slate-200 font-bold'>ALKabir-Orchard</h1>
          </div>  
          <div className='flex flex-col gap-2 items-center'>
            <img className='rounded-lg w-[200px] h-[100px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiDywjxRLgemdDO6IeIfiVLMjEC_fNEdvcNRObhNIeY0OlrRfmhdgKeQiMdsH9ovvn1Ro&usqp=CAU"alt="Al-Kabir Orchard" />
            <h1 className='text-sm text-slate-200 font-bold'>AlKabir-Developers</h1>
          </div>  
          <div className='flex flex-col gap-2 items-center'>
            <img className='rounded-lg w-[200px] h-[100px]' src="https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2018/08/al2-600x265.jpg" alt="Al-Kabir Orchard" />
            <h1 className='text-sm text-slate-200 font-bold'>AlNoor-Orchard</h1>
          </div>  
          <div className='flex flex-col gap-2 items-center'>
            <img className='rounded-lg w-[200px] h-[100px]' src="https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2020/02/Where-to-invest-in-Wapda-Town-Lahore-Cover-14-02.jpg" alt="Al-Kabir Orchard" />
            <h1 className='text-sm text-slate-200 font-bold'>Wapda Town</h1>
          </div>  
          <div className='flex flex-col gap-2 items-center'>
            <img className='rounded-lg w-[200px] h-[100px]' src="https://content-cdn.zameen.com/medium_Valencia_Entrance_1193a10f6d.jpeg" alt="Al-Kabir Orchard" />
            <h1 className='text-sm text-slate-200 font-bold'>Valancia Town</h1>
          </div>  
          <div className='flex flex-col gap-2 items-center'>
            <img className='rounded-lg w-[200px] h-[100px]' src="https://res.cloudinary.com/arkaa-consultants/image/upload/v1656942842/etihad-town-lahore/project/Slider_Image_gynap2.jpg" alt="Al-Kabir Orchard" />
            <h1 className='text-sm text-slate-200 font-bold'>Etihad Town</h1>
          </div>  
          <div className='flex flex-col gap-2 items-center'>
            <img className='rounded-lg w-[200px] h-[100px]' src="https://www.feeta.pk/uploads/feeta_property_xyz/2020/10/2020-10-09-12-18-12-108-1602245892.jpeg" alt="Al-Kabir Orchard" />
            <h1 className='text-sm text-slate-200 font-bold'>Airline Society</h1>
          </div>  
         <div className='flex flex-col gap-2 items-center'>
            <img className='rounded-lg w-[200px] h-[100px]' src="https://cdnassets.hw.net/38/06/e30ce41c4697922e7da772245d1d/6e1dd1e2-65e8-411b-9650-1751c1336caf.jpg" alt="Al-Kabir Orchard" />
            <h1 className='text-sm text-slate-200 font-bold'>Architect Society</h1>
          </div>  
        
         <div className='flex flex-col gap-2 items-center'>
            <img className='rounded-lg w-[200px] h-[100px]' src="https://media.zameen.com/thumbnails/62013001-800x600.jpeg" alt="Al-Kabir Orchard" />
            <h1 className='text-sm text-slate-200 font-bold'>Punjab University Society</h1>
          </div>  
        
         <div className='flex flex-col gap-2 items-center'>
            <img className='rounded-lg w-[200px] h-[100px]' src="https://www.opf.org.pk/wp-content/uploads/2019/04/zone-5-isb.png" alt="Al-Kabir Orchard" />
            <h1 className='text-sm text-slate-200 font-bold'>OPF Society</h1>
          </div>  
        
         <div className='flex flex-col gap-2 items-center'>
            <img className='rounded-lg w-[200px] h-[100px]' src="https://res.cloudinary.com/graanacom/image/upload/v1650437547/x2krefeqzncrlhmnm0jg.jpg" alt="Al-Kabir Orchard" />
            <h1 className='text-sm text-slate-200 font-bold'>Nashemen Iqbal Society</h1>
          </div>  
        
         <div className='flex flex-col gap-2 items-center'>
            <img className='rounded-lg w-[200px] h-[100px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Ctt1lQlRYAsdKQpaBT43forUwRFu8ow4gA&usqp=CAU" alt="Al-Kabir Orchard" />
            <h1 className='text-sm text-slate-200 font-bold'>Tariq Garden Society</h1>
          </div>  
        
        
         <div className='flex flex-col gap-2 items-center'>
            <img className='rounded-lg w-[200px] h-[100px]' src="data:image/jpeg;base64,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" alt="Al-Kabir Orchard" />
            <h1 className='text-sm text-slate-200 font-bold'>Gulshan-e-Lahore</h1>
          </div> 
          
          <div className='flex flex-col gap-2 items-center'>
            <img className='rounded-lg w-[200px] h-[100px]' src="https://i0.wp.com/manahilestate.com/wp-content/uploads/2017/01/PIA-Officers-Cooperative-Housing-Scheme-Rawalpindi.jpg?ssl=1" alt="Al-Kabir Orchard" />
            <h1 className='text-sm text-slate-200 font-bold'>PIA Society</h1>
          </div> 
     
         
        </div>
        <div className='w-full'>
        <MapComponent />
      </div>
        
      </div>

      {/* Team */}
      <Team />
      

        

      <Footer />
    </div>
  )
}

export default About