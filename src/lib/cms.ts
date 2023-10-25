import { blogPosts } from "../data/blogPost";

const delay = async (time: number) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, time);
  });
};

export const getAllBlogPost = async () => {
  await delay(3000);

  return [...Array(10)].map((_, i) => ({
    title: `This is title ${i}`,
    slug: `this-is-post-${i}`,
    body: "Blah",
  }));
};

export const getBlogPost = async (blogId: string) => {
  await delay(3000);

  return blogPosts.find((blog) => blog.id === blogId);
};
