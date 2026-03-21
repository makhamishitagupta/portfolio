import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { siteData } from '../data/data'
import Contact from '../components/Contact'

function ProjectDetailPage() {
    const { id } = useParams()

    // Convert id into a number and find the project
    const project = siteData.projects.find(p => p.id === parseInt(id))

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, [id])

    if (!project) {
        return (
            <div className="min-h-screen bg-white text-black flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl mb-4">Project Not Found</h2>
                    <Link to="/projects" className="text-[#3B5AFF] hover:underline">← Back to Projects</Link>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-white min-h-screen text-black">
            <motion.section
                className="py-24 px-4 sm:px-6 md:px-10 lg:px-30 min-h-[80vh] max-w-7xl mx-auto relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                {/* Back Link */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-12 md:mb-16"
                >
                    <Link to="/projects" className="text-lg text-gray-500 hover:text-black transition-colors">
                        ← Back to Projects
                    </Link>
                </motion.div>

                {/* Title */}
                <motion.h1
                    className="text-4xl md:text-5xl lg:text-[4.5rem] leading-tight font-medium tracking-tight mb-16 md:mb-24"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {project.title}
                </motion.h1>

                {/* Metadata Grid matching AboutPage Grid Styling */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {/* Column 1 */}
                    <div className="space-y-4 pt-6 border-t border-gray-200">
                        <h3 className="text-2xl font-medium">Tech Stack</h3>
                        <p className="text-gray-700 text-md">{project.tech?.join(", ")}</p>
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-4 pt-6 border-t border-gray-200">
                        <h3 className="text-2xl font-medium">Overview</h3>
                        <p className="text-gray-700 text-md leading-relaxed text-justify">{project.description}</p>
                    </div>

                    {/* Column 3 */}
                    <div className="space-y-4 pt-6 border-t border-gray-200 relative">
                        <h3 className="text-2xl font-medium">Links</h3>
                        <div className="flex flex-col gap-2 text-md">
                            {project.link && project.link !== "#" && (
                                <a href={project.link} target="_blank" rel="noreferrer" className="text-blue-600 text-md font-medium hover:text-blue-800 transition-colors inline-flex items-center gap-1.5 group">
                                    Source Code
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
                                </a>
                            )}
                            {project.demo && (
                                <a href={project.demo} target="_blank" rel="noreferrer" className="text-blue-600 text-md font-medium hover:text-blue-800 transition-colors inline-flex items-center gap-1.5 group">
                                    Live Demo
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
                                </a>
                            )}
                        </div>

                        {/* Floating "Live site" circular button exactly matching AboutPage shadow & style */}
                        {(project.demo || (project.link && project.link !== "#")) && (
                            <motion.div
                                className="hidden md:flex absolute right-0 md:-right-8 lg:-right-0 top-30 z-10"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <a
                                    href={project.demo || project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-32 h-32 md:w-40 md:h-40 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center text-md font-medium shadow-lg transition-transform gap-2 group"
                                >
                                    {project.demo ? "Live site" : "View Code"}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
                                </a>
                            </motion.div>
                        )}
                    </div>
                </motion.div>

                {/* Detailed About Statement matching AboutPage typography */}
                {project.about && (
                    <motion.div
                        className="max-w-5xl border-t border-gray-200 pt-8 mt-12 mb-16"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <h3 className="text-2xl font-medium mb-6">About the Project</h3>
                        {/* <p className="text-gray-700 text-md leading-relaxed text-justify whitespace-pre-wrap mt-10">
                            {project.about}
                        </p> */}
                        <div className="text-gray-700 text-md leading-relaxed mt-10 space-y-6 text-justify pr-10 md:pr-20 lg:pr-60">

                            {project.about.split('. ').map((point, index) => {
                                const text = point.trim()

                                if (!text) return null

                                return (
                                    <div key={index} className="flex gap-3">
                                        {/* Bullet */}
                                        {/* <div className="mt-2 w-2 h-2 bg-black rounded-full"></div> */}

                                        {/* Content */}
                                        {/* <p className="text-justify">
                                            {text}.
                                        </p> */}
                                        <ul className="list-disc list-inside space-y-2 no-underline">
                                            <li>{text}.</li>
                                        </ul>
                                    </div>
                                )
                            })}

                        </div>
                    </motion.div>
                )}

                {/* Mobile specific floating button */}
                {(project.demo || (project.link && project.link !== "#")) && (
                    <div className="md:hidden flex justify-center mt-12 mb-12">
                        <a
                            href={project.demo || project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="w-36 h-36 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-medium shadow-lg hover:bg-blue-700 transition-colors gap-2 group"
                        >
                            {project.demo ? "Live site" : "View Code"}
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
                        </a>
                    </div>
                )}
            </motion.section>

            {/* The rest of the page */}
            <div className="bg-[#121212]">
                <Contact />
            </div>
        </div>
    )
}

export default ProjectDetailPage
