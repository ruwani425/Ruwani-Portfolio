import { Github, ExternalLink } from "lucide-react";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-emerald-500/50 transition">
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-slate-400 text-sm mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t: string) => (
          <span key={t} className="text-[10px] bg-slate-800 px-2 py-1 rounded text-emerald-500 uppercase font-bold">
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a href={project.github} className="text-slate-400 hover:text-white"><Github size={18}/></a>
        <a href={project.live} className="text-slate-400 hover:text-white"><ExternalLink size={18}/></a>
      </div>
    </div>
  );
}