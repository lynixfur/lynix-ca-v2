'use client'

import moment from 'moment';
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Blog() {

    return (
        <div className="min-h-screen md:py-5 md:px-10 px-5 py-2">
            <h1 className="text-5xl text-cyan-400 md:mt-0 mt-5" style={{ textShadow: '5px 5px #075985' }}>My Fursona - Lynix</h1>
            <p className="mt-3 mb-5 text-lg font-semibold">Meet lynix, your local cybernetic lynx!</p>

            <p className="mt-3 text-lg md:w-2/3 w-full">
                <span className="text-cyan-500 text-lg">What's a fursona?</span> A fursona
                is a customized animal character representing someone in the furry fandom,
                ranging from anthropomorphic personas to roleplay characters or digital
                mascots.
            </p>
            <p className=" mt-2 text-lg md:w-2/3 w-full">
                <span className="text-cyan-500 text-lg">What's a furry?</span> A furry is
                someone who is a fan or enthusiast of characters that depict animals with
                human characteristics, such as talking, walking on two legs, and displaying
                human-like emotions and behaviors.
            </p>

            <hr className='border-cyan-600 my-5' />

            <div className='md:flex block md:space-x-2 space-x-0 md:space-y-0 space-y-1'>
                <div className='md:w-1/4 w-full bg-cyan-600 text-black text-center font-semibold text-lg px-4 py-2'>
                    Information
                </div>
                <div className='md:w-1/4 w-full bg-gray-700 text-white text-center font-semibold  text-lg px-4 py-2'>
                    Gallery
                </div>
                <div className='md:w-1/4 w-full bg-gray-700 text-white text-center font-semibold  text-lg px-4 py-2'>
                    Stickers
                </div>
                <div className='md:w-1/4 w-full bg-gray-700 text-white text-center font-semibold  text-lg px-4 py-2'>
                    Friends
                </div>
            </div>

            <div className='mt-10 pb-10'>
                <img src="/imgs/ref-sona.png" className='md:w-1/2 w-full float-right mb-5 ml-10' alt="Lynix's Fursona Refsheet made by Maxwell_Wolf" />
                <p className="text-lg text-zinc-300">
                    Lynix is a captivating fusion of natural grace and technological prowess. This extraordinary space-dwelling cybernetic lynx is characterized by its dark fur coat, accentuated by luminous blue cybernetic lines and eyes. These striking blue and green eyes possess the unique ability to shift colors, serving as dynamic indicators of various modes and statuses during interactions. This blend of nature and technology creates a visually stunning and adaptable guardian.
                    <br /><br />
                    One of Lynix's standout features is its capacity to receive external data, allowing it to adapt to its environment and effectively detect potential cyber threats. This capability enhances its cybernetic features, making Lynix a truly versatile and vigilant entity. With its ever-watchful eyes and adaptive nature, Lynix stands as a formidable protector in the realm of information technology.
                    <br /><br />
                    Lynix's biological self has undergone extensive modifications to enable survival in the challenging environment of space. These modifications, complemented by advanced cybernetic implants, empower Lynix to thrive and navigate the cosmos with ease. The combination of these enhancements makes Lynix a marvel of adaptability and an inspiring symbol of the future's potential.
                    <br /><br />
                    Driven by a strong desire to assist others and contribute to the advancement of the future, Lynix's presence is particularly impactful in dynamic settings such as raves and vibrant gatherings. During these events, Lynix's cybernetic eyes and lines come to life, displaying a mesmerizing array of colors that add an electrifying dimension to the atmosphere. It becomes a living work of art, enhancing the overall experience for those in attendance.
                    <br /><br />
                    Lynix's versatility extends beyond its visual display. Its cybernetic features also include a nose that can serve as a contact point for the seamless exchange of information. This feature exemplifies Lynix's commitment to facilitating communication and collaboration, further solidifying its role as a bridge between the natural world and the digital frontier.
                    <br /><br />
                    <span className='text-cyan-500 italic'>Notice: This content is W.I.P and may change at any point.<br/>Reference Sheet by: Maxwell_Wolf</span>
                </p>
            </div>
        </div>
    )
}