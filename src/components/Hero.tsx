import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Download, ChevronDown } from "lucide-react";

const titles = ["Frontend Developer", "ML Engineer", "Data Analyst"];

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const speed = isDeleting ? 30 : 60;

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -1));
      } else {
        setDisplayedText((prev) => currentTitle.slice(0, prev.length + 1));
      }

      if (!isDeleting && displayedText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 1500);
      }

      if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, titleIndex]);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6"
            >
              Welcome to my Portfolio
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            >
              <span className="text-muted-foreground">I'm</span>{" "}
              <span className="gradient-text">Sundara Pandi P</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 h-12"
            >
              <span className="text-muted-foreground">a </span>
              <span className="text-foreground">{displayedText}</span>
              <span className="text-primary animate-blink">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl"
            >
              Aspiring Frontend Developer and Machine Learning Engineer pursuing AI & Data Science 
              at Rajalakshmi Institute of Technology. I specialize in building seamless web applications 
              and intelligent ML solutions.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <motion.button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-3 bg-gradient-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-6"
            >
              <span className="text-sm text-muted-foreground uppercase tracking-wider">Find me on</span>
              <div className="flex gap-4">
                <motion.a
                  href="https://www.linkedin.com/in/sundara-pandi-p-557a87295/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Linkedin size={20} className="text-foreground" />
                </motion.a>
                <motion.a
                  href="https://github.com/Sundarapandi531"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  <Github size={20} className="text-foreground" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-primary rounded-3xl opacity-20 blur-2xl"
                animate={{ scale: [1, 0.5, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-2 border-primary/20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                <div className="w-full h-full bg-card flex items-center justify-center text-6xl font-bold gradient-text">
                  SP
                </div>
              </div>
    
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToProjects}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xs uppercase tracking-wider">Scroll Down</span>
            <ChevronDown size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;