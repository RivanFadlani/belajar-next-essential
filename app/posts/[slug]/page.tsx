import { createComment } from '@/app/action';
import { Post } from '@/app/types/Post';

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
      <section className="mt-4 ml-4">
        <h1 className="text-2xl">Comments</h1>
        <form className="flex w-72 flex-col" action={createComment}>
          <textarea
            className="h-40 bg-white text-black"
            placeholder="Comment Here!"
            name="comment"
          ></textarea>
          <button className="mt-2 rounded-md bg-blue-500 px-4 py-2 font-medium">
            Send
          </button>
        </form>
      </section>
    </>
  );
}
