import moment from "moment";

import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";

import getBlogMetadata from "../components/getBlogMetadata";
import BlogPreview from "../components/BlogPreview";

import { FaArrowRight } from "react-icons/fa";

export default function Page() {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post} />
    ))

    const blogMetadata = getBlogMetadata();
    const blogPreviews = blogMetadata.map((blog) => (
        <BlogPreview key={blog.slug} {...blog} />
    ))

    return (
        <>
            <div id="landing" className="mx-[122px] pb-[62px]">
                <div className="grid grid-cols-2 grid-rows-1 max-[1580px]:grid-cols-1 max-[1580px]:grid-rows-[auto, 1fr]">
                    <div className="pt-64 z-10 h-[1220px] max-[1580px]:h-full max-[1580px]:pb-[100px]">
                        <p className="text-[45px] text-shadow-white max-[1580px]:text-3xl max-[1580px]:pb-7">
                            Hi, I am dukc,
                        </p>
                        <div className="w-[84rem] max-[1580px]:w-full">
                            <h1 className="text-[170px] font-bold text-shadow-white inline max-[1580px]:text-8xl">
                                At DuckyHQ I do{" "}
                            </h1>
                            <h1 className="text-[170px] max-[1580px]:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-[#FF0061] to-[#0081FF] font-bold text-shadow-white inline">
                                UI Design 
                            </h1>
                        </div>
                    </div>
                    <div className="pl-10 pb-8 w-full h-full shadow-2xl cursor-pointer bg-featured bg-cover bg-center pt-[500px] text-bottom">
                        <h1 className="text-[65px] font-bold min-[1580px]:pt-[588px]">
                            Featured Project
                        </h1>
                    </div>
                    <div className="inline text-[25px] relative bottom-[27px] max-[1580px]:bottom-0 max-[1580px]:pt-[100px] max-[1580px]:pb-[40px]">
                        <p className="inline pr-[141px]">
                            {moment().format("MMM DD YYYY")}
                        </p>
                        <p className="inline pr-[141px]">{moment().format("hh:mm A")}</p>
                        <p className="inline">BC, Canada</p>
                    </div>
                </div>
            </div>
            <div
                id="projects"
                className="mx-[122px] pb-[100px] border-t border-white/10"
            >
                <h1 className="text-[80px] py-[16px] font-bold">
                    Projects
                </h1>
                <div className="grid grid-rows-1 grid-cols-4 w-[179vw] max-[1050px]:w-full h-full gap-[100px] max-[1050px]:grid-cols-1 max-[1050px]:grid-rows-auto">
                    {postPreviews}
                </div>
            </div>
            <div
                id="about"
                className="mx-[122px] pb-[122px] border-t border-white/10 pt-[100px] grid grid-cols-2 grid-rows-1"
            >
                <img src="/gradient.png" alt="Gradient" className="" />
                <div className="flex place-content-end flex-wrap mb-[85px]">
                    <h1 className="text-[170px] font-bold w-screen text-right pb-[12px]">
                        About Me
                    </h1>
                    <p className="text-right text-[40px] w-full pb-[28px]">
                        I created an organization passionate about modern, fluent
                        UI/UX design, silky smooth motion design with
                        informative and entertaining videos, quick web
                        development, using video games as a tool for
                        architecture, and to have fun!
                    </p>
                    <div className="pt-[56px] flex place-content-end">
                        <a href="" className="inline-block pl-[31px]">
                            <img src="/btns/YT.svg" alt="" />
                        </a>
                        <a href="" className="inline-block pl-[31px]">
                            <img src="/btns/Discord.svg" alt="" />
                        </a>
                        <a href="" className="inline-block pl-[31px]">
                            <img src="/btns/Github.svg" alt="" />
                        </a>
                        <a href="" className="inline-block pl-[31px]">
                            <img src="/btns/Behance.svg" alt="" />
                        </a>
                        <a href="" className="inline-block pl-[31px]">
                            <img src="/btns/Dribbble.svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <div
                id="blog"
                className="mx-[122px] pb-[122px] border-t border-white/10"
            >
                <div className="py-[21px]">
                    <h1 className="font-bold text-[80px]">Blog</h1>
                </div>
                <div className="grid grid-cols-3 grid-rows-1 gap-[100px]">
                    {blogPreviews}
                </div>
            </div>
        </>
    );
}
