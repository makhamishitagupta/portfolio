import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function About() {
    return (
        <motion.section 
            id="about" 
            className="bg-white pt-28"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <motion.div 
                className="mx-auto max-w-6xl px-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
            >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
                    {/* Left Column - Large Heading */}
                    <motion.div 
                        className="md:col-span-8"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <motion.h2 
                            className="text-3xl md:text-4xl lg:text-[2.5rem] font-medium leading-tight tracking-tight text-gray-700"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
							I build scalable web applications and develop data-driven systems
							that solve real-world problems with precision and creativity.
                        </motion.h2>
                    </motion.div>

                    {/* Right Column - Paragraph and Button */}
                    <motion.div 
                        className="space-y-8 md:col-span-4"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <motion.p 
                            className="text-gray-600 text-lg leading-relaxed"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            viewport={{ once: true }}
                        >
                            As a passionate developer and data science student,
							From building applications to optimizing algorithms, I love turning ideas into impactful tech.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <Link 
                                to="/about"
                                className="inline-flex items-center justify-center w-24 h-24 md:w-35 md:h-35 bg-black text-white rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-[#3B5AFF]"
                            >
                                About me
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </motion.section>
    )
}