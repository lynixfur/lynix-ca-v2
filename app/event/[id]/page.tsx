'use client'

import moment from 'moment';
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Blog() {

    return (
        <div className="min-h-screen">
            <div className="relative">
                <img src="https://www.thetimes.co.uk/travel/wp-content/uploads/sites/6/2021/06/Toronto-Ontario-Canada_Credit_GettyImages-1001151076-1.jpg?w=2200&h=880&crop=1" className='w-full h-[600px] object-cover' alt="Lynix's Fursona Refsheet made by Maxwell_Wolf" />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center p-10">
                    <div>
                        <h1 className='text-4xl font-bold'>Furnal Equinox 2024: Under the Sea</h1> <br />
                        <p className='font-bold'>March 15th 2024 - March 17th 2024 <span className='ml-3 text-gray-950 bg-green-500 py-1.5 px-2 rounded-full'>Going (Confirmed)</span></p>
                    </div>
                </div>
            </div>
            <div className="flex space-x-1">
                <div className='flex-1 bg-gray-800 text-center text-xl py-2 text-semibold'>
                    Checklist
                </div>
                <div className='flex-1 bg-gray-800 text-center text-xl py-2 text-semibold'>
                    Meetup List
                </div>
                <div className='flex-1 bg-gray-800 text-center text-xl py-2 text-semibold'>
                    Geolocation
                </div>
                <div className='flex-1 bg-gray-800 text-center text-xl py-2 text-semibold'>
                    Photos
                </div>
            </div>

            {/* Tab Checklist */}
            <div className='p-10'>
                <div className="flex items-center space-x-4  mb-5">
                    <h1 className='text-4xl font-semibold'>Flight Details</h1>
                    <span className='ml-3 text-red-950 bg-red-500 py-1.5 px-4 rounded-full font-bold'>Air Canada</span>
                </div>
                <p className='text-zinc-400'>Arrival Flight: <span className='font-bold'>AC 647 ({'YQM -> YYZ'})</span></p>
                <p className='text-zinc-400'>Departure Flight: <span className='font-bold'>AC 648 ({'YYZ -> YQM'})</span></p>

                <div className="box grid grid-cols-2 gap-2 rounded-lg border border-gray-500 p-6 max-w-[700px] my-5">
                    <div className="flight-time col-span-2 py-2"></div>
                    <div className="departure mr-4 border-r border-gray-500">
                        <h2 className="text-2xl font-bold mb-3">YQM (Moncton)</h2>
                        <p className="text-white">5:10 am</p>
                    </div>
                    <div className="arrival">
                        <h2 className="text-2xl font-bold mb-3">YYZ (Toronto)</h2>
                        <p className="text-white">6:42 am</p>
                    </div>
                    <hr className="col-span-2 my-2 w-full border-t border-gray-500" />
                    <div className="updated py-2 text-sm text-white opacity-60">Updated 0mins ago</div>
                    <div className="source text-sm text-white opacity-60">Source: Lynix API</div>
                </div>

                <p className='text-zinc-400 mt-10'>More Information unavailable at this time, LynixAPI is still processing information about flight path.</p>


                <h1 className='text-4xl font-semibold my-5'>Event Pre-Requirement Checks</h1>
                <p className='text-zinc-400'>Unavailable at this time, processing re-check.</p>
            </div>
        </div>
    )
}