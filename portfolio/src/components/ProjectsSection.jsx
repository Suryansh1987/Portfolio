import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "RestFul Api",
    description:
      "A robust RESTful API built to manage student records, attendance, subjects, and staff data for schools. Designed for scalability and easy integration with front-end systems or mobile apps.",
    image: "https://techpearl.com/wp-content/uploads/2021/11/Product-management.jpg",
    tags: ["Node.js", "Express", "PostgreSQL", "REST API"],
    demoUrl: "https://project1-1-4z1q.onrender.com/", // Replace with real URL
    githubUrl: "https://github.com/Suryansh1987/Backend_school_Location",
  },
  {
    id: 2,
    title: "DocuAI",
    description:
      "An intelligent document assistant that extracts, summarizes, and interprets data from complex PDFs using AI models.",
    image: "/images/1.png",
    tags: ["Next.js", "Python", "OpenAI", "TailwindCSS"],
    demoUrl: "https://docuai.vercel.app", // Replace with real URL
    githubUrl: "https://github.com/Suryansh1987/docuai",
  },
  {
    id: 3,
    title: "Project Management App",
    description:
      "A full-stack app to manage team productivity, track project status, and streamline workflows with analytics dashboard.",
    image: "/images/2.png",
    tags: ["React", "Supabase", "Drizzle ORM", "Node.js"],
    demoUrl: "https://assignment-mauve-seven.vercel.app/", // Replace with real URL
    githubUrl: "https://github.com/Suryansh1987/Assignment",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These are some of the projects I’ve built, showcasing my skills in AI,
          full-stack development, and real-world problem-solving.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Suryansh1987"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
