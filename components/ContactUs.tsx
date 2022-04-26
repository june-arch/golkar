import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ContactUs = () => {
    const Maps = dynamic(() => import('../components/Maps'))
    return (
        <section className='flex flex-col 2xl:px-20 py-10'>
            <div className='text-center text-2xl sm:text-3xl md:text4xl lg:text-5xl'>
                <div className='mb-10'>Hubungi Kami</div>
            </div>
            <div id="map" className=''>
                <Maps />
            </div>
            <div className='lg:mt-10 mt-2 p-4 w-full'>
                <Link href="https://wa.me/6281379693637?text=Hello+Saya+ingin+bertanya+%3F">
                    <a target={'_blank'} rel="noopener noreferrer" className='cursor-pointer flex flex-row rounded-full w-[20vh] md:w-[30vh] lg:w-[47vh] text-slate-700 hover:text-black transition-colors duration-150 bg-white focus:shadow-outline hover:bg-slate-200 shadow-md'>
                        <div className='h-12 w-12 md:h-16 md:w-16 lg:h-24 lg:w-24'><Image src="/whatsapp.svg" className='bg-cover rounded-full' alt='wa' height='100' width='100' objectFit='contain' /></div>
                        <div className='ml-4 text-sm sm:text-md md:text-2xl lg:text-4xl self-center'>
                            081379693637
                        </div>
                    </a>
                </Link>
            </div>
        </section>
    )
}

export default ContactUs