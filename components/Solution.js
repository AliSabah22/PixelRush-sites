import { motion } from 'framer-motion';

// Placeholder icons (replace with actual SVGs or an icon library)
const IconMobile = () => <svg className="w-10 h-10 mb-3 text-indigo-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>;
const IconSpeed = () => <svg className="w-10 h-10 mb-3 text-indigo-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>;
const IconSEO = () => <svg className="w-10 h-10 mb-3 text-indigo-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10.568 4.756A9.004 9.004 0 0112 4.5a9 9 0 015.482 16.017M13.432 19.244A9.004 9.004 0 0112 19.5a9 9 0 01-5.482-16.017m4.048 6.355a3 3 0 104.242-4.242 3 3 0 00-4.242 4.242zM12 12L9.92 9.92M14.08 14.08L12 12"></path></svg>;
const IconUI = () => <svg className="w-10 h-10 mb-3 text-indigo-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4H7zm0 0L17 5m-3.586 3.586a2 2 0 102.828 2.828 2 2 0 00-2.828-2.828z"></path></svg>;
const IconBranding = () => <svg className="w-10 h-10 mb-3 text-indigo-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 11a7 7 0 017-7h2a7 7 0 017 7v1a.9.9 0 01-.9.9H4.9A.9.9 0 014 12V11zM4 11V9a2 2 0 012-2h12a2 2 0 012 2v2M5 15h14M9 18h6"></path></svg>;
const IconLaunch = () => <svg className="w-10 h-10 mb-3 text-indigo-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>;

const solutions = [
  { icon: <IconMobile />, title: "Mobile-First Design", description: "Flawless experience on every device, from phones to desktops." },
  { icon: <IconSpeed />, title: "Fast Load Time", description: "Blazing-fast sites that keep users engaged and boost rankings." },
  { icon: <IconSEO />, title: "SEO-Ready", description: "Built with SEO best practices to get you found on Google." },
  { icon: <IconUI />, title: "Interactive UI", description: "Modern, engaging interfaces that delight your visitors." },
  { icon: <IconBranding />, title: "Custom Branding", description: "Designs that reflect your unique brand and captivate your audience." },
  { icon: <IconLaunch />, title: "Launch in 3 Days", description: "Get your high-converting website live in record time." },
];

export default function Solution() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          Here's What You Get With PixelRush
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div 
              key={index}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            >
              <div className="flex items-center justify-center md:justify-start mb-4 md:mb-0 md:mr-4">
                {solution.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-700">{solution.title}</h3>
                <p className="text-gray-600 text-sm">{solution.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 