// These styles apply to every route in the application
import "./globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-[#0E0E0E] text-white">
                <nav className="h-[120px] w-full flex place-content-between align-middle place-items-center bg-black/30 border-b border-white/10 backdrop-blur-md p-[25px]">
                    <img src="/logo.svg" alt="Logo" className="w-[69px]" />
                    <div className="">
                        <svg width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M34 3H16.0286H0" stroke="white" stroke-width="5"/>
                        <path d="M34 33L25.0143 33L17 33" stroke="white" stroke-width="5"/>
                        <path d="M34 18L20.7857 18L9 18" stroke="white" stroke-width="5"/>
                        </svg>
                    </div>
                </nav>
                {children}
            </body>
        </html>
    );
}
