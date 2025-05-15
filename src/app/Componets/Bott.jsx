import React from 'react'
import Link from 'next/link'

const Bott = () => {
return (
    <div className='flex items-center sm:flex-cols items-start justify-center h-[300px] p-9'>
        <div className='flex flex-col items-start justify-center p-4'>
            <h1 className='text-3xl font-bold'>Evotion</h1>
            <Link href="/">
                <h1 className='text-md mt-3'>Support</h1>
            </Link>
            <Link href="/">
                <h1 className='text-md mt-2'>Contact</h1>
            </Link>
        </div>
        <div className='
        md:flex flex-col items-start justify-center p-4'>
            <h1 className='text-lg '>The Gracechild Church</h1>
            
            <Link href="/">
                <h1 className='text-md mt-3'>Privacy Policy</h1>
            </Link>
            <Link href="/">
                <h1 className='text-md mt-3'>Terms of Use</h1>
            </Link>
            <Link href="/">
                <h1 className='text-md mt-3'>Vulnerability Disclosure Program</h1>
            </Link>
        </div>
    </div>
)
}

export default Bott
