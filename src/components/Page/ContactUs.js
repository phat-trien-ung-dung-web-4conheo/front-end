import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import PublicIcon from '@mui/icons-material/Public';
import CallIcon from '@mui/icons-material/Call';
import SmsIcon from '@mui/icons-material/Sms';

const Container = styled.div`
`
const Contact = styled.div``

const ContactUs = () => {
    return (

        <Container className="relative">
             <Contact>
                <img src='https://ecommerce-website-omega.vercel.app/static/media/features3.fbf2c716521f19a73cae.png' className='w-full object-cover'></img>   
                <div className="bg-black absolute top-0 left-0 right-0 bottom-0 opacity-70"> 
                </div>
            </Contact>
                <div className='absolute z-99 top-0 p-4 right-0 left-0 text-center'>
                    <h1 className='text-white text-lg font-semibold'>CONTACT US</h1>
                    <p className='text-gray-500 mt-8'>We're open for any suggestion or just to have a chat</p>
           
                    <div class="flex gap-3 mt-10 justify-center items-start flex-row-reverse">
                        <div class="px-6 py-10 opacity-80 rounded-tr-3xl rounded-bl-3xl shadow-lg" style={{backgroundColor: "#4d4b8b"}} >
                            <h3 className="text-left text-white text-lg"> Write Us</h3>
                            <input type="text" id="name" class="mt-10 text-white placeholder-gray-400 text-sm" style={{backgroundColor: "#4d4b8b"}} placeholder="Name"></input>
                            <div class="border-b pb-1"></div>
                            <input type="text" id="email" class="mt-5 text-white placeholder-gray-400 text-sm" style={{backgroundColor: "#4d4b8b"}} placeholder="Email"></input>
                            <div class="border-b pb-1"></div>
                            <input type="text" id="subject" class="mt-5 text-white placeholder-gray-400 text-sm" style={{backgroundColor: "#4d4b8b"}} placeholder="Subject"></input>
                            <div class="border-b pb-1 "></div>
                            <textarea type="text" id="message" class="mt-5 text-white placeholder-gray-400 text-sm" style={{backgroundColor: "#4d4b8b"}} rows={4} placeholder="Message"></textarea>
                            <div class="border-b pb-2"></div>
                            <Button content="Send" width="80px" height="80px" radius="10" backgroundColor="#fff" color="#000" class="font-thin"></Button>  
                        </div>

                        <div class="pt-14 pb-10 px-5 opacity-80 rounded-tr-3xl rounded-bl-3xlshadow-lg" style={{backgroundColor: "#2d284a"}}>
                            <button className=" text-white">
                                <h3 class="text-left text-lg"> Contact information</h3>
                                <div class="border-b pt-5 pb-2 "></div>
                                    <div class="flex gap-3 items-center pt-5 pb-2">
                                        <LocationOnIcon class="rounded-full bg-slate-600 p-1 h-7 fill-white"></LocationOnIcon>
                                        <p class=" text-gray-500 text-sm">
                                            <span class="text-white text-base">Address: </span>
                                            4517 Washington Ave. Manch, Kentucky 39495 
                                        </p>
                                    </div>
                                    <div class="flex gap-3 items-center pt-5 pb-2">
                                        <LocalPhoneIcon class="p-1 rounded-full bg-slate-600 h-7 fill-white " ></LocalPhoneIcon>
                                        <p class=" text-gray-500 text-sm">
                                            <span class="text-white text-base">Telephone number: </span>
                                            0847.635.644
                                        </p>
                                    </div>
                                    <div class="flex gap-3 items-center pt-5 pb-2">
                                        <EmailIcon class="rounded-full bg-slate-600 h-7 p-1 fill-white"></EmailIcon>
                                        <p class=" text-gray-500 text-sm">
                                            <span class="text-white text-base">Email: </span>
                                            michael.mitc@example.com
                                        </p>
                                    </div>
                                    <div class="flex gap-3 items-center pt-5 pb-2">
                                        <PublicIcon class="rounded-full bg-slate-600 h-7 p-1 fill-white"></PublicIcon>
                                        <p class=" text-gray-500 text-sm">
                                            <span class="text-white text-base">Website: </span>
                                            https://www.app.com
                                        </p>
                                    </div>
                            </button>
                        </div>
                 </div>
             </div>


             <div class ="absolute pt-16 pb-40 px-48 right-0 left-0 bg-white">
                <h3 class="text-center text-lg font-semibold" style={{color:"#2a254b"}}>See what our customers are saying about us</h3>
                <div class="flex gap-5 items-start mt-16 pb-40">
                    <div class="px-5 py-10 rounded-2xl shadow-lg opacity-100" style={{backgroundColor: "#2a254b"}}>
                        <h3 class="text-white text-center text-lg"> Great Company </h3>
                        <p class="text-gray-500 mt-5 text-justify">“Very easy ordering process and a huge plus they work with your insurance. Not to mention it’s super simple to apply the insurance. My contacts were shipped and delivered within 2 days, can’t expect anything more!”</p>
                        <p class="text-white mt-8">Bruno Kpankon</p>
                    </div>
                    <div class="px-5 py-10 rounded-2xl shadow-lg opacity-100" style={{backgroundColor: "#2a254b"}}>
                        <h3 class="text-white text-center text-lg">The customer service was top notch </h3>
                        <p class="text-gray-500 mt-5 text-justify">“The customer service was top notch. I made a mistake on my order and was informed promptly through an email. When I called to revise the order the customer service representative was extremely knowledgeable, helpful, professional and personable. My issue was resolved quickly and the order revised and resubmitted. The order took longer than expected to arrive but I think that was the delivery method. I would definitely use ContactsDirect again.”</p>
                        <p class="text-white mt-8">Lynn Bell</p>
                    </div>
                    <div class="px-5 py-10 rounded-2xl shadow-lg opacity-100" style={{backgroundColor: "#2a254b"}}>
                        <h3 class="text-white text-center text-lg">It was one of the easiest things I have… </h3>
                        <p class="text-gray-500 mt-5 text-justify">“It was one of the easiest things I have done online and very quick! The price was great and I could not upload my prescription so they actually contacted my doctor and verified it. I will definitely use them again.”</p>
                        <p class="text-white mt-8">Antony Ly.beart</p>
                    </div>
                 </div>

                 <div class ="absolute pt-16 px-48 pb-40 right-0 left-0 bg-gray-100">
                    <h3 class="text-center text-lg pb-10 font-semibold">NEED HELP? CONTACT US!</h3>
                    <div class="flex gap-5 text-center">
                        <div class="px-5 py-10 border-2 rounded-xl border-indigo-900">
                            <div class="flex gap-2 justify-center">
                                <CallIcon class="h-9"></CallIcon>
                                <p class="text-lg font-semibold">Call Us</p>
                            </div>
                            <div>
                            <p class="mt-5 font-semibold">1-844-553-6737</p>
                            <p class="text-gray-500 mt-5">Monday-Friday 8:30AM - 8.00PM EST Saturday 9:00AM - 5.30PM EST</p>
                            </div>
                        </div>
                        <div class="px-5 py-10 border-2 rounded-xl border-indigo-900">
                            <div class="flex gap-2 justify-center">
                                <EmailIcon class="h-9"></EmailIcon>
                                <p class="text-lg font-semibold">Wrire To Us</p>
                            </div>
                            <div>
                            <p class="mt-5  font-semibold">Send us an Email</p>
                            <p class="text-gray-500 mt-5">We’ll get back to you as soon as possible</p>
                            </div>
                        </div>
                        <div class="px-5 py-10 border-2 rounded-xl border-indigo-900">
                            <div class="flex gap-2 justify-center">
                                <SmsIcon class="h-9"></SmsIcon>
                                <p class="text-lg font-semibold">Chat With Us</p>
                            </div>
                            <div>
                            <p class="mt-5  font-semibold">Customer support</p>
                            <p class="mt-5 text-gray-500" >Monday - Friday 8:30 am to 4:30 pm EST</p>
                            </div>
                        </div>
                    </div>
                    <div class="absolute py-10 mt-20 text-center left-0 right-0 bg-white">
                        <h3 class="font-semibold text-lg">Don't Worry!</h3>
                        <p class="text-gray-500 mt-5 ">It's our honor to help you!</p>
                    </div>

                 </div>
            </div>    
        </Container>

    );
};

export default ContactUs;