import { Post } from '@/app/types/Post';
import CommentForm from './comment-form';

async function getPost(slug: string): Promise<Post> {
  const response = await fetch('http://localhost:3001/posts?slug=' + slug);
  const [post] = await response.json();

  return post;
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getPost(slug);

  return (
    <>
      <article>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </article>
      <CommentForm />
    </>
  );
}
