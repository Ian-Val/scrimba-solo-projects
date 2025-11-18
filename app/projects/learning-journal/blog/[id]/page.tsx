export default function BlogPage({ params }: { params: { id: string } }) {
  return <h1>Blog Page {params.id}</h1>;
}
