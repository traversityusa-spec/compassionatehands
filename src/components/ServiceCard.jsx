import { motion } from "framer-motion";

export default function ServiceCard({ title, description, icon, tags, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="glass-card group cursor-default"
    >
      <div className="w-14 h-14 rounded-2xl bg-brand-light flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <h3 className="text-xl font-heading font-bold text-brand-dark mb-3">{title}</h3>
      <p className="text-ink-soft text-sm leading-relaxed mb-4">{description}</p>
      {tags && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-brand-light text-brand text-xs font-medium rounded-pill"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
