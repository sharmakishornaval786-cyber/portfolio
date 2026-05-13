import type { Metadata } from "next";
import { PROJECTS } from "@/lib/portfolio-data";
import Link from "next/link";
import ProjectDetailClient from "@/app/components/ProjectDetailClient";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  return {
    title: project ? `${project.title} | My Portfolio` : "Project | My Portfolio",
    description: project?.description || "View project details",
  };
}

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetail({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);
  const otherProjects = PROJECTS.filter((p) => p.id !== id).slice(0, 3);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/sections/projects" className="text-blue-600 hover:underline">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return <ProjectDetailClient project={project} otherProjects={otherProjects} />;
}
