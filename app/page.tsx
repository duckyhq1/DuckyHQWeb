"use client";

import moment from "moment";
import { useEffect } from "react";
import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";

export default function Page() {
    useEffect(() => {
        function clockInterval() {
            let clock = moment().format("hh:mm:ss A");
            let text = document.getElementById("clock") as HTMLParagraphElement;
            text.innerHTML = clock;
        }
        setInterval(clockInterval, 1000);
    });

    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post} />
    ))

    return (
        <>
            <div id="landing" className="mx-[122px] pb-[62px]">
                <div className="grid grid-cols-2 grid-rows-1">
                    <div className="pt-64 z-10">
                        <p className="text-[45px] text-shadow-white">
                            Hey, I'm dukc,
                        </p>
                        <div className="w-[75rem]">
                            <h1 className="text-[170px] font-bold text-shadow-white inline">
                                At DuckyHQ I do{" "}
                            </h1>
                            <h1 className="text-[170px] text-transparent bg-clip-text bg-gradient-to-r from-[#FF0061] to-[#0081FF] font-bold text-shadow-white inline">
                                UI Design 
                            </h1>
                        </div>
                    </div>
                    <div className="pl-10 ml-12 pb-[120px] w-[788px] h-[1213px] cursor-pointer bg-featured bg-cover bg-center pt-[1095px] text-bottom">
                        <h1 className="text-[65px] font-bold">
                            Featured Project
                        </h1>
                    </div>
                    <div className="inline text-[25px] relative bottom-[27px]">
                        <p className="inline pr-[141px]">
                            {moment().format("MMM DD YYYY")}
                        </p>
                        <p className="inline pr-[141px]" id="clock"></p>
                        <p className="inline">BC, Canada</p>
                    </div>
                </div>
            </div>
            <div
                id="projects"
                className="mx-[122px] pb-[100px] border-t border-white/10"
            >
                <h1 className="text-[45px] py-[16px]">
                    Projects {">"}
                    {">"}
                    {">"}
                </h1>
                <div className="grid grid-rows-1 grid-cols-4 w-[179vw] h-[600px] gap-[100px]">
                    <div className="pl-10 pb-[120px] cursor-pointer bg-featured bg-cover bg-center pt-[470px] text-bottom">
                        <h1 className="text-[65px] font-bold">
                            Featured Project
                        </h1>
                    </div>
                    <div className="pl-10 pb-[120px] cursor-pointer bg-featured bg-cover bg-center pt-[470px] text-bottom">
                        <h1 className="text-[65px] font-bold">
                            Featured Project
                        </h1>
                    </div>
                    <div className="pl-10 pb-[120px] cursor-pointer bg-featured bg-cover bg-center pt-[470px] text-bottom">
                        <h1 className="text-[65px] font-bold">
                            Featured Project
                        </h1>
                    </div>
                    <div className="pl-10 pb-[120px] cursor-pointer bg-featured bg-cover bg-center pt-[470px] text-bottom">
                        <h1 className="text-[65px] font-bold">
                            Featured Project
                        </h1>
                    </div>
                </div>
                {postPreviews}
            </div>
            <div id="output"></div>
            <div
                id="about"
                className="mx-[122px] pb-[122px] border-t border-white/10 pt-[100px] grid grid-cols-2 grid-rows-1"
            >
                <img src="/gradient.png" alt="Gradient" className="block" />
                <div className="">
                    <h1 className="text-[250px] font-bold w-screen relative right-[20rem] pt-[9px]">
                        About Us
                    </h1>
                    <p className="text-right text-[40px] w-[1038px] relative right-[12.6rem] pb-[28px]">
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
                <div className="py-[21px] flex place-content-between">
                    <h1 className="font-bold text-[70px]">Blog</h1>
                    <div className="pt-9">
                        <div className="bg-white/5 cursor-pointer border border-white/10 px-[30px] py-[13px] text-[20px] rounded-full mx-[13px] inline text-center">
                            All
                        </div>
                        <div className="bg-white/5 cursor-pointer border border-white/10 px-[30px] py-[13px] text-[20px] rounded-full mx-[13px] inline text-center">
                            Dev Log
                        </div>
                        <div className="bg-white/5 cursor-pointer border border-white/10 px-[30px] py-[13px] text-[20px] rounded-full mx-[13px] inline text-center">
                            Design Book
                        </div>
                        <div className="bg-white/5 cursor-pointer border border-white/10 px-[30px] py-[13px] text-[20px] rounded-full mx-[13px] inline text-center">
                            Video
                        </div>
                        <div className="bg-white/5 cursor-pointer border border-white/10 px-[30px] py-[13px] text-[20px] rounded-full mx-[13px] inline text-center">
                            Other
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-3 grid-rows-1 gap-[100px]">
                    <div className="cursor-pointer">
                        <div className="bg-[url(/placeholder2.jpg)] bg-cover aspect-video">
                            <p className="text-white/30 text-[25px] p-[25px]">Dev Log</p>
                        </div>
                        <p className="text-[35px] w-full pt-[45px]">How I Made This Website</p>
                    </div>
                    <div className="cursor-pointer">
                        <div className="bg-[url(/placeholder2.jpg)] bg-cover aspect-video">
                            <p className="text-white/30 text-[25px] p-[25px]">Video</p>
                        </div>
                        <p className="text-[35px] w-full pt-[45px]">UI Course Part 1 // Consistant Design</p>
                    </div>
                    <div className="cursor-pointer">
                        <div className="bg-[url(/placeholder2.jpg)] bg-cover aspect-video">
                            <p className="text-white/30 text-[25px] p-[25px]">Design Book</p>
                        </div>
                        <p className="text-[35px] w-full pt-[45px]">The Style of DuckyHQ Logos/Brands</p>
                    </div>
                </div>
            </div>
        </>
    );
}
