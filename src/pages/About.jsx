import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";
import CtaSection from "../components/CtaSection";

const values = [
  {
    title: "Compassion",
    desc: "We lead with empathy and understanding in every interaction, putting the well-being of each individual at the heart of everything we do.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#20a1db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
  },
  {
    title: "Respect",
    desc: "We honor the dignity, choices, and voices of every individual we support, treating each person with the respect they deserve.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#20a1db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Empowerment",
    desc: "We help individuals discover their strengths, build confidence, and take ownership of their lives and goals.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#20a1db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
  },
  {
    title: "Integrity",
    desc: "We operate with transparency, honesty, and accountability in all aspects of our work and relationships.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#20a1db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    title: "Community",
    desc: "We foster belonging and connection, creating opportunities for meaningful participation in community life.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#20a1db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <>
      <section className="pt-36 pb-16">
        <div className="wrap text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 bg-brand-light text-brand text-xs font-semibold rounded-pill mb-4"
          >
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-brand-dark max-w-3xl mx-auto leading-[1.15]"
          >
            Our mission is simple&mdash;provide support that makes a{" "}
            <span className="text-brand">difference</span>
          </motion.h1>
        </div>
      </section>

      <AnimatedSection className="wrap py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-heading font-bold text-brand-dark mb-4">Our Mission</h2>
            <p className="text-ink-soft leading-relaxed mb-4">
              At Compassionate Hands Ltd, we are dedicated to providing high-quality,person-centered
              support for individuals with developmental disabilities. We believe that every person
              deserves the opportunity to grow, connect, and live a fulfilling life.
            </p>
            <p className="text-ink-soft leading-relaxed">
              Our approach is built on collaboration&mdash;working closely with individuals, their
              families, and the community to create personalized support plans that honor each
              person&apos;s unique strengths, interests, and goals.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-xl max-h-[500px]">
              <img
                src="/images/scale.jpg"
                alt="Care team"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="wrap py-16">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-2 bg-brand-light text-brand text-xs font-semibold rounded-pill mb-4">
            Our Values
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark">
            What guides everything we do
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass-card"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-light flex items-center justify-center mb-5">
                {v.icon}
              </div>
              <h3 className="text-lg font-heading font-bold text-brand-dark mb-2">{v.title}</h3>
              <p className="text-ink-soft text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            whileHover={{ y: -4 }}
            className="glass-card bg-brand-dark text-center flex flex-col items-center justify-center"
          >
            <p className="text-white text-lg font-heading font-bold mb-2">Want to learn more?</p>
            <p className="text-white/70 text-sm mb-4">We&apos;d love to hear from you</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-brand text-white rounded-pill text-sm font-semibold hover:bg-brand/90 transition-all"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>

      <CtaSection />
    </>
  );
}
