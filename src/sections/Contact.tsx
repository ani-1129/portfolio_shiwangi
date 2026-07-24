import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { portfolioData } from '../data/portfolioData';
import { FiMail, FiMapPin, FiLinkedin, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi';

export const Contact = () => {
  const { email, location, linkedin } = portfolioData.personalInfo;
  const emailJsConfig = portfolioData.emailJsConfig;

  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setStatus({ type: null, message: '' });

    // Validate email values
    const formData = new FormData(formRef.current);
    const userEmail = formData.get('user_email') as string;
    const userName = formData.get('user_name') as string;

    if (!userEmail || !userName) {
      setStatus({ type: 'error', message: 'Please fill in your name and email address.' });
      setLoading(false);
      return;
    }

    try {
      if (emailJsConfig.serviceId === 'YOUR_SERVICE_ID' || !emailJsConfig.serviceId) {
        // Mock fallback if keys are not configured yet
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Mock Email Sent Successfully:", Object.fromEntries(formData.entries()));
        setStatus({
          type: 'success',
          message: 'Message sent successfully! (Mock mode: configure EmailJS keys in portfolioData.ts for live emails)'
        });
        formRef.current.reset();
      } else {
        // Send actual EmailJS message
        await emailjs.sendForm(
          emailJsConfig.serviceId,
          emailJsConfig.templateId,
          formRef.current,
          emailJsConfig.publicKey
        );
        setStatus({ type: 'success', message: 'Your message has been sent successfully!' });
        formRef.current.reset();
      }
    } catch (err: any) {
      console.error(err);
      setStatus({ 
        type: 'error', 
        message: err?.text || 'An error occurred while sending the message. Please try again.' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-accent-gold/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader 
          number="07" 
          title="Get In Touch" 
          subtitle="Feel free to reach out for career opportunities, strategic collaborations, or business inquiries."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Left: Contact Info & Map */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <Card hoverEffect={false} className="border border-border-subtle">
              <h3 className="font-heading font-extrabold text-2xl text-text-main mb-6">
                Contact Details
              </h3>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent-gold/10 text-accent-gold rounded-xl shrink-0">
                    <FiMail size={20} />
                  </div>
                  <div>
                    <span className="font-display text-xs text-text-muted uppercase tracking-wider block">
                      Email
                    </span>
                    <a href={`mailto:${email}`} className="font-body text-base text-text-main hover:text-accent-gold transition-colors duration-300 font-medium break-all">
                      {email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent-gold/10 text-accent-gold rounded-xl shrink-0">
                    <FiMapPin size={20} />
                  </div>
                  <div>
                    <span className="font-display text-xs text-text-muted uppercase tracking-wider block">
                      Location
                    </span>
                    <span className="font-body text-base text-text-main font-medium">
                      {location}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent-gold/10 text-accent-gold rounded-xl shrink-0">
                    <FiLinkedin size={20} />
                  </div>
                  <div>
                    <span className="font-display text-xs text-text-muted uppercase tracking-wider block">
                      LinkedIn
                    </span>
                    <a href={linkedin} target="_blank" rel="noopener noreferrer" className="font-body text-base text-text-main hover:text-accent-gold transition-colors duration-300 font-medium break-all">
                      Shiwangi Singh Profile
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <Card hoverEffect={false} className="border border-border-subtle h-full">
              <h3 className="font-heading font-extrabold text-2xl text-text-main mb-6">
                Send Message
              </h3>

              <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="user_name" className="font-display text-xs text-text-muted uppercase tracking-wider font-semibold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      required
                      placeholder="Your Name"
                      className="w-full bg-bg-secondary/40 border border-border-subtle rounded-xl px-4 py-3 text-text-main placeholder-text-muted/40 focus:outline-none focus:border-accent-gold transition-colors duration-300 font-body"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="user_email" className="font-display text-xs text-text-muted uppercase tracking-wider font-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      required
                      placeholder="email@example.com"
                      className="w-full bg-bg-secondary/40 border border-border-subtle rounded-xl px-4 py-3 text-text-main placeholder-text-muted/40 focus:outline-none focus:border-accent-gold transition-colors duration-300 font-body"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="font-display text-xs text-text-muted uppercase tracking-wider font-semibold">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="Inquiry Subject"
                    className="w-full bg-bg-secondary/40 border border-border-subtle rounded-xl px-4 py-3 text-text-main placeholder-text-muted/40 focus:outline-none focus:border-accent-gold transition-colors duration-300 font-body"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-display text-xs text-text-muted uppercase tracking-wider font-semibold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Your detailed message..."
                    className="w-full bg-bg-secondary/40 border border-border-subtle rounded-xl px-4 py-3 text-text-main placeholder-text-muted/40 focus:outline-none focus:border-accent-gold transition-colors duration-300 font-body resize-none"
                  />
                </div>

                {/* Form status notification */}
                {status.type && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl flex items-center gap-3 border ${
                      status.type === 'success'
                        ? 'bg-accent-gold/5 border-accent-gold/30 text-text-main'
                        : 'bg-red-500/5 border-red-500/30 text-red-400'
                    }`}
                  >
                    {status.type === 'success' ? (
                      <FiCheckCircle className="text-accent-gold shrink-0" size={20} />
                    ) : (
                      <FiAlertCircle className="text-red-400 shrink-0" size={20} />
                    )}
                    <p className="font-body text-sm font-light">
                      {status.message}
                    </p>
                  </motion.div>
                )}

                <Button
                  type="submit"
                  disabled={loading}
                  variant="primary"
                  className="w-full sm:w-auto self-start mt-2"
                >
                  {loading ? 'Sending...' : (
                    <>
                      Send Message <FiSend size={16} />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};
