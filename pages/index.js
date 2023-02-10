import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col text-4xl p-4">
      <Link href="./typing" className="my-2 hover:text-slate-500">
        Typing Test
      </Link>
      <Link href="./blogs" className="my-2 hover:text-slate-500">
        Blogs
      </Link>
    </div>
  );
}
