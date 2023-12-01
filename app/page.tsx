import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative h-full" style={{ background: 'url(/test-v3.jpg)', backgroundSize: 'cover', backgroundRepeat: 'none', backgroundPosition: 'center' }}>
      <div className="flex items-center h-full justify-center bg-black bg-opacity-70 absolute z-20 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center relative h-[375px]">
            <img src="/lynix_signature_glitch.png" alt="Lynix" className="w-[450px] mr-5 ml-5 mb-5 rounded-full float-animation absolute z-10" loading="lazy" />
            <img src="/lynix_solo.png" alt="Lynix" className="w-[450px] mr-5 ml-5 mb-5 rounded-full float-animation-inverse absolute z-20" loading="lazy" />
          </div>
          <div className='opacity-0 h-0'>{'(Image Artwork by: ProtoReese)'}</div>
          <h1 className="mb-4 text-4xl text-cyan-500 md:text-5xl lg:text-6xl" style={{ textShadow: '5px 5px #075985' }}>
            <span className="px-3">Lynix, the IT Specialist</span>
          </h1>
          <p className="text-lg px-5 md:px-0 md:text-2xl text-zinc-300">
            <span className="hidden">👋</span>VR enthusiast, Developer, Cybersecurity Student, and Furry, I'm seeking opportunities to change the world for better for everyone with IT.
          </p>
          <div className="flex justify-center space-x-4 mt-5">
            <a href="/projects" className="font-cyber font-bold  text-gray-950 px-4 py-2 bg-green-500 shadow-lg shadow-green-500/50 hover:bg-green-800 transition-colors hover:text-white text-xl">Projects</a>
            <a href="/contact" className="font-cyber font-bold text-gray-950  px-4 py-2 bg-cyan-500 shadow-lg shadow-cyan-500/50 hover:bg-cyan-800 transition-colors hover:text-white text-xl">Contact Me</a>
          </div>
        </div>
      </div>
    </div>
  )
}
