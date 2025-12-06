import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { GraduationCap, Wrench, Briefcase, Folder, Award } from "lucide-react";

const tabs = [
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "skills", label: "Skills", icon: Wrench },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: Folder },
];

const skills = {
  Programming_Languages: [
    { name: "Python", level: 95 },
    { name: "Java", level: 90 },
    { name: "JavaScript", level: 90 },
    { name :"C" , level:80},
  ],ml: [
    { name: "Python", level: 95 },
    { name: "TensorFlow & PyTorch", level: 90 },
    { name: "NLP (spaCy, Transformers)", level: 85 },
    { name: "Model Deployment", level: 80 },
    { name: "Data Visualization", level: 85 },
  ],
  frontend: [
    { name: "HTML5", level: 85 },
    { name: "CSS3 & Tailwind", level: 80 },
    { name: "JavaScript & React", level: 85 },
    { name: "TypeScript", level: 75 },
    { name: "Figma", level: 70 },
  ],
  Databases_and_Technologies: [
    { name: "MySQL", level: 95 },
    { name: "MangoDB", level: 90 },
    { name: "PostgreSQL", level: 85 },
    { name: "Git/GitHub", level: 90 },
    { name: "Docker", level: 80 },

  ],
};

const Resume = () => {
  const [activeTab, setActiveTab] = useState("education");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resume" className="section-padding" ref={ref}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Fresher
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Sundara Pandi's <span className="gradient-text">Resume</span>
          </h2>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-gradient-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              <tab.icon size={18} />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "education" && (
              <div className="space-y-6">
                <div className="glass-card p-6 hover-lift">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-1">Bachelor's in AI & Data Science</h3>
                      <p className="text-primary font-medium mb-2">Rajalakshmi Institute of Technology</p>
                      <p className="text-muted-foreground text-sm">2023 – 2027</p>
                    </div>
                    <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-bold rounded-full">
                      8.5 CGPA
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    Focused on AI, ML, and software engineering. Participated in various hackathons 
                    and projects related to automation and deep learning.
                  </p>
                </div>

                <div className="glass-card p-6 hover-lift">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-1">10th & 12th</h3>
                      <p className="text-primary font-medium mb-2">MSP Solai Nadar Memorial Higher Secondary School</p>
                      <p className="text-muted-foreground text-sm">2021– 2023</p>
                    </div>
                    <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-bold rounded-full">
                       89.6% in 12th
                    </span>
                  </div>
                </div>

                <div className="glass-card p-6 hover-lift">
                  <div className="flex items-start gap-4">
                    <Award className="w-10 h-10 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold mb-1">Online Certifications</h3>
                      <p className="text-muted-foreground text-sm mb-2">Coursera, Udemy, Scaler, Great Learning • 2024 – Present</p>
                      <p className="text-muted-foreground leading-relaxed">
                        Completed courses on ML, Deep Learning, and Frontend Development (HTML, CSS, JavaScript, React).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "skills" && (
              <div className="grid md:grid-cols-2 gap-8">
                <div className="glass-card p-6">
                  <h3 className="text-lg font-bold mb-2 text-accent">Programming Languages</h3>
                  <p className="text-sm text-muted-foreground mb-6">Technical Skills</p>
                  <div className="space-y-4">
                    {skills.Programming_Languages.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex justify-between text-sm mb-1.5">
                          <span>{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-accent to-purple-400 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                {/* ML Skills */}
                <div className="glass-card p-6">
                  <h3 className="text-lg font-bold mb-2 text-primary">Machine Learning & AI</h3>
                  <p className="text-sm text-muted-foreground mb-6">Core Technical Skills</p>
                  <div className="space-y-4">
                    {skills.ml.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex justify-between text-sm mb-1.5">
                          <span>{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-primary rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Frontend Skills */}
                <div className="glass-card p-6">
                  <h3 className="text-lg font-bold mb-2 text-primary">Frontend Development</h3>
                  <p className="text-sm text-muted-foreground mb-6">UI/UX & Web Technologies</p>
                  <div className="space-y-4">
                    {skills.ml.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex justify-between text-sm mb-1.5">
                          <span>{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-primary rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="glass-card p-6">
                  <h3 className="text-lg font-bold mb-2 text-accent">Databases_and_Technologies</h3>
                  <p className="text-sm text-muted-foreground mb-6"></p>
                  <div className="space-y-4">
                    {skills.Databases_and_Technologies.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="flex justify-between text-sm mb-1.5">
                          <span>{skill.name}</span>
                          <span className="text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-accent to-purple-400 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "experience" && (
              <div className="space-y-6">
                <div className="glass-card p-6 hover-lift">
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full mb-3">
                    Latest
                  </span>
                  <h3 className="text-xl font-bold">Machine Learning Engineer</h3>
                  <p className="text-primary font-medium">Clixoo Solutions Private Limited</p>
                  <p className="text-muted-foreground text-sm mt-1">Nov 2025 – Dec 2025</p>
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    Developed RAG (Retrieval-Augmented Generation) Chatbot using LangChain and vector databases 
                    for intelligent document retrieval and conversational AI.
                  </p>
                </div>

                <div className="glass-card p-6 hover-lift">
                  <h3 className="text-xl font-bold">Artificial Intelligence Intern</h3>
                  <p className="text-primary font-medium">Acmegrade</p>
                  <p className="text-muted-foreground text-sm mt-1">Nov 2023 – Jan 2024</p>
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    Worked on spam/ham detection using NLP techniques and created end-to-end ML pipelines.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "projects" && (
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Medicinal Plant Identification", desc: "Used CNN (VGG16, YOLOv8) to classify medicinal plants from leaf images." },
                  { title: "Sign Language Detection", desc: "Real-time sign language translator using OpenCV and deep learning." },
                  { title: "Album Finder", desc: "React app that fetches and displays album data using Spotify's REST API." },
                  { title: "RAG Chatbot", desc: "Intelligent document retrieval chatbot using LangChain and vector databases." },
                ].map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card p-6 hover-lift"
                  >
                    <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.desc}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Resume;