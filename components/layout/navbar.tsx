import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <div className="md:hidden block w-full text-gray-200 bg-dark md:h-20 min-h-20 items-center">
        <div className="flex flex-col max-w-screen-xl h-full px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="p-4 flex flex-row items-center justify-between">
            <Link href="/" style={{ textShadow: '5px 5px #075985' }} className="flex items-center text-3xl font-semibold font-cyber tracking-widest text-cyan-400 uppercase rounded-lg focus:outline-none focus:shadow-outline">
              <img src="/imgs/lynix.png" alt="Lynix" className="h-12 w-12 mr-3 rounded-full" loading="lazy" />
              Lynix
            </Link>
            <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline text-cyan-500" aria-label="Toggle Nav">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-600">
        <div className="w-full hidden md:flex items-center justify-center py-5">
          <Link href="/" style={{ textShadow: '5px 5px #075985' }} className="flex items-center text-4xl font-semibold font-cyber tracking-widest text-cyan-400 uppercase rounded-lg focus:outline-none focus:shadow-outline">
           Lynix
          </Link>
        </div>
        <div className="hidden md:flex justify-center items-center mb-5">
          <nav id="nav" className="hidden flex-col pb-4 md:pb-0 md:flex md:justify-end md:flex-row h-full">
            <Link href="/projects" className="nav-link">
              Projects
            </Link>
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
            <Link href="/references" className="nav-link">
              References
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
            <Link href="/contact" className="bg-cyan-600 text-white
            flex 
            items-center 
            md:justify-center 
            font-cyber 
            text-xl 
            px-4 
            py-2 
            mt-2 
            ml-5
            transition-colors 
            hover:bg-cyan-700 
            focus:bg-cyan-700 
            md:mt-0 
            focus:outline-none
            font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2">
                <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
              </svg>

              Login
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
