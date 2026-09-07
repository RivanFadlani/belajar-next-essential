import Link from 'next/link';
import { Post } from '../types/Post';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Posts',
};

async function getPosts(): Promise<Post[]> {
  const response = await fetch('http://localhost:3001/posts');
  const json = await response.json();

  console.log(json);

  return json;
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <>
      <h1>Post Page</h1>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </h2>
        </article>
      ))}
    </>
  );
}
