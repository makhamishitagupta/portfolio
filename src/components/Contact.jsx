import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { siteData } from '../data/data'

function Contact() {
	return (
		<section id="contact" className="bg-[#1A1A1A] text-white min-h-[90vh] flex items-center">
			<div className="mx-auto w-full max-w-6xl px-20">
				<div className="flex items-center justify-between">
					<motion.h2
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="font-extrabold leading-[0.95]"
						style={{ fontSize: 'clamp(3rem, 6vw, 6rem)' }}
					>
						Let’s work together
					</motion.h2>
					<motion.div
						initial={{ opacity: 0, scale: 0.96 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						rransition={{ duration: 0.4 }}
						className="shrink-0"
					>
						<Link to="/contact" className="inline-flex h-20 w-20 sm:h-24 sm:w-24 md:h-40 md:w-40 items-center justify-center text-center rounded-full bg-[#3B5AFF] text-white font-medium leading-tight transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_30px_rgba(59,90,255,.35)]">
							<span className="text-sm md:text-base">Get in touch</span>
						</Link>
					</motion.div>
				</div>

				{/* Divider */}
				<div className="mt-8 border-t border-[#333333]" />

				{/* Contact chips */}
				<div className="mt-8 flex flex-wrap gap-6">
					<a href={`mailto:${siteData.email}`} className="inline-flex items-center rounded-full border border-[#333333] px-6 py-3 text-white/90 hover:text-white hover:border-white/40 transition-all duration-300 ease-in-out">
						{siteData.email}
					</a>
					<span className="inline-flex items-center rounded-full border border-[#333333] px-6 py-3 text-white/80">
						{siteData.phone}
					</span>
				</div>
			</div>
		</section>
	)
}

export default Contact


