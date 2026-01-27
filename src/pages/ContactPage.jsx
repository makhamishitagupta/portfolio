import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { siteData } from '../data/data'


function ContactPage() {
	useEffect(() => {
			// Scroll to top when Projects page loads
			window.scrollTo({ top: 0, behavior: 'smooth' })
		}, [])
	
	// Controlled form state
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [organization, setOrganization] = useState('')
	const [services, setServices] = useState('')
	const [message, setMessage] = useState('')
	const [touched, setTouched] = useState({})

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

	const errors = {
		name: !name.trim() ? 'Name is required' : '',
		email: !email.trim() ? 'Email is required' : (email && !emailRegex.test(email) ? 'Enter a valid email' : ''),
		message: !message.trim() ? 'Message is required' : (message.trim().length < 10 ? 'Message should be at least 10 characters' : ''),
	}

	const isValid = !errors.name && !errors.email && !errors.message

	function handleBlur(field) {
		setTouched(prev => ({ ...prev, [field]: true }))
	}

	function handleSubmit(e) {
		e.preventDefault()
		setTouched({ name: true, email: true, message: true })
		if (!isValid) return

		// Form is valid — open the user's mail client with a prefilled message.
		const to = 'makhamishitagupta@gmail.com'
		const subject = `Portfolio inquiry from ${name || 'Anonymous'}`
		const bodyLines = [
			`Name: ${name}`,
			`Email: ${email}`,
			`Organization: ${organization}`,
			`Services: ${services}`,
			'',
			`Message:`,
			message,
		]
		const body = encodeURIComponent(bodyLines.join('\n'))
		const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${body}`
		// open mail client
		window.location.href = mailto
	}

	return (
		<motion.section 
			className="min-h-screen bg-[#1A1A1A] text-white py-28 px-40"
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
				{/* Navbar */}
				{/* <div className={`absolute top-6 right-30 z-20 flex gap-8 text-lg font-light transition-opacity duration-300`}>
					<a href="/" className="text-white/70 hover:text-[#B29774] transition-colors duration-300">Home</a>
					<a href="/" className="text-white/70 hover:text-[#B29774] transition-colors duration-300">Projects</a>
					<a href="/about" className="text-white/70 hover:text-[#B29774] transition-colors duration-300">About</a>
				</div> */}

				{/* Header row */}
				<div className="grid grid-cols-1 md:grid-cols-12 items-start gap-10">
					<div className="md:col-span-8">
						<motion.h1
							initial={{ opacity: 0, y: 12 }}
							animate={{ opacity: 1, y: 0 }}
							className="font-medium leading-[0.95]"
							style={{ fontSize: 'clamp(3rem,6vw,6rem)' }}
						>
							Let’s start a project together
						</motion.h1>
					</div>
					<div className="md:col-span-4 flex md:justify items-start gap-10">
						<img src="../src/assets/pic4.jpg" alt="Profile" className="h-20 w-20 rounded-full object-cover" />
					</div>
				</div>

				{/* Divider */}
				<div className="mt-20 border-t border-[#333333]" />

				<div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-14">
					{/* Form column */}
					<div className="md:col-span-8">
						<form className="space-y-6" onSubmit={handleSubmit} noValidate>
							<div>
								<p className="text-[#8D8F91] text-xs tracking-widest">01</p>
								<label className="mt-2 block text-[#AAAAAA] text-xm">What’s your name?
									<input
										aria-label="Your name"
										value={name}
										onChange={e => setName(e.target.value)}
										onBlur={() => handleBlur('name')}
										className="mt-3 w-full bg-transparent text-white placeholder-[#8D8F91] outline-none border-b border-[#333333] pb-8"
										placeholder="Name"
									/>
								</label>
								{touched.name && errors.name && <p className="mt-2 text-xs text-red-400">{errors.name}</p>}
							</div>

							<div>
								<p className="text-[#8D8F91] text-xs tracking-widest">02</p>
								<label className="mt-2 block text-[#AAAAAA] text-xm">What’s your email?
									<input
										aria-label="Your email"
										type="email"
										value={email}
										onChange={e => setEmail(e.target.value)}
										onBlur={() => handleBlur('email')}
										className="mt-3 w-full bg-transparent text-white placeholder-[#8D8F91] outline-none border-b border-[#333333] pb-8"
										placeholder="example@gmail.com"
									/>
								</label>
								{touched.email && errors.email && <p className="mt-2 text-xs text-red-400">{errors.email}</p>}
							</div>

							<div>
								<p className="text-[#8D8F91] text-xs tracking-widest">03</p>
								<label className="mt-2 block text-[#AAAAAA] text-xm">Organization name
									<input
										aria-label="Organization"
										value={organization}
										onChange={e => setOrganization(e.target.value)}
										className="mt-3 w-full bg-transparent text-white placeholder-[#8D8F91] outline-none border-b border-[#333333] pb-8"
										placeholder="Company or team"
									/>
								</label>
							</div>

							<div>
								<p className="text-[#8D8F91] text-xs tracking-widest">04</p>
								<label className="mt-2 block text-[#AAAAAA] text-xm">Services needed
									<input
										aria-label="Services needed"
										value={services}
										onChange={e => setServices(e.target.value)}
										className="mt-3 w-full bg-transparent text-white placeholder-[#8D8F91] outline-none border-b border-[#333333] pb-8"
										placeholder="e.g. Frontend, Data, Integrations"
									/>
								</label>
							</div>

							<div>
								<p className="text-[#8D8F91] text-xs tracking-widest">05</p>
								<label className="mt-2 block text-[#AAAAAA] text-xm">Message
									<textarea
										aria-label="Message"
										rows="5"
										value={message}
										onChange={e => setMessage(e.target.value)}
										onBlur={() => handleBlur('message')}
										className="mt-3 w-full bg-transparent text-white placeholder-[#8D8F91] outline-none border-b border-[#333333] pb-8"
										placeholder="Tell me about the project"
									/>
								</label>
								{touched.message && errors.message && <p className="mt-2 text-xs text-red-400">{errors.message}</p>}
							</div>

							<div className="flex items-center justify-end pt-4 ">
								<button
									type="submit"
									disabled={!isValid}
									className={`inline-flex h-30 w-30 md:h-30 md:w-30 items-center justify-center rounded-full ${isValid ? 'bg-[#3B5AFF] hover:scale-105 hover:shadow-[0_0_30px_rgba(59,90,255,.35)]' : 'bg-gray-600/60 cursor-not-allowed'} text-white transition-all duration-300 ease-in-out`}
								>
									<span className="text-xs md:text-sm">Send</span>
								</button>
							</div>
						</form>
					</div>

					{/* Details column */}
					<div className="md:col-span-4 space-y-8">
						<div>
							<p className="text-xs tracking-widest text-[#8D8F91]">CONTACT DETAILS</p>
							<div className="mt-3 space-y-2">
								<a className="block text-white hover:text-[#3B5AFF] transition-colors" href={`mailto:${siteData.email}`}>{siteData.email}</a>
								<p className="text-white/90">{siteData.phone || '+91 98765 43210'}</p>
							</div>
						</div>
						<div>
							<p className="text-xs tracking-widest text-[#8D8F91]">BUSINESS DETAILS</p>
							<div className="mt-3 space-y-1 text-white/90">
								<p>Makham Ishita Gupta</p>
								<p>Location: {siteData.location}</p>
							</div>
						</div>
						<div className="flex gap-6 pt-2 text-white/80">
							<a href={siteData.socials.instagram} className="hover:text-[#3B5AFF] transition-colors">Instagram</a>
							<a href={siteData.socials.linkedin} className="hover:text-[#3B5AFF] transition-colors">LinkedIn</a>
							<a href={siteData.socials.twitter} className="hover:text-[#3B5AFF] transition-colors">Twitter</a>
						</div>
					</div>
				</div>
			</motion.div>
		</motion.section>
	)
}

export default ContactPage


