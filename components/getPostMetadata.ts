
import fs from 'fs';
import matter from 'gray-matter';
import { PostMetadata } from "./PostMetadata";

const getPostMetadata = (): PostMetadata[] => {
    const folder = "posts/projects/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    const posts = markdownPosts.map((filename) => {
        const fileContents = fs.readFileSync(`posts/projects/${filename}`, "utf8");
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            image: matterResult.data.image,
            slug: filename.replace(".md", "")
        }
    })

    return posts;
}

export default getPostMetadata;

