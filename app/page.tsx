import ProjectCard from "../src/components/ProjectCard";
import projects from "../src/data/projects.json";
import type { Project } from "../src/types/project";

export default function Home() {
  return (
    <>
      <main className=" bg-neutral-900 p-12">
        <h1 className="font-mono text-green-50 text-xl font-extrabold pb-5 border-b-2">
          Ian Valeta's Scrimba Solo Projects
        </h1>
        <div className="mt-12 min-h-screen ">
          {projects.map((project: Project) => (
            <ProjectCard
              key={project.slug}
              displayName={project.displayName}
              slug={project.slug}
            />
          ))}
        </div>
      </main>
    </>
  );
}
