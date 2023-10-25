// lib
import { getBlogPost } from "../../../lib/cms";
// 
import styles from './page.module.css';

type Props = {
  params: {
    slug: string;
  };
};
export default async function BlogPost({ params }: Props) {
  const { slug } = params;

  const blogPost = await getBlogPost(slug[0]);

  return (
    <>
      <h1>Blog post page</h1>
      <div className={styles["content-container"]}>
        <h3>Title: {blogPost?.title}</h3>
        <p>Description: {blogPost?.description}</p>
      </div>
    </>
  );
}
