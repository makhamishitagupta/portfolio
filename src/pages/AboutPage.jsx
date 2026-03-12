import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { siteData } from '../data/data'
import Contact from '../components/Contact'
import './AboutPage.css'

export default function AboutPage() {
	useEffect(() => {
		// Ensure the page starts at the top when navigated to
		try {
			window.scrollTo(0, 0)
		} catch (e) {
			// ignore for server-side or unsupported environments
		}
	}, [])
	return (
		<>
			{/* Hero (Dennis-style) */}
			<section className="bg-white text-black py-24 px-24">
				<div className="mx-auto max-w-7xl px-6">
					<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
						{/* Left large heading */}
						<div className="md:col-span-7 lg:col-span-8">
							<h1 className="text-4xl md:text-5xl lg:text-[5.25rem] leading-tight font-medium tracking-tight">
								Turning ideas into
								<br></br> 
								impactful digital experiences
							</h1>
						</div>

						{/* Right decorative circle and divider */}
						<div className="md:col-span-5 lg:col-span-4 relative">
							<div className="h-0 border-t border-gray-200"></div>
							{/* circle overlapping the divider */}
							<div className="absolute right-0 -translate-y-1/2 top-1/2">
								<button className="w-38 h-38 md:w-48 md:h-48 rounded-full bg-blue-600 text-white grid place-items-center shadow-lg text-2xl font-smedium">
									{/* <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M12 2a10 10 0 100 20 10 10 0 000-20z" stroke="currentColor" strokeWidth="0" fill="none" />
										<circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1" fill="none" />
									</svg> */}
									About me
								</button>
							</div>
						</div>
					</div>
				</div>
				
			</section>

			<section className="bg-white text-black pt-10 pb-20 px-28">
				<p className="text-gray-700 text-lg leading-relaxed text-justify">
					I’m Ishita Gupta, a developer and data science student passionate about transforming complex data into stories that matter.
					From building interactive applications to designing intelligent systems, I explore the space where logic meets creativity.
					I believe in continuous learning, clear structure, and elegant solutions that drive real impact.
					
					Always exploring. Always learning.
				</p>
			</section>

			{/* Content row: arrow + text on left, image on right (matches reference) */}
			<section className="bg-white text-black py-16 px-24">
				<div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
					<div className="md:col-span-5 lg:col-span-4 flex items-start">
						<div className="mr-6 text-2xl text-gray-400">→</div>
						<div>
							<p className="text-gray-700 text-lg leading-relaxed max-w-xl text-justify">
								Curiosity drives everything I do whether I’m analyzing datasets, designing smooth user experiences, or solving algorithmic challenges.
								I believe great products are built where logic meets creativity, and every project I take is a new way to learn, improve, and innovate.
							</p>
						</div>
					</div>

					<div className="md:col-span-7 lg:col-span-8">
						<div className="w-100% h-200 bg-gray-100 rounded-lg shadow-md justify-center flex items-center overflow-hidden">
							<img src='../public/assets/pic1.jpg' alt="About Image" className="w-85% h-180 rounded-lg shadow-md" />
						</div>
					</div>
				</div>
			</section>

			{/* Rest of page (skills/highlight/footer) kept from previous structure */}
			<section className="bg-white text-black py-16 px-24">
				<div className="mx-auto max-w-6xl px-6">
					<motion.h2 className="text-2xl md:text-5xl font-semibold mb-8" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
						I can help you with ...
					</motion.h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<motion.div className="space-y-4" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
							<div className="text-gray-400 font-mono">01</div>
							<h3 className="text-2xl font-medium">Data Science</h3>
							<p className="text-gray-700 ">With a strong foundation in statistics, Python, and machine learning, I turn raw datasets into clear, actionable insights. My work combines technical accuracy with visual storytelling — because data deserves to be understood.</p>
						</motion.div>

						<motion.div className="space-y-4" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
							<div className="text-gray-400 font-mono">02</div>
							<h3 className="text-2xl font-medium">Full-Stack Development</h3>
							<p className="text-gray-700">I build scalable, user-friendly web applications from scratch using the MERN stack. My focus lies in crafting responsive interfaces and robust backend systems that work seamlessly together.</p>
						</motion.div>

						<motion.div className="space-y-4" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
							<div className="text-gray-400 font-mono">03</div>
							<h3 className="text-2xl font-medium">Complete Product Vision</h3>
							<p className="text-gray-700">From concept to deployment, I bring an end-to-end understanding — designing experiences that are intuitive, insightful, and efficient. Whether it’s an API, a dashboard, or a data-driven tool, I care about building things that truly help people.</p>
						</motion.div>
					</div>
				</div>
			</section>

			<section className="bg-white text-black py-16 scroll-px-24">
				<div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
					<motion.div className="w-full" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
						<div className="w-full h-70 bg-gray-100 rounded-lg shadow-md hover:scale-105 transform transition-transform duration-200">
							<img src='../public/assets/pic3.jpg' alt="About Image" className="w-full h-75 rounded-lg shadow-md" />
						</div>
					</motion.div>

					<motion.div className="space-y-4" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
						<div className="inline-flex items-center gap-3">
							<div className="w-10 h-10 rounded-full bg-black text-white grid place-items-center font-bold">W.</div>
							<h3 className="text-2xl font-semibold">Achievements</h3>
						</div>
						<p className="text-gray-700">
							<u className="list-disc list-inside space-y-2 no-underline">
								<li>Secured 96.51 percentile in JEE Mains 2024 </li>
								<li>Ranked 3877 in TS EAPCET and 3299 in COMEDK</li>
								<li>Internship at Bandiwala, a startup from VNRVJIET, in first year</li>
								<li>Runner-Up at VJ Hackathon 2025 organized by CSI Student  	Chapter of VNRVJIET</li>
								<li>3rd Prize in Spark Quiz Competition at Convergence 2025</li>
							</u>
						</p>
					</motion.div>
				</div>
			</section>

			<section className="bg-white text-black py-16 px-24">
				{/* Title */}
				<motion.h2 className="text-2xl md:text-3xl font-semibold mb-8" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
						Education
				</motion.h2>

				{/* Education Content */}
				<div className="mx-auto max-w-3xl px-6 mt-8">
					<motion.div
						className="space-y-5 text-center text-gray-700 text-lg leading-relaxed"
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
					>
						<p className="font-semibold text-xl">
							B.Tech in Computer Science and Engineering (Data Science)
						</p>
						<p className="italic">
							VNR Vignana Jyothi Institute of Engineering and Technology, Hyderabad
						</p>
						<p>2024 – 2028 (Pursuing) | CGPA: <span className="font-semibold">9.7</span> (till 1st Year, I Sem)</p>

						<hr className="border-gray-300 my-4" />

						<p>
							<span className="font-semibold">Intermediate –</span> Sri Chaitanya (2024) — <span className="font-semibold">96%</span>
						</p>
						<p>
							<span className="font-semibold">10th Class –</span> CMR Model High School (2022) — <span className="font-semibold">9.8 CGPA</span>
						</p>
					</motion.div>
				</div>
				<hr className="border-gray-300 mt-20" />
			</section>

			
	
			<section className="bg-white text-black pb-16 px-24 space-y-8">
				<div className="mx-auto max-w-4xl px-6 text-center"> 
					<motion.p className="text-gray-700 text-lg" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}> 
						When I’m not coding, I enjoy sketching, doodling, and crafts. I love exploring new technologies, listening to music, and finding creative inspiration in everyday life. 
					</motion.p> 
				</div>
			</section>


			<Contact />
		</>
	)
	}


