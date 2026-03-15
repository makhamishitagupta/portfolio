import { Link } from 'react-router-dom'
import Projects from '../components/Projects'
import { motion } from 'framer-motion'
import { siteData } from '../data/data'
import Contact from '../components/Contact'
import { useEffect } from 'react'

function ProjectsPage() {
    useEffect(() => {
        // Scroll to top when Projects page loads
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [])

    return (
        <>
            <motion.section 
                id="projects" 
                className="bg-white text-black py-24 px-4 sm:px-6 md:px-10 lg:px-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <motion.div 
                    className="mx-auto w-full max-w-6xl px-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.div 
                        className="pb-8 border-b border-neutral-200 px-4 sm:px-6 lg:px-10"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                    <motion.h2
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xl md:text-xl lg:text-[5.25rem] leading-tight font-medium tracking-tight"
                    >
						Projects that define my journey
                    </motion.h2>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-20">
                        {siteData.projects.map((p) => (
                            <motion.a
                                key={p.id}
                                href={p.link}
                                target="_blank"
                                whileHover={{ y: -3 }}
                                className="group border border-neutral-200 hover:border-[#B29774] transition-colors rounded-xl overflow-hidden bg-white"
                            >
                                <div className="aspect-16/10 bg-[#121212] grid place-items-center">
                                    {/* Placeholder if images are not present */}
                                    <span className="text-white/60">{p.title}</span>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-xl font-semibold tracking-wide uppercase">{p.title}</h3>
                                    <p className="mt-2 text-neutral-600">{p.description}</p>
                                    <span className="mt-4 inline-flex items-center gap-2 text-sm text-black group-hover:text-[#B29774] transition-colors">
                                        View Project →
                                    </span>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </motion.section>
            <Contact />
        </>
    )
}

export default ProjectsPage
