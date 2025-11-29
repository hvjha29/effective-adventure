import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        background: "white",
        padding: "15px 25px",
        borderBottom: "1px solid #e5e5e5",
        display: "flex",
        gap: "20px",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/photos">Photos</Link>
      <Link href="/map">Map</Link>
      <Link href="/trips">Trips</Link>
      <Link href="/history">History</Link>
    </nav>
  );
}
