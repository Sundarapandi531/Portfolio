import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, Folder } from "lucide-react";

const projects = [
  {
    title: "To-Do List Application",
    description: "A responsive to-do list app built with React to manage daily tasks efficiently with local storage persistence.",
    tags: ["React", "JavaScript", "CSS"],
    link: "https://github.com/Sundarapandi531/To-Do-List.git",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Spam Detection Model",
    description: "A machine learning model using scikit-learn to classify SMS messages as spam or ham with high accuracy.",
    tags: ["Python", "ML", "NLP"],
    link: "https://github.com/Sundarapandi531/Spam-ham-Detection.git",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Medicinal Plant Identification",
    description: "Developed a CNN model using VGG16 architecture to identify medicinal plants from leaf images.",
    tags: ["Python", "TensorFlow", "CNN"],
    link: "https://github.com/Sundarapandi531/Medicinal-Plants-Classification.git",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Brain Tumor Detection",
    description: "Machine learning model using ResNet101 to detect and classify brain tumors from MRI scans.",
    tags: ["Deep Learning", "PyTorch", "Medical AI"],
    link: "https://github.com/Sundarapandi531/brain-tumor-detection.git",
    color: "from-red-500 to-orange-500",
  },
  {
    title: "Cryptocurrency Dashboard",
    description: "Real-time crypto dashboard with CoinGecko API featuring coin search, detailed views, and historical charts.",
    tags: ["React", "API", "Charts"],
    link: "https://github.com/Sundarapandi531/cryptocurrency-dashboard.git",
    color: "from-yellow-500 to-amber-500",
  },
  {
    title: "Album Finder (Spotify API)",
    description: "A React application that lets users search and explore albums using Spotify's REST API.",
    tags: ["React", "Spotify API", "OAuth"],
    link: "https://github.com/Sundarapandi531/Web-Project.git",
    color: "from-primary to-accent",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects spanning web development, machine learning, and data science
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
                whileHover={{ y: -8 }}
              >
                <div className="glass-card p-6 h-full flex flex-col group hover:border-primary/30 transition-colors">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                      <Folder className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Github className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                      <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary text-muted-foreground text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Sundarapandi531"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-primary/50 rounded-full font-medium transition-colors"
          >
            <Github size={18} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;