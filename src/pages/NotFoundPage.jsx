import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function NotFoundPage() {
	const [localTime, setLocalTime] = useState('')

	useEffect(() => {
		const updateTime = () => {
			setLocalTime(
				new Date().toLocaleTimeString([], {
					hour: '2-digit',
					minute: '2-digit',
					hour12: true,
				}),
			)
		}

		updateTime()
		const interval = setInterval(updateTime, 60_000)
		return () => clearInterval(interval)
	}, [])

	return (
		<section className="min-h-screen bg-[#1A1A1A] text-white">
			<div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-6 md:px-10 md:py-8">
				<motion.header
					initial={{ opacity: 0, y: -16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					className="flex items-start justify-between"
				>
					<p className="text-sm font-medium text-white/90 md:text-base">Makham Ishitha Gupta</p>
					<nav className="flex items-center gap-6 text-sm text-white/90 md:gap-10 md:text-base">
						<Link to="/projects" className="transition-colors duration-300 hover:text-indigo-300">Projects</Link>
						<Link to="/about" className="transition-colors duration-300 hover:text-indigo-300">About</Link>
						<Link to="/contact" className="transition-colors duration-300 hover:text-indigo-300">Contact</Link>
					</nav>
				</motion.header>

				<motion.main
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.75, ease: 'easeOut', delay: 0.1 }}
					className="relative mt-16 flex flex-1 flex-col"
				>
					<div className="grid flex-1 grid-cols-1 gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
						<div className="self-center">
							<h1 className="text-6xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">Error 404</h1>
							<p className="mt-4 text-4xl font-medium tracking-tight text-white/95 sm:text-5xl lg:text-6xl">Are you lost?</p>
						</div>
						<p className="self-start text-sm text-[#9ca3af] sm:text-2xl lg:justify-self-end">Designed & built by me ©</p>
					</div>

					<div className="relative mt-10 h-36 md:h-44">
						<div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-white/20" />
						<motion.div
							whileHover={{ scale: 1.06 }}
							whileTap={{ scale: 0.98 }}
							transition={{ type: 'spring', stiffness: 260, damping: 18 }}
							className="absolute right-0 top-1/2 -translate-y-1/2"
						>
							<Link
								to="/"
								className="group flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-[#3B5AFF] to-[#6366f1] text-center text-sm font-medium text-white shadow-[0_0_0px_rgba(99,102,241,0.0)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.45)] sm:h-36 sm:w-36 sm:text-base md:h-44 md:w-44"
							>
								<span className="transition-transform duration-300 group-hover:scale-105">Back to home</span>
							</Link>
						</motion.div>
					</div>
				</motion.main>

				<motion.footer
					initial={{ opacity: 0, y: 18 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut', delay: 0.25 }}
					className="mt-auto grid grid-cols-1 gap-8 pb-2 pt-10 text-[#9ca3af] sm:grid-cols-2 lg:grid-cols-[auto_auto_1fr]"
				>
					{/* <div>
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9ca3af]">Version</p>
						<p className="mt-2 text-lg font-medium text-white sm:text-xl">2022 © Edition</p>
					</div> */}

					<div>
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9ca3af]">Local time</p>
						<p className="mt-2 text-lg font-medium text-white sm:text-xl">{localTime || '06:46 AM'}</p>
					</div>

					<div className="sm:col-span-2 lg:col-span-1 lg:justify-self-end">
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9ca3af]">Socials</p>
						<div className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-base text-white sm:text-lg">
							<a href="https://instagram.com" target="_blank" rel="noreferrer" className="transition-colors duration-300 hover:text-indigo-300">Instagram</a>
							<a href="https://twitter.com" target="_blank" rel="noreferrer" className="transition-colors duration-300 hover:text-indigo-300">Twitter</a>
							<a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition-colors duration-300 hover:text-indigo-300">LinkedIn</a>
						</div>
					</div>
				</motion.footer>
			</div>
		</section>
	)
}

export default NotFoundPage
