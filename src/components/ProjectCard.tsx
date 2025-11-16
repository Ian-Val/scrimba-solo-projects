import Link from "next/link";

type ProjectCardProps = {
  displayName: string;
  slug: string;
};

export default function ProjectCard({ slug, displayName }: ProjectCardProps) {
  return (
    <Link
      className="font-mono underline underline-offset-3 text-green-300 block mt-8"
      href={`/projects/${slug}`}
    >
      <h2>{displayName}</h2>
    </Link>
  );
}
