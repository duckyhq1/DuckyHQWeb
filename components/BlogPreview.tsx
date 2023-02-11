import Link from "next/link";
import { BlogMetadata } from "./BlogMetadata";

const BlogPreview = (props: BlogMetadata) => {
    return (
        <Link href={`/blog/${props.slug}`}>
            <div className="h-full">
                <div style={{backgroundImage: `url(${props.image})`}} className="bg-cover aspect-video">
                    <p className="text-white/30 text-[25px] p-[25px]">{props.type}</p>
                </div>
                <p className="text-[35px] w-full pt-[45px]">{props.title}</p>
            </div>
        </Link>
    )
}

export default BlogPreview;