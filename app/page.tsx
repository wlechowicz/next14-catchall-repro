import Link from "next/link";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return (
    <div>
      <h1>This is home.</h1>
      <br />
      These links open a "modal":
      <ul>
        <li>
          <Link href="/foo/1">foo 1</Link>
        </li>
        <li>
          <Link href="/foo/2">foo 2</Link>
        </li>
        <li>
          <Link href="/foo/3">foo 3</Link>
        </li>
      </ul>
      These don't:
      <ul>
        <li>
          <Link href="/bar/1">bar 1</Link>
        </li>
        <li>
          <Link href="/bar/2">bar 2</Link>
        </li>
        <li>
          <Link href="/bar/3">bar 3</Link>
        </li>
      </ul>
    </div>
  );
}
