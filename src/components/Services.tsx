import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Brain, BarChart3, Sparkles } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "Building responsive, accessible, and dynamic websites using React, TypeScript, and modern CSS frameworks.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Designing and deploying ML models for image processing, NLP, predictions, and intelligent automation.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    description: "Exploring datasets, uncovering patterns, and providing actionable insights using Python, Pandas, and visualization tools.",
    gradient: "from-primary to-orange-500",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            What I Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Combining creativity with technical expertise to deliver exceptional digital solutions
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                className="glass-card p-8 h-full hover-lift glow-effect group cursor-pointer"
                whileHover={{ y: -8 }}
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-[1px] mb-6`}>
                  <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-foreground" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Arrow */}
                <motion.div
                  className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <span className="text-sm font-medium">Learn More</span>
                  <Sparkles size={16} />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;