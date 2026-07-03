import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import CtaSection from "../components/CtaSection";

const contactInfo = [
  {
    label: "Visit Us",
    value: "12500 First St, Thornton CO 80241",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#20a1db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Call Us",
    value: "+1 (720) 659-9501",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#20a1db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
  {
    label: "Email Us",
    value: "compassionatehandsltd@gmail.com",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#20a1db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: "Office Hours",
    value: "Monday - Friday\n9:00 AM - 3:00 PM",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#20a1db" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: "Who does Compassionate Hands support?",
    a: "Compassionate Hands Ltd supports adults with Intellectual and Developmental Disabilities (IDD) through Colorado Medicaid waiver services.",
  },
  {
    q: "What types of services do you offer?",
    a: "We offer Specialized Habilitation (Spec Hab) – helping participants develop, maintain, and improve daily living, social, communication, self-advocacy, and independent living skills in a structured setting. Supported Community Connections (SCC) – assisting participants in accessing and participating in community activities, building relationships, increasing independence, and becoming active members of their communities. Non-Medical Transportation (NMT) – providing safe transportation to and from approved day program and community-based activities.",
  },
  {
    q: "How do I get started with your services?",
    a: [
      "<strong>Step 1: Contact Us</strong> – Call us at (720) 659-9501 or visit compassionatehandsltd.com to learn more about our services and discuss your needs.",
      "<strong>Step 2: Schedule a Consultation</strong> – We'll meet with you, your family, guardian, or case manager to learn about your goals, interests, and support needs.",
      "<strong>Step 3: Verify Eligibility</strong> – We'll confirm your eligibility for services through your Medicaid waiver and work with your case manager to obtain the necessary authorizations.",
      "<strong>Step 4: Develop Your Personalized Plan</strong> – Together, we'll create a person-centered plan tailored to your strengths, preferences, and goals.",
      "<strong>Step 5: Start Services</strong> – Once everything is approved, you can begin participating in our Specialized Habilitation and Supported Community Connections (SCC) programs. Our caring team will support you every step of the way in a safe, engaging, and inclusive environment.",
    ],
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || ""}/server/mail.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to send");
      setSubmitted(true);
      setFormState({ name: "", phone: "", email: "", service: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (err) {
      alert(err.message);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <section className="pt-36 pb-16">
        <div className="wrap text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 bg-brand-light text-brand text-xs font-semibold rounded-pill mb-4"
          >
            Contact Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-heading font-bold text-brand-dark"
          >
            We&apos;re here to{" "}
            <span className="text-brand">support you</span>
          </motion.h1>
        </div>
      </section>

      <AnimatedSection className="wrap">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3" id="form">
            <div className="glass-card">
              <h2 className="text-2xl font-heading font-bold text-brand-dark mb-6">Send us a message</h2>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-light flex items-center justify-center mb-4">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#20a1db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-xl font-heading font-bold text-brand-dark mb-2">Message sent!</p>
                  <p className="text-ink-soft text-sm">We&apos;ll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-1.5">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/70 border border-line focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all text-sm"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-dark mb-1.5">Phone</label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/70 border border-line focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all text-sm"
                        placeholder="(720) 555-5555"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-1.5">Email</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/70 border border-line focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all text-sm"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-1.5">Service Interest</label>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/70 border border-line focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all text-sm text-ink-soft"
                    >
                      <option value="">Select a service...</option>
                      <option value="day-program">Day Program & Habilitation</option>
                      <option value="community">Supported Community Connections</option>
                      <option value="social">Social Engagement</option>
                      <option value="activities">Activities</option>
                      <option value="mentorship">Mentorship</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-dark mb-1.5">Message</label>
                    <textarea
                      rows={4}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/70 border border-line focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all text-sm resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <button type="submit" disabled={sending} className="btn-primary w-full justify-center">
                    {sending ? "Sending..." : "Send Message"}
                    {!sending && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-5">
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card !p-5 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-brand-dark mb-0.5">{info.label}</p>
                  <p className="text-sm text-ink-soft whitespace-pre-line">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="wrap py-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-2 bg-brand-light text-brand text-xs font-semibold rounded-pill mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark">
            Frequently asked questions
          </h2>
        </div>
        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="text-sm font-semibold text-brand-dark pr-4">{faq.q}</span>
                <motion.svg
                  animate={{ rotate: openFaq === i ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#20a1db"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0"
                >
                  <polyline points="6 9 12 15 18 9" />
                </motion.svg>
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    {Array.isArray(faq.a) ? (
                      <div className="px-6 pb-4 text-sm text-ink-soft leading-relaxed space-y-2">
                        {faq.a.map((step, si) => (
                          <p key={si} dangerouslySetInnerHTML={{ __html: step }} />
                        ))}
                      </div>
                    ) : (
                      <p className="px-6 pb-4 text-sm text-ink-soft leading-relaxed">{faq.a}</p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      <CtaSection />
    </>
  );
}
