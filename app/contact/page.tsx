export default function Contact() {
    return (
        <div className="min-h-screen p-5">
            <h1 className="text-5xl text-cyan-400 md:mt-0 mt-5" style={{ textShadow: '5px 5px #075985' }}>Contact Me</h1>
            <p className="mt-3 mb-3 text-lg font-semibold">
                You can contact me via the following social medias or chat applications. You may also aswell
                contact me via email.</p>

            <br />
            <h3 className="text-2xl mb-3">Email</h3>
            <p>
                <span className="text-cyan-500">Email:</span> lynix@lynix.ca
            </p><br /><br />
            <h3 className="text-2xl mb-3">Chat Apps</h3>
            <p>
                <span className="text-cyan-500">Matrix:</span> lynix@cyberfurz.chat
            </p>
            <p>
                <span className="text-cyan-500">Discord:</span> lynix.ca
            </p>
            <p>
                <span className="text-cyan-500">Telegram:</span> @cyberlynix
            </p><br /><br />
            <h3 className="text-2xl mb-3">Social Medias</h3>
            <p>
                <span className="text-cyan-500">Twitter / X:</span> @cyberlynix
            </p>
            <p>
                <span className="text-cyan-500">Bluesky:</span> @lynix.ca
            </p><br /><br />
            <h3 className="text-2xl mb-3">VR Platforms</h3>
            <p>
                <span className="text-cyan-500">Resonite:</span> Lynix
            </p>
            <p>
                <span className="text-cyan-500">VRChat:</span> LynixLynx
            </p>
        </div>
    )
}