export default function Page({ params }: { params: { id: string } }) {
  return <div>foo no. {params.id}</div>;
}
