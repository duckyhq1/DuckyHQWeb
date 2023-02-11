import Link from "next/link";
import { PostMetadata } from "./PostMetadata";
import { FaArrowRight } from "react-icons/fa";

const PostPreview = (props: PostMetadata) => {
    return (
        <Link href={`/posts/${props.slug}`} className="w-full h-full">
            <div style={{backgroundImage: `url(${props.image})`}} className="px-10 pb-[25px] cursor-pointer h-full w-full bg-cover bg-center pt-[400px] max-[444px]:pt-[260px] text-bottom">
                <div className="flex place-content-between align-middle place-items-center">
                    <h1 className="text-[50px] max-[1050px]:text-[45px] w-full max-[444px]:text-[35px]">
                        {props.title}
                    </h1>
                    <FaArrowRight className="text-[30px] max-[444px]:hidden" />
                </div>
            </div>
        </Link>
    )
}

export default PostPreview;