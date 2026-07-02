import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import AnimatedSection from "../components/AnimatedSection";

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* About Us Section */}
      <AnimatedSection className="wrap py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-brand-light text-brand text-xs font-semibold rounded-pill mb-4 uppercase tracking-wider">
              About us
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6">
              Welcome to Compassionate Hands!
            </h2>
            <p className="text-ink-soft text-lg leading-relaxed mb-8">
              At Compassionate Hands, we believe in providing more than just support, we offer a dependable and trustworthy system of care for individuals with developmental disabilities. Located in the heart of the Denver metro area of Colorado, our mission is to accompany you on your journey towards greater independence and fulfillment.
            </p>
            <Link to="/about" className="btn-primary">
              Learn more
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/community.jpg"
                alt="compassionate hands"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Mission Section */}
      <AnimatedSection className="wrap py-20 bg-brand-light/30 rounded-3xl my-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1 relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/hero.jpg"
                alt="compassionatehandsltd"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 md:order-2"
          >
            <span className="inline-block px-4 py-2 bg-brand-light text-brand text-xs font-semibold rounded-pill mb-4 uppercase tracking-wider">
              OUR
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6">
              Mission
            </h2>
            <p className="text-ink-soft text-base leading-relaxed mb-6">
              At Compassionate Hands, our goal is to envelop individuals with developmental disabilities in an embrace of empathy, offering steadfast support and care. Through our Specialized Habilitation and Supported Community Connection program, nestled within the Denver metro area of Colorado, we extend a gesture of compassion and kindness, walking alongside each person as they journey towards greater independence and fulfillment. With a dedication to understanding and addressing their unique needs, we aim to create an environment where every individual feels respected. Our unwavering commitment to exceptional services ensures that each person receives the warmth and support they deserve, nurturing a community built on empathy, inclusion, and care.
            </p>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection className="wrap py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-ink-soft text-lg mb-6"
          >
            We offer personalized day services and activities for clients seeking to maintain an active lifestyle, pursue ongoing learning opportunities, and cultivate meaningful connections within their community and through diverse programs.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-ink-soft text-lg mb-8"
          >
            We prioritize facilitating community integration by connecting individuals with relevant resources and providing steadfast support throughout their journey. Our approach encompasses:
          </motion.p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <ul className="space-y-4">
            {[
              "Day Program/Habilitation:",
              "Supporting Community Connections",
              "Social Engagement:",
              "Activities",
              "Mentorship"
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="w-8 h-8 rounded-full bg-brand-light flex items-center justify-center flex-shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#20a1db" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-lg font-medium text-brand-dark">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        
        <div className="text-center">
          <Link to="/services" className="btn-primary">
            Learn more
          </Link>
        </div>
      </AnimatedSection>
    </>
  );
}
