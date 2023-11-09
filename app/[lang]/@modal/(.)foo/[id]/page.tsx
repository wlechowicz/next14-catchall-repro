import Link from "next/link";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div style={{ marginTop: "1em", border: "1px solid red", padding: "1em" }}>
      <h2>I'm a modal hurr durr</h2>
      <p>
        this is intercepted foo no. {params.id}
        <br /> This link should "close" the "modal" because it goes to catch
        all: <Link href="/bar/1">bar 1</Link>
      </p>
    </div>
  );
}
