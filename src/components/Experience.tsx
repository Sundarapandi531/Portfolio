import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, Bot, Award, CheckCircle, Brain } from "lucide-react";

const experiences = [
  {
    company: "Clixoo Solutions Private Limited",
    role: "Machine Learning Engineer",
    duration: "Nov 2025 – Dec 2025",
    type: "Internship",
    location: "Onsite",
    description: "Developed a RAG (Retrieval-Augmented Generation) Chatbot leveraging advanced NLP techniques and vector databases for intelligent document retrieval and conversational AI.",
    achievements: [
      "Built end-to-end RAG pipeline with LangChain",
      "Implemented vector search using embeddings",
      "Optimized response generation with prompt engineering",
      "Deployed chatbot with real-time inference capabilities",
    ],
    skills: ["Python", "LangChain", "OpenAI", "Vector DB", "NLP"],
    icon: Bot,
  },
  {
    company: "Acmegrade",
    role: "Artificial Intelligence Intern",
    duration: "Nov 2023 – Jan 2024",
    type: "Internship",
    location: "Online",
    description: "Worked on spam/ham detection using NLP techniques and created end-to-end ML pipelines for text classification tasks.",
    achievements: [
      "Developed spam detection model with 95%+ accuracy",
      "Built data preprocessing pipelines",
      "Implemented feature engineering for text data",
      "Created model deployment documentation",
    ],
    skills: ["Python", "scikit-learn", "NLP", "Pandas", "ML"],
    icon: Brain,
  },
];
const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Career Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey in AI, ML, and software development
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-primary/20" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 z-10">
                <motion.div
                  className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  animate={{ boxShadow: ["0 0 0 0 rgba(239, 68, 68, 0.4)", "0 0 0 10px rgba(239, 68, 68, 0)", "0 0 0 0 rgba(239, 68, 68, 0)"] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <exp.icon className="w-5 h-5 text-white" />
                </motion.div>
              </div>

              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                <motion.div
                  className="glass-card p-6 hover-lift"
                  whileHover={{ y: -4 }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full mb-2">
                        {exp.type}
                      </span>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <Award className="w-6 h-6 text-primary" />
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-secondary text-muted-foreground text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block md:w-[calc(50%-3rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;