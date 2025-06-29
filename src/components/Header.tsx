import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import logo from "../../public/logo.png"

export default function Header() {
    return (
        <header className='flex justify-between items-center h-[75px] px-4 md:px-8 lg:px-16'>
            <div>
                <Image src={logo} width={150} height={100} alt='logo' />
            </div>
            <nav className='lg:flex gap-16'>
                <ul className='lg:flex item-center gap-16'>
                    <li className='mb-4 lg:mb-0'><Link href="/" >Home</Link></li>
                    <li className='mb-4 lg:mb-0'><Link href="/overview" >Overview</Link></li>
                    <li className='mb-4 lg:mb-0'><Link href="/" >About</Link></li>
                    <li className='mb-4 lg:mb-0'><Link href="/" >About</Link></li>
                </ul>
                <div>
                    <Link href="/overview" className='px-4 py-2 text-white rounded-full bg-[#7B04CE] font-bold'>Get Started</Link>
                </div>
            </nav>

            <div className='lg:hidden'></div>
        </header>
    )
}