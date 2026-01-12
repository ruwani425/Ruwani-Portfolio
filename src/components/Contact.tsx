"use client";

import { Mail, Linkedin, Github, Loader2 } from "lucide-react";
import { SiMedium } from "react-icons/si";
import MotionWrapper from "./MotionWrapper";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
    // Sign up at https://www.emailjs.com/
    // 1. Create a Service (e.g., Gmail) -> Get Service ID
    // 2. Create an Email Template -> Get Template ID
    // 3. Account -> API Keys -> Get Public Key
    const SERVICE_ID = "service_e89qtir";
    const TEMPLATE_ID = "template_6gc0t6h";
    const PUBLIC_KEY = "AN9cC0_iQ-_3kc_f5";

    if (form.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
        (result) => {
          console.log(result.text);
          setLoading(false);
          setStatus("success");
          // Reset form
          if (form.current) form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          setStatus("error");
        }
      );
    }
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-20 px-4 xxs:px-3 sm:px-6 overflow-hidden"
    >
      <div className="max-w-3xl mx-auto">
        <MotionWrapper>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Get In Touch
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg leading-relaxed">
              I'm open to freelance projects, collaborations, or just having a
              chat. Send me a message below!
            </p>
          </div>

          <div className="glass-card p-6 sm:p-8 rounded-3xl mb-12">
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="user_name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="user_email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                  placeholder="How can I help you?"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-bold hover:opacity-90 transition shadow-lg shadow-accent/25 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" /> Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {status === "success" && (
                <p className="text-green-500 text-center font-medium animate-pulse">
                  ✅ Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-center font-medium">
                  ❌ Something went wrong. Please refresh and try again.
                </p>
              )}
            </form>
          </div>

          <div className="flex gap-6 justify-center">
            <a
              href="https://github.com/ruwani425"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-accent transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ruwani-ranthika-ba4186314/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-accent transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>

            <a
              href="mailto:ruwanielv@gmail.com"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-accent transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>

            <a
              href="https://medium.com/@ruwanielv"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-accent transition-all hover:scale-110"
              aria-label="Medium"
            >
              <SiMedium size={24} />
            </a>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
