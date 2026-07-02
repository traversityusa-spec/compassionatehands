import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-brand-light/20" />
        <div className="absolute inset-0">
          <svg className="absolute w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,100 C30,80 70,120 100,80 L100,0 L0,0 Z" fill="#ffffff" />
          </svg>
        </div>
        <div className="relative wrap text-center z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 bg-white text-brand text-xs font-semibold rounded-pill mb-6 shadow-sm tracking-wider uppercase"
          >
            Our Care Programs
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-heading font-extrabold text-brand-dark mb-6"
          >
            Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-ink-soft max-w-3xl mx-auto leading-relaxed"
          >
            Our day programs are uniquely tailored to address the diverse needs of individuals. We offer personalized day services and activities that suits your needs.
          </motion.p>
        </div>
      </section>

      {/* Day Program / Habilitation */}
      <AnimatedSection className="wrap py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center flex-shrink-0 text-brand">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark">
                Day Program / Habilitation:
              </h2>
            </div>
            <p className="text-ink-soft text-lg leading-relaxed bg-white p-8 rounded-3xl shadow-sm border border-gray-50">
              Our day programs are uniquely tailored to address the diverse needs of individuals. We offer personalized day services and activities for clients seeking to maintain an active lifestyle, pursue ongoing learning opportunities, and cultivate meaningful connections within their community and through diverse programs.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            <div className="absolute inset-0 bg-brand transform translate-x-4 translate-y-4 rounded-[2.5rem] opacity-20" />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="/images/day_program_care.png"
                alt="Compassionate caregiver assisting a young adult with a developmental disability"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Support Community Connections */}
      <AnimatedSection className="py-24 bg-brand-dark relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="wrap relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] border-4 border-white/10">
                <img
                  src="/images/community_activities.png"
                  alt="Group of adults with disabilities and their support staff enjoying a sunny day at a park"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="text-center text-white/40 text-sm mt-4 italic">compassionatehandsltd.com &mdash; community meeting</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                Support Community Connections
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Our Supported Community Connections (SCC) program fosters the capabilities and competencies needed for individuals to actively participate in typical community activities and everyday life. We prioritize facilitating community integration by connecting individuals with relevant resources and providing steadfast support throughout their journey. Our approach encompasses:
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center text-brand">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </span>
                Social Engagement
              </h3>
              <ul className="space-y-4">
                {[
                  "Facilitating connections with like-minded individuals who share similar interests and hobbies.",
                  "Assisting in nurturing and maintaining healthy friendships and natural support systems.",
                  "Supporting access to community-based education or training opportunities.",
                  "Encouraging involvement in various community groups and committees.",
                  "Facilitating volunteering opportunities within the community."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-brand flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md shadow-brand/30">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-white/80 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center text-brand">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>
                </span>
                Activities
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Outdoor events",
                  "Hiking Trails",
                  "Museum Tours",
                  "Visiting parks/zoos",
                  "Sports activities",
                  "Picnics"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                    <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/90 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Mentorship */}
      <AnimatedSection className="wrap py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1 relative"
          >
            <div className="absolute inset-0 bg-brand transform -translate-x-4 -translate-y-4 rounded-[2.5rem] opacity-20" />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="/images/mentorship_support.png"
                alt="Supportive mentor talking with a young adult with a disability"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <p className="text-center text-sm text-ink-soft mt-6 italic">services &mdash; compassionatehandsltd</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-light flex items-center justify-center flex-shrink-0 text-brand">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark">
                Mentorship
              </h2>
            </div>
            
            <div className="space-y-6 text-ink-soft text-lg leading-relaxed mb-8">
              <p>
                At our core, we believe in partnering with individuals in our care to help them confidently voice their unique needs, preferences, and aspirations. Through encouragement and empowerment, we enable individuals to advocate for themselves effectively.
              </p>
              <p>
                Our mentors are dedicated to fostering self-determination and self-advocacy through a range of supportive strategies. These include offering experiences, guidance, decision-making support, modeling behavior, role-playing scenarios, and providing advice. Working closely with you, your family, and your social circle, our mentors facilitate connections to available resources within your community.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-xl border border-gray-100 max-w-5xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-brand-dark mb-8 text-center">
              Our mentorship services include:
            </h3>
            <ul className="grid md:grid-cols-2 gap-6">
              {[
                "Fostering self-advocacy skills to empower individuals to articulate their needs and preferences.",
                "Assisting in the selection process when interviewing potential service providers.",
                "Providing guidance on navigating complex health and safety concerns.",
                "Supporting participation in private and public boards, advisory groups, and commissions.",
                "Coordinating Supported Living Services (SLS) with other specialized services in the community.",
                "Assisting with applications for Social Security, Medicaid, and other vital resources."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-brand-light/30 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md shadow-brand/30">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-ink-soft leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatedSection>
    </>
  );
}
