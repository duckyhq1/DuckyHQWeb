
import fs from 'fs';
import matter from 'gray-matter';
import { BlogMetadata } from "./BlogMetadata";

const getBlogMetadata = (): BlogMetadata[] => {
    const folder = "posts/blog/";
    const files = fs.readdirSync(folder);
    const markdownBlogs = files.filter((file) => file.endsWith(".md"));

    const blogs = markdownBlogs.map((filename) => {
        const fileContents = fs.readFileSync(`posts/blog/${filename}`, "utf8");
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            type: matterResult.data.type,
            image: matterResult.data.image,
            slug: filename.replace(".md", "")
        }
    })

    return blogs;
}

export default getBlogMetadata;

