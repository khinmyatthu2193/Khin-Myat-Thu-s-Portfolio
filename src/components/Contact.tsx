import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Message sent! (Demo)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative z-10 px-6 py-24 bg-bgSoft/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"></div>
          <p className="text-textDim mt-4 max-w-2xl mx-auto">
            Have a product idea, business challenge, or mobile/web project in mind? I’d love to connect and build something impactful together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-bgCard/60 backdrop-blur-sm rounded-2xl p-6 border border-borderSoft">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-textDim text-sm">Email</p>
                    <p className="text-textMain">khinmyatthu2193@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-textDim text-sm">Phone</p>
                    <p className="text-textMain">+959 797 237 421</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-textDim text-sm">Location</p>
                    <p className="text-textMain">Mandalay, Myanmar</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-bgCard/60 backdrop-blur-sm rounded-2xl p-6 border border-borderSoft space-y-6">
              <div>
                <label className="block text-textMain mb-2 text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-borderSoft text-textMain focus:border-primary focus:outline-none transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-textMain mb-2 text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-borderSoft text-textMain focus:border-primary focus:outline-none transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-textMain mb-2 text-sm font-medium">Your Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-borderSoft text-textMain focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full group relative px-6 py-3 bg-gradient-to-r from-primary to-accent rounded-lg font-semibold text-black overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(52,211,153,0.5)]"
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  Send Message <Send size={18} />
                </span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}