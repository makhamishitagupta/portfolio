import { motion, AnimatePresence } from 'framer-motion'
import { siteData } from '../data/data'

function Sidebar({ isOpen, onClose }) {
	const navItems = [{ href: '/', label: 'Home' }, ...siteData.sections.map((s) => ({ href: `/${s.toLowerCase()}`, label: s }))]

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.aside
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 z-50 bg-[#0b0b0b]/95 backdrop-blur-sm"
				>
					{/* Close Button */}
					<button
						aria-label="Close menu"
						onClick={onClose}
						className="absolute top-6 right-6 h-12 w-12 rounded-full bg-[#3B5AFD] text-white text-2xl leading-none flex items-center justify-center"
					>
						×
					</button>

					{/* Panel */}
					<motion.div
						initial={{ x: 40, scale: 0.98 }}
						animate={{ x: 0, scale: 1 }}
						exit={{ x: 40, scale: 0.98 }}
						transition={{ type: 'spring', stiffness: 120, damping: 18 }}
						className="flex h-full w-full flex-col items-center justify-center gap-8 px-6"
					>
						<nav className="flex flex-col items-center gap-6">
							{navItems.map((item) => (
								<a
									key={item.href}
									href={item.href}
									onClick={onClose}
									className="text-white text-3xl md:text-5xl tracking-wide hover:text-[#B29774] transition-colors"
								>
									{item.label}
								</a>
							))}
						</nav>

						{/* Socials */}
						<div className="absolute bottom-10 flex gap-6 text-sm text-neutral-300">
							<a href={siteData.socials.github} target="_blank" className="hover:text-[#B29774]">GitHub</a>
							<a href={siteData.socials.linkedin} target="_blank" className="hover:text-[#B29774]">LinkedIn</a>
						</div>
					</motion.div>
				</motion.aside>
			)}
		</AnimatePresence>
	)
}

export default Sidebar


