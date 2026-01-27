import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { siteData } from '../data/data'

function Hero() {
    const [showLinks, setShowLinks] = useState(true)

    useEffect(() => {
        const section = document.getElementById('home')
        if (!section) return
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0]
                setShowLinks(entry.isIntersecting)
            },
            { root: null, threshold: 0.2 }
        )
        observer.observe(section)
        return () => observer.disconnect()
    }, [])

    return (
        <section id="home" className="min-h-screen bg-black text-white flex items-center">
            <div className="mx-auto w-full max-w-6xl px-6 relative">
                <div className={`fixed top-6 right-10 z-20 flex gap-8 text-lg font-light transition-opacity duration-300 ${showLinks ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <a href="/projects" className="text-white/70 hover:text-[#B29774] transition-colors duration-300">Projects</a>
                    <a href="/about" className="text-white/70 hover:text-[#B29774] transition-colors duration-300">About</a>
                    <a href="/contact" className="text-white/70 hover:text-[#B29774] transition-colors duration-300">Contact</a>
                </div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight"
                >
                    {siteData.name} <br /> {siteData.title}
                </motion.h1>
                {/* <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-6 max-w-2xl text-lg text-neutral-300"
                >
                    {siteData.about}
                </motion.p> */}
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-10 flex flex-wrap gap-4"
                >
                    <a href="/resume.pdf" download="Ishita-Gupta-Resume.pdf" className="rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-5 py-2 transition-colors">Resume</a>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero