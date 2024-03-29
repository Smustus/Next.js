import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <nav className="nav flex items-center justify-center m-14">
      <Link href="/users" className="nav__userLink m-6">Users</Link>
      <Link href="/products" className="nav__productsLink m-6">Products</Link>
    </nav>
    <main className="flex flex-col items-center justify-between p-24">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <h1 className="pt-36">Hello World!</h1>
    </main>
    </>
  );
}
