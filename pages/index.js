import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col text-4xl p-4">
      <Link href="./blogs" className="my-2 hover:text-slate-500">
        Blogs
      </Link>
      <Link href="./puzzle" className="my-2 hover:text-slate-500">
        Puzzle
      </Link>
      <Link href="./typing" className="my-2 hover:text-slate-500">
        Typing
      </Link>
    </div>
  );
}
