import Link from "next/link";
// styles
import styles from "./page.module.css";
// lib
import { getAllBlogPost } from "../../lib/cms";

export default async function Blog() {
  const blogPosts = await getAllBlogPost();

  return (
    <>
      <h1>Blog page</h1>
      <div className={styles["blog-post-container"]}>
        {blogPosts.map((post) => (
          <div key={post.slug} className={styles["blog-post-wrapper"]}>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </div>
        ))}
      </div>
    </>
  );
}
