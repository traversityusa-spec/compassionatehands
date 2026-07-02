import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="wrap my-28"
    >
      <div className="relative overflow-hidden rounded-3xl bg-brand-dark p-12 md:p-16 text-center">
        <div className="relative z-10 max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-heading font-bold text-white mb-4"
          >
            Ready to begin your support journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/70 text-lg mb-8 max-w-lg mx-auto"
          >
            Take the first step toward compassionate, personalized support for your loved one.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              to="/contact#form"
              className="inline-flex items-center gap-2 px-10 py-4 bg-brand text-white rounded-pill font-semibold text-sm hover:bg-brand/90 transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-[0.97]"
            >
              Contact Us Today
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
