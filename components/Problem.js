import { motion } from 'framer-motion';

// Placeholder icons (replace with actual SVGs or an icon library)
const IconSlow = () => <svg className="w-12 h-12 mx-auto mb-4 text-red-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>;
const IconUgly = () => <svg className="w-12 h-12 mx-auto mb-4 text-yellow-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM17.25 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM2 12s3-6 10-6 10 6 10 6-3 6-10 6S2 12 2 12zm5.5-3a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM16.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM9 15a3 3 0 106 0 3 3 0 00-6 0z"></path></svg>;
const IconNoConversions = () => <svg className="w-12 h-12 mx-auto mb-4 text-blue-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"></path></svg>;

const painPoints = [
  { 
    icon: <IconSlow />,
    title: "Slow Loading Speeds", 
    description: "Your website takes forever to load, frustrating visitors and killing your SEO."
  },
  { 
    icon: <IconUgly />,
    title: "Outdated & Ugly Design",
    description: "Your site looks like it's from the 90s, scaring away potential customers."
  },
  { 
    icon: <IconNoConversions />,
    title: "Zero Conversions",
    description: "Plenty of visitors, but no one is buying or contacting you. Sound familiar?"
  },
];

export default function Problem() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          Why Most Websites Fail
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {painPoints.map((point, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
            >
              {point.icon}
              <h3 className="text-xl font-semibold mb-3 text-gray-700">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 