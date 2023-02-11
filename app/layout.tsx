// These styles apply to every route in the application
import "./globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-[url(/backgrounddark.png)] bg-cover text-white overflow-x-hidden">
                <nav className="h-[105px] w-full fixed z-50 flex place-content-between align-middle place-items-center bg-black/70 border-b border-white/10 backdrop-blur-xl p-[25px]">
                    <a href="/"><img src="/logo.svg" alt="Logo" className="w-[50px]" /></a>
                    <div className="cursor-pointer">
                        <svg width="24" height="22" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M34 3H16.0286H0" stroke="white" stroke-width="5"/>
                        <path d="M34 33L25.0143 33L17 33" stroke="white" stroke-width="5"/>
                        <path d="M34 18L20.7857 18L9 18" stroke="white" stroke-width="5"/>
                        </svg>
                    </div>
                </nav>
                {children}
                <footer className="bg-[url(/footerdark.png)] bg-cover border-t border-white/10 px-[122px] max-[850px]:px-[50px] py-[122px]">
                    <div className="grid grid-cols-4 gap-x-[280px] gap-y-10 max-[1500px]:grid-cols-3 max-[1200px]:grid-cols-2 max-[980px]:grid-cols-1">
                        <div className="inline-block w-full">
                            <h1 className="text-[40px] font-bold max-[1200px]:text-[32px]">Pages</h1>
                            <ul className="w-full text-[28px] max-[1200px]:text-[23px]">
                                <li className="py-[15px]"><a href="/" className=" text-[#D6D6D6] py-[45px] hover:text-[#b3b3b3] duration-200">Home</a></li>
                                <li className="py-[15px]"><a href="/projects" className=" text-[#D6D6D6] py-[45px] hover:text-[#b3b3b3] duration-200">Projects</a></li>
                                <li className="py-[15px]"><a href="/brands" className=" text-[#D6D6D6] py-[45px] hover:text-[#b3b3b3] duration-200">Brands</a></li>
                                <li className="py-[15px]"><a href="/blog" className=" text-[#D6D6D6] py-[45px] hover:text-[#b3b3b3] duration-200">Blog</a></li>
                            </ul>
                        </div>
                        <div className="inline-block w-full">
                            <h1 className="text-[40px] font-bold w-screen max-[1200px]:text-[32px]">Work With Me</h1>
                            <ul className="w-full text-[28px] max-[1200px]:text-[23px]">
                                <li className="py-[15px]"><a href="/contact" className=" text-[#D6D6D6] py-[45px] hover:text-[#b3b3b3] duration-200">Contact</a></li>
                                <li className="py-[15px]"><a href="mailto:dukc@duckyhq.com" className=" text-[#D6D6D6] py-[45px] hover:text-[#b3b3b3] duration-200">dukc@duckyhq.com</a></li>
                                <li className="py-[15px]"><a href="https://discord.com" target="_blank" className=" text-[#D6D6D6] py-[45px] hover:text-[#b3b3b3] duration-200">dukc#1881</a></li>
                            </ul>
                        </div>
                        <div className="inline-block w-full">
                            <h1 className="text-[40px] font-bold max-[1200px]:text-[32px]">Socials</h1>
                            <ul className="w-full text-[28px] max-[1200px]:text-[23px]">
                                <li className="py-[15px]"><a href="/" target="_blank" className=" text-[#D6D6D6] py-[45px] hover:text-[#b3b3b3] duration-200">YouTube</a></li>
                                <li className="py-[15px]"><a href="/" target="_blank" className=" text-[#D6D6D6] py-[45px] hover:text-[#b3b3b3] duration-200">Discord</a></li>
                                <li className="py-[15px]"><a href="/" target="_blank" className=" text-[#D6D6D6] py-[45px] hover:text-[#b3b3b3] duration-200">GitHub</a></li>
                                <li className="py-[15px]"><a href="/" target="_blank" className=" text-[#D6D6D6] py-[45px] hover:text-[#b3b3b3] duration-200">Behance</a></li>
                                <li className="py-[15px]"><a href="/" target="_blank" className=" text-[#D6D6D6] py-[45px] hover:text-[#b3b3b3] duration-200">Dribbble</a></li>
                            </ul>
                        </div>
                        <div className="inline-block w-full">
                            <h1 className="text-[40px] font-bold max-[1200px]:text-[32px]">Brands</h1>
                            <ul className="w-full text-[28px] max-[1200px]:text-[23px]">
                                <li className="py-[15px]"><a href="/brands#duckyhq" className=" text-[#D6D6D6] py-[45px] hover:text-[#b3b3b3] duration-200">DuckyHQ</a></li>
                                <li className="py-[15px]"><a href="/brands#dukc" className=" text-[#D6D6D6] py-[45px] hover:text-[#b3b3b3] duration-200">dukc</a></li>
                                <li className="py-[15px]"><a href="/brands#utils" className=" text-[#D6D6D6] py-[45px] hover:text-[#b3b3b3] duration-200">Utils</a></li>
                                <li className="py-[15px]"><a href="https://duckyhq.creator-spring.com/" target="_blank" className=" text-[#D6D6D6] py-[45px] hover:text-[#b3b3b3] duration-200">Merch Shop</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr className="border border-white/10 my-[61px]" />
                    <div className="flex place-content-between align-middle place-items-center pt-2">
                        <a href="/">
                            <img src="/logo.svg" alt="DuckyHQ Logo" className="w-[90px] h-[90px] align-middle max-[980px]:w-[69px] max-[980px]:h-[69px]" />
                        </a>
                        <h1 className="text-[20px] text-[#D6D6D6]">&copy; DuckyHQ 2023</h1>
                    </div>
                </footer>
            </body>
        </html>
    );
}
