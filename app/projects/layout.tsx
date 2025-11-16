import Link from "next/link";

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <header className="p-6 bg-neutral-900 ">
        <nav>
          <Link
            href="/"
            className="font-mono underline underline-offset-3 text-green-300"
          >
            &larr; View All Projects
          </Link>
        </nav>
      </header>
      <body>{children}</body>
    </html>
  );
}
