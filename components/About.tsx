import { MapPin, GraduationCap, Code, Cpu, Database, Network, Trophy } from "lucide-react";

export default function About() {
  return (
    <section className="bg-[#0a0a0a] py-32 px-8 md:px-24 relative z-20 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left Column: About & Education */}
        <div className="flex flex-col gap-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
              About Me
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              I am a Computer Engineer originating from Nepal and currently studying in Patiala, Punjab, with a strong focus on machine learning, data science, and quantum computing. 
            </p>
            <p className="text-lg text-white/70 leading-relaxed">
              Whether I am developing web applications, training neural networks, or exploring quantum circuits, I thrive on tackling complex technical challenges. I am passionate about building efficient, clean, and minimalist software solutions that solve real-world problems.
            </p>
            <div className="flex items-center gap-4 mt-8 text-white/50">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>Patiala, Punjab</span>
              </div>
              <span className="hidden sm:inline">|</span>
              <span>Originally from Nepal 🇳🇵</span>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-white/60" />
              Education
            </h3>
            <div className="flex flex-col gap-4">
              <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.05]">
                <h4 className="text-xl font-semibold mb-2">Thapar Institute of Engineering and Technology</h4>
                <p className="text-white/60 mb-2">Bachelor's in Computer Engineering</p>
                <p className="text-sm text-white/40">Patiala, Punjab</p>
              </div>
              <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/[0.05]">
                <h4 className="text-xl font-semibold mb-2">Budhanilkantha School</h4>
                <p className="text-white/60 mb-2">High School - A Levels</p>
                <p className="text-sm text-white/40">Kathmandu, Nepal</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Skills & Interests */}
        <div className="flex flex-col gap-12">
          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-3">
              <Code className="w-6 h-6 text-white/60" />
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <SkillCard title="Web Development" icon={<Network />} />
              <SkillCard title="Machine Learning & AI" icon={<Cpu />} />
              <SkillCard title="Data Science" icon={<Database />} />
              <SkillCard title="Quantum Computing" icon={<Code />} />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-6">Languages</h3>
            <div className="flex flex-wrap gap-3">
              {['English (Fluent)', 'Nepali (Fluent)', 'Hindi (Fluent)', 'Punjabi (Basic)'].map(lang => (
                <span key={lang} className="px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.1] text-sm text-white/80">
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-6 flex items-center gap-3">
              <Trophy className="w-6 h-6 text-yellow-500/80" />
              Major Milestone
            </h3>
            <div className="p-6 rounded-3xl bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/20 relative overflow-hidden">
              <div className="absolute -top-6 -right-6 p-6 opacity-10">
                <Trophy className="w-32 h-32" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-yellow-500/90">Bronze Medal</h4>
              <p className="text-white/90 mb-2 font-medium">Hanoi Mathematics Olympiad</p>
              <p className="text-sm text-white/50 mb-4">Hanoi, Vietnam</p>
              <p className="text-sm text-white/70 leading-relaxed max-w-[90%] relative z-10">
                Competed internationally and demonstrated profound mathematical problem-solving skills at a highly competitive level.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-4">Other Interests</h3>
            <p className="text-white/60 leading-relaxed">
              When I am not coding or studying advanced data science concepts, I love traveling and trekking to high-altitude regions. I also enjoy playing football, watching movies, and conducting automotive research.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

function SkillCard({ title, icon }: { title: string, icon: React.ReactNode }) {
  return (
    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center gap-4 hover:bg-white/[0.05] transition-colors">
      <div className="text-white/50">{icon}</div>
      <span className="font-medium text-white/90">{title}</span>
    </div>
  )
}
