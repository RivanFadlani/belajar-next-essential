export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  console.log(await params);

  return (
    <>
      <h1>Ini Halaman Blog</h1>
    </>
  );
}
