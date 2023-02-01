// These styles apply to every route in the application
import "./globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-[#020202] text-white overflow-x-hidden">
                <nav className="h-[105px] w-full fixed z-50 flex place-content-between align-middle place-items-center bg-black/70 border-b border-white/10 backdrop-blur-md p-[25px]">
                    <img src="/logo.svg" alt="Logo" className="w-[50px]" />
                    <div className="cursor-pointer">
                        <svg width="24" height="22" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M34 3H16.0286H0" stroke="white" stroke-width="5"/>
                        <path d="M34 33L25.0143 33L17 33" stroke="white" stroke-width="5"/>
                        <path d="M34 18L20.7857 18L9 18" stroke="white" stroke-width="5"/>
                        </svg>
                    </div>
                </nav>
                {children}
                <footer className="bg-white/5 border-t border-white/10 px-[122px] py-[122px]">
                    <div className="grid grid-cols-4">
                        <div className="inline-block">
                            <h1 className="text-[40px] font-bold">Pages</h1>
                            <ul>
                                <li className="py-[15px]"><a href="/" className="text-[28px] text-[#D6D6D6] py-[45px]">Home</a></li>
                                <li className="py-[15px]"><a href="/" className="text-[28px] text-[#D6D6D6] py-[45px]">Projects</a></li>
                                <li className="py-[15px]"><a href="/" className="text-[28px] text-[#D6D6D6] py-[45px]">Brands</a></li>
                                <li className="py-[15px]"><a href="/" className="text-[28px] text-[#D6D6D6] py-[45px]">Blog</a></li>
                            </ul>
                        </div>
                        <div className="inline-block">
                            <h1 className="text-[40px] font-bold">Work With Me</h1>
                            <ul>
                                <li className="py-[15px]"><a href="/" className="text-[28px] text-[#D6D6D6] py-[45px]">Contact</a></li>
                                <li className="py-[15px]"><a href="/" className="text-[28px] text-[#D6D6D6] py-[45px]">dukc@duckyhq.com</a></li>
                                <li className="py-[15px]"><a href="/" className="text-[28px] text-[#D6D6D6] py-[45px]">dukc#1881</a></li>
                            </ul>
                        </div>
                        <div className="inline-block">
                            <h1 className="text-[40px] font-bold">Socials</h1>
                            <ul>
                                <li className="py-[15px]"><a href="/" className="text-[28px] text-[#D6D6D6] py-[45px]">YouTube</a></li>
                                <li className="py-[15px]"><a href="/" className="text-[28px] text-[#D6D6D6] py-[45px]">Discord</a></li>
                                <li className="py-[15px]"><a href="/" className="text-[28px] text-[#D6D6D6] py-[45px]">GitHub</a></li>
                                <li className="py-[15px]"><a href="/" className="text-[28px] text-[#D6D6D6] py-[45px]">Behance</a></li>
                                <li className="py-[15px]"><a href="/" className="text-[28px] text-[#D6D6D6] py-[45px]">Dribbble</a></li>
                            </ul>
                        </div>
                        <div className="inline-block">
                            <h1 className="text-[40px] font-bold">Brands</h1>
                            <ul>
                                <li className="py-[15px]"><a href="/" className="text-[28px] text-[#D6D6D6] py-[45px]">DuckyHQ</a></li>
                                <li className="py-[15px]"><a href="/" className="text-[28px] text-[#D6D6D6] py-[45px]">dukc</a></li>
                                <li className="py-[15px]"><a href="/" className="text-[28px] text-[#D6D6D6] py-[45px]">Alive</a></li>
                                <li className="py-[15px]"><a href="/" className="text-[28px] text-[#D6D6D6] py-[45px]">Merch Shop</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex place-content-between align-middle place-items-center pt-2">
                        <img src="/logo.svg" alt="DuckyHQ Logo" className="w-[90px] h-[90px] align-middle" />
                        <h1 className="text-[98px] text-shadow-white text-transparent bg-clip-text bg-gradient-to-r from-[#f23681] to-[#1988ef] font-bold">&copy; DuckyHQ 2023</h1>
                    </div>
                </footer>
            </body>
        </html>
    );
}
