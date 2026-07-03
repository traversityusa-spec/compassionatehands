import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || ""}/server/mail.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
      setFormState({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => {
        setSubmitted(false);
        setIsOpen(false);
      }, 3000);
    } catch {
      alert("Something went wrong. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 right-0 mb-4 w-80 bg-white rounded-3xl shadow-2xl overflow-hidden border border-line"
          >
            <div className="bg-brand text-white p-4 flex justify-between items-center">
              <h3 className="font-heading font-bold">Contact Us</h3>
              <button onClick={() => setIsOpen(false)} className="text-white hover:text-white/70 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            <div className="p-5">
              {submitted ? (
                <div className="text-center py-6">
                  <p className="text-brand font-bold mb-2">Message Sent!</p>
                  <p className="text-ink-soft text-sm">We'll get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <input required type="text" placeholder="Name" value={formState.name} onChange={e => setFormState({...formState, name: e.target.value})} className="w-full px-3 py-2 text-sm rounded-lg border border-line focus:border-brand outline-none transition-colors" />
                  <input required type="email" placeholder="Email" value={formState.email} onChange={e => setFormState({...formState, email: e.target.value})} className="w-full px-3 py-2 text-sm rounded-lg border border-line focus:border-brand outline-none transition-colors" />
                  <input required type="tel" placeholder="Phone" value={formState.phone} onChange={e => setFormState({...formState, phone: e.target.value})} className="w-full px-3 py-2 text-sm rounded-lg border border-line focus:border-brand outline-none transition-colors" />
                  <textarea required placeholder="Message" rows={3} value={formState.message} onChange={e => setFormState({...formState, message: e.target.value})} className="w-full px-3 py-2 text-sm rounded-lg border border-line focus:border-brand outline-none transition-colors resize-none"></textarea>
                  <button type="submit" disabled={sending} className="w-full py-2 bg-brand text-white rounded-lg text-sm font-semibold hover:bg-brand/90 transition-colors disabled:opacity-60">{sending ? "Sending..." : "Send"}</button>
                </form>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-brand text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all"
      >
        {isOpen ? (
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
        )}
      </button>
    </div>
  );
}
