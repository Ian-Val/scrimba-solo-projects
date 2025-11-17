import Image from "next/image";

export default function NavBar() {
  return (
    <>
      <header>
        <nav className="flex justify-between items-center px-4 py-5 box-border text-neutral-300 border-b">
          <Image
            src="/images/instagram/logo.png"
            width={460}
            height={220}
            alt="Oldagram logo."
            className="h-20 w-auto"
          />
          <Image
            src="/images/instagram/user-avatar.webp"
            width={800}
            height={800}
            alt="Oldagram logo."
            className="h-15 w-auto rounded-full"
          />
        </nav>
      </header>
    </>
  );
}
