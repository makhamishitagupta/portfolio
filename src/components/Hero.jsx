import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { siteData } from '../data/data'
import pic6 from '../assets/pic6.png'
import { Github, Linkedin, Mail, Download } from 'lucide-react'

function Hero() {
	return (
		<section id="home" className="relative min-h-screen bg-black text-white overflow-hidden">
			{/* Hero-only desktop navbar (reference style) */}
			<div className="pointer-events-none absolute inset-x-0 top-4 z-30 hidden md:flex justify-center px-4 lg:px-8">
				<div className="pointer-events-auto flex w-full max-w-6xl items-center justify-between">
					{/* Logo */}
					<Link
						to="/"
						className="flex items-center gap-3 text-sm font-semibold tracking-wide text-white"
					>
						<div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs font-bold text-black">
							MG
						</div>
					</Link>

					{/* Center nav links */}
					<nav className="flex items-center gap-8 text-sm font-medium text-black/80">
						<Link to="/about" className="hover:text-white transition-colors">
							About me
						</Link>
						<Link to="/skills" className="hover:text-white transition-colors">
							Skills
						</Link>
						<Link to="/projects" className="hover:text-white transition-colors">
							Projects
						</Link>
					</nav>

					{/* Contact button */}
					<Link
						to="/contact"
						className="rounded-full border border-white bg-white text-black px-5 py-2 text-xs font-semibold tracking-wide hover:bg-[#B29774] hover:border-[#B29774] hover:text-white transition-colors"
					>
						CONTACT ME
					</Link>
				</div>
			</div>
			{/* Desktop / tablet layout */}
			<div className="hidden md:block">
				<div className="relative mx-auto flex min-h-screen max-w-6xl items-stretch px-4 lg:px-8">
					{/* Angled light panel */}
					<div className="relative z-10 flex basis-[58%] items-center">
						<div
							className="absolute inset-y-0 left-[-6rem] w-[145%]"
							style={{
								background:
									'linear-gradient(135deg, #D7D7D7 0%, #C4C4C4 40%, #D7D7D7 100%)',
								// Slightly wider light area before the diagonal break
								clipPath: 'polygon(0 0, 85% 0, 55% 100%, 0 100%)',
							}}
						/>

						<motion.div
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, ease: 'easeOut' }}
							className="relative z-20 px-10 py-28 lg:px-16 lg:py-32 text-black"
						>
							<p className="text-sm font-medium tracking-[0.35em] text-gray-500 uppercase ml-1">
								Hi, I am
							</p>
							<h1 className="mt-5 text-4xl md:text-5xl lg:text-[4rem] font-semibold leading-tight tracking-tight text-black">
								{siteData.name}
							</h1>

							<p className="mt-3 text-base md:text-lg text-[#909090] ml-1">
								{siteData.title}
							</p>

							{/* <div className="mt-12 flex items-center gap-4 text-sm">
								<a
									href={`mailto:${siteData.email}`}
									className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-black/5 bg-[#D7D7D7] shadow-sm transition-colors hover:bg-[#C4C4C4]"
								>
									<Mail className="h-5 w-5 text-black" />
								</a>
								<a
									href={siteData.socials.github}
									target="_blank"
									rel="noreferrer"
									className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-black/5 bg-[#D7D7D7] shadow-sm transition-colors hover:bg-[#C4C4C4]"
								>
									<Github className="h-5 w-5 text-black" />
								</a>
								<a
									href={siteData.socials.linkedin}
									target="_blank"
									rel="noreferrer"
									className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-black/5 bg-[#D7D7D7] shadow-sm transition-colors hover:bg-[#C4C4C4]"
								>
									<Linkedin className="h-5 w-5 text-black" />
								</a>
							</div> */}

							{/* <a
								href="/resume.pdf"
								download="Ishita-Gupta-Resume.pdf"
								className="inline-flex h-12 w-30 items-center justify-center rounded-full border border-black/5 bg-[#D7D7D7] shadow-sm transition-colors hover:bg-[#C4C4C4] mt-3"
							>
								<Download className="h-5 w-5 text-black mr-3" /> Resume
							</a> */}
							<a
								href="/resume.pdf"
								download="Ishita-Gupta-Resume.pdf"
								className="inline-flex items-center gap-2 px-6 py-3 mt-7 rounded-full bg-gray-600 text-white text-sm font-medium transition-all duration-300 hover:bg-[#3B5AFF] hover:scale-105 shadow-md"
							>
								<Download className="h-5 w-5" />
								Download Resume
							</a>
						</motion.div> 	
					</div>

					{/* Dark image panel */}
					<div className="relative z-10 flex basis-[42%] items-end justify-center overflow-visible">
						<div
							className="absolute inset-y-0 right-[-6rem] w-[145%]"
							style={{
								backgroundColor: '#000000',
								clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 58% 100%)',
							}}
						/>
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.9, ease: 'easeOut' }}
							className="relative z-20 flex h-full items-end justify-center"
						>
							<img
								src={pic6}
								alt="Portrait"
								className="h-[570px] w-auto max-w-none object-cover zoom-in"
							/>
						</motion.div>
					</div>
				</div>
			</div>

			{/* Mobile layout */}
			<div className="block md:hidden">
				<div className="relative h-[85vh] w-full">
					<img
						src={pic6}
						alt="Portrait"
						className="h-full w-full object-cover"
					/>

					{/* Diagonal / gradient overlay at bottom */}
					<div
						className="absolute inset-x-0 bottom-0 h-1/2"
						style={{
							background:
								'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.95) 100%)',
						}}
					/>

					<div className="absolute inset-x-0 bottom-0 px-5 pb-8">
						<motion.div
							initial={{ opacity: 0, y: 24 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="flex items-end justify-between gap-6"
						>
							<div className="max-w-[65%]">
								<p className="text-[11px] font-medium tracking-[0.35em] text-gray-300 uppercase">
									Hi, I am
								</p>
								<h1 className="mt-2 text-2xl font-semibold leading-snug">
									{siteData.name}
								</h1>
								<p className="mt-1 text-xs text-gray-200">
									{siteData.title}
								</p>
							</div>

							<div className="flex flex-col items-center gap-3 pb-1">
								<a
									href={`mailto:${siteData.email}`}
									className="flex h-9 w-9 items-center justify-center rounded-md bg-white/90"
								>
									<Mail className="h-4 w-4 text-black" />
								</a>
								<a
									href={siteData.socials.github}
									target="_blank"
									rel="noreferrer"
									className="flex h-9 w-9 items-center justify-center rounded-md bg-white/90"
								>
									<Github className="h-4 w-4 text-black" />
								</a>
								<a
									href={siteData.socials.linkedin}
									target="_blank"
									rel="noreferrer"
									className="flex h-9 w-9 items-center justify-center rounded-md bg-white/90"
								>
									<Linkedin className="h-4 w-4 text-black" />
								</a>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero