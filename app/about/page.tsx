export default function About() {
    return (
        <div className="min-h-screen p-5">
            <h1 className="text-5xl text-center text-cyan-400" style={{ textShadow: '5px 5px #075985' }}>About Me</h1>
            <h3 className="text-center text-3xl mt-3">Hey! I'm Anthony (aka Lynix) <span className="wave">👋</span> </h3>
            <div className="flex justify-center">
                <p className="text-gray-300 text-lg font-cyber mt-3 w-4/5 text-center">
                    I began my journey in IT back in 2013, where I started by learning basic
                    HTML and C++ from university books. Since then, I've relied on resources
                    like Google and YouTube to expand my knowledge and learn new programming
                    languages. In 2022, I transitioned into the fields of System
                    Administration and Cybersecurity, which have been incredibly enriching
                    experiences. I've been constantly learning and I'm eager to continue
                    growing in these areas. Currently, I'm in my second year of studying
                    Cybersecurity in college. Aside from my IT pursuits, I also find
                    enjoyment in VR gaming, and I proudly identify as a full-time furry.<br />
                    <span className="text-cyan-500">(This content is being updated W.I.P)</span>
                </p>
            </div>
        </div>
    )
}