import React from 'react'
import { FaInstagram, FaDiscord, FaTiktok } from 'react-icons/fa';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

  const currentYear = new Date().getFullYear();


const Footer = () => {
    return (
        <div className='max-w-4xl mx-auto'>
            <div className='p-5'>
                <div className='my-10'>
                    <h1>CompSoc</h1>
                </div>
                <div className='flex flex-col gap-14'>
                    <div>
                        <h4>University of Surrey</h4>
                        <h4>ussu.computing@surrey.ac.uk</h4>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h4>Follow us on social media!</h4>
                        <div className='flex gap-5'>
                            <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={40} />
                            </Link>
                            <Link href="https://www.discord.com" target="_blank" rel="noopener noreferrer">
                                <FaDiscord size={40}/>
                            </Link>
                            <Link href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                                <FaTiktok size={40} />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h4>Spotted a typo?</h4>
                        <h4>We're on GitHub!</h4>
                    </div>
                    <div>
                        <h4>Found a major issue?</h4>
                        <h4>Contact the WebMaster</h4>
                            <Link href="mohamediyadcherifi.com" target="_blank" rel="noopener noreferrer">
                                <h4>mohamediyadcherifi.com</h4>
                            </Link>
                    </div>
                    
                </div>
                {/* <div className=''>
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div> */}


            </div>
        </div>
    )
}

export default Footer