import Link from "next/link";
import Image from "next/image";

export default function LearningJournalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="flex items-center px-8 py-4 gap-4">
        <Image
          src={"/images/journal/journal-logo.png"}
          alt=""
          width={748}
          height={748}
          className="h-10 w-auto"
        />
        <h1 className="font-bold text-xl">My learning journal</h1>
        <nav className="ml-auto">
          <ul className="flex gap-8">
            <li className="uppercase font-semibold">
              <Link href="/projects/learning-journal">Home</Link>
            </li>
            <li className="uppercase font-semibold">
              <Link href="/projects/learning-journal/about">About me</Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
      <footer className="bg-neutral-900 flex flex-col justify-center items-center py-8">
        <p className="text-white">My Learning Journal</p>
        <small className="text-neutral-200">Copyright &copy; 2022</small>
      </footer>
    </>
  );
}
