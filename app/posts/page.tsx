type Post = {
  id: string;
  title: string;
  content: string;
};

async function getPosts(): Promise<Post[]> {
  const response = await fetch('http://localhost:3001/posts');
  const json = await response.json();

  return json;
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <>
      <h1>Post Page</h1>
      {posts.map((post) => (
        <article key={post.id} className="mt-2">
          <h2 className="text-lg font-medium">{post.title}</h2>
          <p>{post.content}</p>
        </article>
      ))}
    </>
  );
}
