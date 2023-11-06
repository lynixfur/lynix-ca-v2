import Image from 'next/image'

export default function Home() {
  return (
    <div className="relative h-full" style={{ background: 'url(/test-v3.jpg)', backgroundSize: 'cover', backgroundRepeat: 'none', backgroundPosition: 'center' }}>
      <div className="flex items-center h-full justify-center bg-black bg-opacity-70 absolute z-20 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center">
            {/*<furimage src="/images/lynix-mulli-256.webp" alt="Lynix" className="h-32 w-32 mr-5 ml-5 mb-5 rounded-full float-animation" loading="lazy">
            </furimage></div>*/}
            <img src="/imgs/lynix.png" alt="Lynix" className="h-32 w-32 mr-5 ml-5 mb-5 rounded-full float-animation" loading="lazy" />
          </div>
          <h1 className="mb-4 text-4xl text-cyan-500 md:text-5xl lg:text-6xl" style={{ textShadow: '5px 5px #075985' }}>
            <span className="px-3">Lynix, the IT Specialist</span>
          </h1>
          <p className="text-lg px-5 md:px-0 md:text-2xl text-zinc-300">
            <span className="hidden">👋</span>VR enthusiast, Developer, Cybersecurity Student, and Furry, I'm seeking opportunities to change the world for better for everyone with IT.
          </p>
          <div className="flex justify-center space-x-4 mt-5">
            <a href="/projects" className="font-cyber px-4 py-2 bg-cyan-700 text-white hover:bg-cyan-800 transition-colors hover:text-white text-xl">Projects</a>
            <a href="/contact" className="font-cyber px-4 py-2 bg-cyan-700 text-white hover:bg-cyan-800 transition-colors hover:text-white text-xl">Contact Me</a>
          </div>
        </div>
      </div>
    </div>
  )
}
