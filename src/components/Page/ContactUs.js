import React, { useEffect } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import PublicIcon from '@mui/icons-material/Public';
import CallIcon from '@mui/icons-material/Call';
import SmsIcon from '@mui/icons-material/Sms';
import { useMediaQuery } from '@mui/material';

const Container = styled.div`
`
const Contact = styled.div``

const Information = styled.div`` 

const Customer = styled.div``

const ContactUs = () => {
    const laptop = useMediaQuery("(min-width: 1024px)")
     //automatic scroll to top when change page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
    return (

        <Container className="tablet:relative">
             <Contact className="">
                <img src='https://ecommerce-website-omega.vercel.app/static/media/features3.fbf2c716521f19a73cae.png' className='tablet:w-full object-cover mobile:hidden laptop:block'></img>   
                <div className="laptop:bg-black tablet:absolute tablet:block h-full  mobile:hidden top-0 left-0 right-0 bottom-0 tablet:opacity-70 "> 
                </div>
            </Contact>
                <div className='laptop:absolute z-99 tablet:top-0 laptop:p-4 mobile:p-0 tablet:p-0 right-0 left-0 text-center'>
                    <h1 className='laptop:text-white mobile:text-indigo-900 tablet:text-indigo-900 text-lg font-semibold'>CONTACT US</h1>
                    <p className='text-gray-500 mt-8'>We're open for any suggestion or just to have a chat</p>
                <Information>
                    <div class="laptop:flex laptop:gap-3 mt-10 laptop:justify-center laptop:items-start laptop:flex-row-reverse">
                        <div class="px-6 py-10 laptop:opacity-80 flex flex-col laptop:rounded-tr-3xl laptop:rounded-bl-3xl latop:shadow-lg laptop:w-[400px] tablet:w-full mobile:w-full" style={{backgroundColor: "#4d4b8b"}} >
                            <h3 className="text-left text-white text-lg"> Write Us</h3>
                            <input type="text" id="name" className="border-b block w-full mt-10 text-white placeholder-gray-400 text-sm" style={{backgroundColor: "#4d4b8b"}} placeholder="Name"></input>
                           
                            <input type="text" id="email" className="border-b block w-full mt-5 text-white placeholder-gray-400 text-sm" style={{backgroundColor: "#4d4b8b"}} placeholder="Email"></input>
                           
                            <input type="text" id="subject" className="border-b block w-full mt-5 text-white placeholder-gray-400 text-sm" style={{backgroundColor: "#4d4b8b"}} placeholder="Subject"></input>
                          
                            <textarea type="text" id="message" className="border-b block w-full mt-5 text-white placeholder-gray-400 text-sm" style={{backgroundColor: "#4d4b8b"}} rows={4} placeholder="Message"></textarea>
                           
                            <Button content="Send" className="mt-4 px-8 py-5 mr-auto" radius="10" backgroundColor="#fff" color="#000" class="font-thin"></Button>  
                        </div>

                        <div className="laptop:pt-14 laptop:pb-10 laptop:opacity-80 laptop:rounded-tr-3xl laptop:rounded-bl-3xl laptop:shadow-lg laptop:px-4 mobile:px-5 laptop:w-[400px]
                         mobile:w-full tablet:!bg-white laptop:!bg-[#2d284a] mobile:!bg-white" >
                            <div className="laptop:text-white tablet:text-black mobile:text-black">
                                <h3 className="laptop:text-left text-lg mobile:text-indigo-900 tablet:text-indigo-900 laptop:text-white laptop:capitalize mobile:uppercase tablet:uppercase tablet:text-center mobile:text-center">Contact information</h3>
                                <div className="border-b pt-4 pb-2 px-6 py-10"></div>
                                    <div className="flex gap-3 items-center pt-5 pb-2">
                                        <LocationOnIcon className="rounded-full bg-slate-600 p-1 h-7 laptop:fill-white"></LocationOnIcon>
                                        <p className=" laptop:text-gray-500 text-sm text-left">
                                            <span className="laptop:text-white text-base tablet:text-indigo-900 mobile:text-indigo-900">Address: 
                                             </span>
                                            <span className=""> 
                                                  &nbsp; 4517 Washington Ave. Manch. {laptop && <br></br>} Kentucky 39495 
                                                </span> 
                                        </p>
                                    </div>
                                    <div className="flex gap-3 items-center pt-5 pb-2">
                                        <LocalPhoneIcon className="p-1 rounded-full bg-slate-600 h-7 fill-white " ></LocalPhoneIcon>
                                        <p className=" laptop:text-gray-500 text-sm">
                                            <span className="laptop:text-white tablet:text-indigo-900 mobile:text-indigo-900 text-base">Telephone number: </span>
                                            0847.635.644
                                        </p>
                                    </div>
                                    <div className="flex gap-3 items-center pt-5 pb-2">
                                        <EmailIcon className="rounded-full bg-slate-600 h-7 p-1 fill-white"></EmailIcon>
                                        <p className=" laptop:text-gray-500 text-sm">
                                            <span className="laptop:text-white tablet:text-indigo-900 mobile:text-indigo-900 text-base">Email: </span>
                                            michael.mitc@example.com
                                        </p>
                                    </div>
                                    <div className="flex gap-3 items-center pt-5 pb-2">
                                        <PublicIcon className="rounded-full bg-slate-600 h-7 p-1 fill-white"></PublicIcon>
                                        <p className=" laptop:text-gray-500 text-sm">
                                            <span className="laptop:text-white tablet:text-indigo-900 mobile:text-indigo-900 text-base">Website: </span>
                                            https://www.app.com
                                        </p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </Information>
            </div>

            <Customer>
                <div className="laptop:absolute laptop:pt-16 laptop:pb-40 laptop:px-48 laptop:right-0 laptop:left-0 bg-white ">
                    <h3 className="text-center text-lg font-semibold mobile:hidden laptop:block" style={{color:"#2d284a"}}>See what our customers are saying about us</h3>
                    <div className="laptop:flex laptop:gap-5 laptop:items-start laptop:mt-16 laptop:pb-40 tablet:hidden mobile:hidden">
                        <div className="px-5 py-10 rounded-2xl shadow-lg opacity-100" style={{backgroundColor: "#2a254b"}}>
                            <h3 className="text-white text-center text-lg"> Great Company </h3>
                            <p className="text-gray-500 mt-5 text-justify">“Very easy ordering process and a huge plus they work with your insurance. Not to mention it’s super simple to apply the insurance. My contacts were shipped and delivered within 2 days, can’t expect anything more!”</p>
                            <p className="text-white mt-8">Bruno Kpankon</p>
                        </div>
                        <div className="laptop:px-5 laptop:py-10 laptop:rounded-2xl laptop:shadow-lg laptop:opacity-100" style={{backgroundColor: "#2a254b"}}>
                            <h3 className="text-white text-center text-lg">The customer service was top notch </h3>
                            <p className="text-gray-500 mt-5 text-justify">“The customer service was top notch. I made a mistake on my order and was informed promptly through an email. When I called to revise the order the customer service representative was extremely knowledgeable, helpful, professional and personable. My issue was resolved quickly and the order revised and resubmitted. The order took longer than expected to arrive but I think that was the delivery method. I would definitely use ContactsDirect again.”</p>
                            <p className="text-white mt-8">Lynn Bell</p>
                        </div>
                        <div className="laptop:px-5 laptop:py-10 laptop:rounded-2xl laptop:shadow-lg laptop:opacity-100" style={{backgroundColor: "#2a254b"}}>
                            <h3 className="text-white text-center text-lg">It was one of the easiest things I have… </h3>
                            <p className="text-gray-500 mt-5 text-justify">“It was one of the easiest things I have done online and very quick! The price was great and I could not upload my prescription so they actually contacted my doctor and verified it. I will definitely use them again.”</p>
                            <p className="text-white mt-8">Antony Ly.beart</p>
                        </div>
                    </div>
                
                    <div className="absolute py-16 laptop:px-48 laptop:pb-40 right-0 left-0 bg-gray-100">
                        <h3 className="text-center text-lg pb-10 font-semibold mobile:text-indigo-900 tablet:text-indigo-900">NEED HELP? CONTACT US!</h3>
                        <div className="laptop:flex laptop:gap-5 text-center tablet:ml-3 mobile:tablet:3">
                            <div className="px-5 py-10 border-2 rounded-xl border-indigo-900 tablet:mb-5 mobile:mb-5">
                                <div className="flex gap-2 justify-center">
                                    <CallIcon className="h-9"></CallIcon>
                                    <p className="text-lg font-semibold">Call Us</p>
                                </div>
                                <div>
                                <p className="mt-5 font-semibold">1-844-553-6737</p>
                                <p className="text-gray-500 mt-5">Monday-Friday 8:30AM - 8.00PM EST Saturday 9:00AM - 5.30PM EST</p>
                                </div>
                            </div>
                            <div className="px-5 py-10 border-2 rounded-xl border-indigo-900 tablet:mb-5 mobile:mb-5">
                                <div className="flex gap-2 justify-center">
                                    <EmailIcon className="h-9"></EmailIcon>
                                    <p className="text-lg font-semibold">Wrire To Us</p>
                                </div>
                                <div>
                                <p className="mt-5  font-semibold">Send us an Email</p>
                                <p className="text-gray-500 mt-5">We’ll get back to you as soon as possible</p>
                                </div>
                            </div>
                            <div className="px-5 py-10 border-2 rounded-xl border-indigo-900 tablet:mb-5 mobile:mb-5">
                                <div className="flex gap-2 justify-center">
                                    <SmsIcon className="h-9"></SmsIcon>
                                    <p className="text-lg font-semibold">Chat With Us</p>
                                </div>
                                <div>
                                <p className="mt-5  font-semibold">Customer support</p>
                                <p className="mt-5 text-gray-500" >Monday - Friday 8:30 am to 4:30 pm EST</p>
                                </div>
                            </div>
                        </div>
                    
                        <div className="absolute py-10 mt-20 text-center left-0 right-0 bg-white tablet:">
                            <h3 className="font-semibold text-lg">Don't Worry!</h3>
                            <p className="text-gray-500 mt-5 ">It's our honor to help you!</p>
                        </div>
                    </div>
                </div> 
            </Customer>   
        </Container>

    );
};

export default ContactUs;