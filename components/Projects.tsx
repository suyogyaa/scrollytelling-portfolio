import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ASR Multimodal Translator",
    category: "Machine Learning",
    description: "An advanced automatic speech recognition system designed to process and translate regional languages in real-time using multimodal inputs.",
  },
  {
    id: 2,
    title: "TerraForm Pro",
    category: "Software Application",
    description: "A comprehensive livestock management system designed to streamline single-farm operations with a clean, minimalist UI/UX.",
  },
  {
    id: 3,
    title: "Healthcare Management System",
    category: "Platform Integration",
    description: "An integrated platform developed to seamlessly connect multiple hospitals, facilitating better communication and streamlined operations.",
  },
  {
    id: 4,
    title: "Movie Recommendation System",
    category: "Data Science",
    description: "A machine learning-based recommendation engine built to analyze user preferences and deliver personalized cinematic suggestions.",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-[#121212] py-32 px-8 md:px-24 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Featured Projects
          </h2>
          <div className="h-[1px] w-full bg-white/10" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative flex flex-col justify-between h-80 p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md overflow-hidden transition-all duration-500 hover:bg-white/[0.06] hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(255,255,255,0.05)] cursor-pointer"
            >
              {/* Subtle background gradient glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex justify-between items-start">
                <span className="text-xs font-mono text-white/50 tracking-wider uppercase">
                  {project.category}
                </span>
                <ArrowUpRight className="text-white/30 group-hover:text-white transition-colors duration-300 w-5 h-5" />
              </div>

              <div className="relative z-10 mt-auto">
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-white/60 mb-2 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
