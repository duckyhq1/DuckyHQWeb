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
            <div id="landing" className="px-[122px] pb-[62px] max-[850px]:px-[50px]">
                <div className="grid grid-cols-2 grid-rows-1 max-[1580px]:grid-cols-1 max-[1580px]:grid-rows-[auto, 1fr]">
                    <div className="pt-64 z-10 h-[1220px] max-[1580px]:h-full max-[1580px]:pb-[100px]">
                        <p className="text-[45px] text-shadow-white max-[1580px]:text-3xl max-[1580px]:pb-7">
                            Hi, I am dukc,
                        </p>
                        <div className="w-[84rem] max-[1580px]:w-full">
                            <h1 className="text-[170px] font-bold text-shadow-white inline max-[1580px]:text-8xl max-[550px]:text-[60px]">
                                At DuckyHQ I do{" "}
                            </h1>
                            <h1 className="text-[170px] max-[1580px]:text-8xl max-[550px]:text-[60px] text-transparent bg-clip-text bg-gradient-to-r from-[#FF0061] to-[#0081FF] font-bold text-shadow-white inline">
                                UI Design 
                            </h1>
                        </div>
                    </div>
                    <div className="px-10 pb-8 w-full h-full shadow-2xl cursor-pointer bg-featured bg-cover bg-center pt-[1120px] max-[444px]:pt-[280px] text-bottom">
                        <div className="flex place-content-between align-middle place-items-center">
                            <h1 className="text-[50px] max-[1050px]:text-[45px] w-full max-[444px]:text-[35px]">
                                Featured Project
                            </h1>
                            <FaArrowRight className="text-[30px] max-[444px]:hidden" />
                        </div>
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
                className="mx-[122px] pb-[100px] border-t border-white/10 max-[850px]:mx-[50px]"
            >
                <h1 className="text-[80px] py-[16px] font-bold max-[460px]:text-[50px]">
                    Projects
                </h1>
                <div className="grid grid-rows-1 grid-cols-4 w-[179vw] max-[1050px]:w-full h-full gap-[100px] max-[850px]:gap-[50px] max-[1050px]:grid-cols-1 max-[1050px]:grid-rows-auto">
                    {postPreviews}
                </div>
            </div>
            <div
                id="about"
                className="mx-[122px] pb-[122px] border-t border-white/10 pt-[100px] grid grid-cols-2 max-[1520px]:grid-cols-1 max-[850px]:mx-[50px]"
            >
                <img src="/gradient.png" alt="Gradient" className="max-[1520px]:w-full max-[1520px]:h-96" />
                <div className="flex place-content-end flex-wrap mb-[85px]">
                    <h1 className="text-[170px] font-bold w-[99vw] flex-nowrap text-right max-[1520px]:text-left pb-[12px] max-[1580px]:text-8xl max-[1580px]:py-8 max-[570px]:text-6xl">
                        About Me
                    </h1>
                    <p className="text-right text-[40px] w-full pb-[28px] max-[570px]:text-[26px] max-[1520px]:text-left max-[420px]:text-[22px]">
                        I created an organization passionate about modern, fluent
                        UI/UX design, silky smooth motion design with
                        informative and entertaining videos, quick web
                        development, using video games as a tool for
                        architecture, and to have fun!
                    </p>
                    <div className="pt-[56px] flex place-content-end max-[444px]:hidden max-[1520px]:place-content-start max-[1520px]:text-left">
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
                className="mx-[122px] pb-[122px] border-t border-white/10 max-[850px]:mx-[50px]"
            >
                <div className="py-[21px]">
                    <h1 className="font-bold text-[80px] max-[1580px]:text-6xl">Blog</h1>
                </div>
                <div className="grid grid-cols-3 grid-rows-1 gap-[100px] max-[850px]:gap-[50px] max-[1070px]:grid-cols-2 max-[580px]:grid-cols-1">
                    {blogPreviews}
                </div>
            </div>
        </>
    );
}
