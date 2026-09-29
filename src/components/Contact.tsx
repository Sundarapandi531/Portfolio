import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Contact <span className="gradient-text">With Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="glass-card p-8 h-full">
              {/* Profile */}
              <div className="text-center mb-8">
                <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gradient-primary flex items-center justify-center text-3xl font-bold text-primary-foreground">
                  SP
                </div>
                <h3 className="text-xl font-bold">Sundara Pandi P</h3>
                <p className="text-muted-foreground">Fresher | AI & DS Student</p>
              </div>

              {/* Info Items */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="font-medium">+91 8270865182</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="font-medium">sundarapandipsp@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Location</p>
                    <p className="font-medium">Chennai, India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
                <div className="flex gap-3">
                  <motion.a
                    href="https://www.linkedin.com/in/sundara-pandi-557a87295"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-10 h-10 bg-secondary hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <Linkedin size={18} />
                  </motion.a>
                  <motion.a
                    href="https://github.com/Sundarapandi531"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="w-10 h-10 bg-secondary hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <Github size={18} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="glass-card p-8 h-full">
              <ContactForm />
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 pt-8 border-t border-border"
        >
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Sundara Pandi P. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
