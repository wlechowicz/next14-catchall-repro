export default function Page({ params }: { params: { id: string } }) {
  return <div>bar no. {params.id}</div>;
}
