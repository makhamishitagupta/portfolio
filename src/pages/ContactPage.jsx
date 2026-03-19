import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { siteData } from '../data/data'
import pic2 from '../assets/pic2.png'

function ContactPage() {

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}, [])

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [organization, setOrganization] = useState('')
	const [services, setServices] = useState('')
	const [message, setMessage] = useState('')
	const [touched, setTouched] = useState({})

	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

	const errors = {
		name: !name.trim() ? 'Name is required' : '',
		email: !email.trim()
			? 'Email is required'
			: email && !emailRegex.test(email)
				? 'Enter a valid email'
				: '',
		message: !message.trim()
			? 'Message is required'
			: message.trim().length < 10
				? 'Message should be at least 10 characters'
				: '',
	}

	const isValid = !errors.name && !errors.email && !errors.message

	function handleBlur(field) {
		setTouched(prev => ({ ...prev, [field]: true }))
	}

	function handleSubmit(e) {
		e.preventDefault()
		setTouched({ name: true, email: true, message: true })
		if (!isValid) return

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

		window.location.href = mailto
	}

	return (
		<motion.section
			className="bg-[#1A1A1A] text-white py-24 px-4 sm:px-6 md:px-10 lg:px-20 min-h-screen"
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

				{/* Header (same layout style as Projects page) */}
				<div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">

					<div className="md:col-span-8">
						<h1 className="text-4xl md:text-5xl lg:text-[5.25rem] leading-tight font-medium tracking-tight">
							Let’s start a project together
						</h1>
					</div>

					<div className="md:col-span-4 flex items-start">
						<img
							src={pic2}
							alt="Profile"
							className="h-20 w-20 rounded-full object-cover"
						/>
					</div>

				</div>

				{/* Divider */}
				<div className="mt-12 border-t border-[#333333]" />

				<div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-14">

					{/* FORM */}
					<div className="md:col-span-8">

						<form className="space-y-10" onSubmit={handleSubmit} noValidate>

							<div>
								<p className="text-xs tracking-widest text-[#8D8F91]">01</p>

								<label className="mt-2 block text-[#AAAAAA] text-sm">
									What’s your name?

									<input
										value={name}
										onChange={e => setName(e.target.value)}
										onBlur={() => handleBlur('name')}
										className="mt-3 w-full bg-transparent border-b border-[#333333] pb-4 outline-none"
										placeholder="Name"
									/>
								</label>

								{touched.name && errors.name && (
									<p className="text-red-400 text-xs mt-2">{errors.name}</p>
								)}
							</div>

							<div>
								<p className="text-xs tracking-widest text-[#8D8F91]">02</p>

								<label className="mt-2 block text-[#AAAAAA] text-sm">
									What’s your email?

									<input
										type="email"
										value={email}
										onChange={e => setEmail(e.target.value)}
										onBlur={() => handleBlur('email')}
										className="mt-3 w-full bg-transparent border-b border-[#333333] pb-4 outline-none"
										placeholder="example@gmail.com"
									/>
								</label>

								{touched.email && errors.email && (
									<p className="text-red-400 text-xs mt-2">{errors.email}</p>
								)}
							</div>

							<div>
								<p className="text-xs tracking-widest text-[#8D8F91]">03</p>

								<label className="mt-2 block text-[#AAAAAA] text-sm">
									Organization name

									<input
										value={organization}
										onChange={e => setOrganization(e.target.value)}
										className="mt-3 w-full bg-transparent border-b border-[#333333] pb-4 outline-none"
										placeholder="Company or team"
									/>
								</label>
							</div>

							<div>
								<p className="text-xs tracking-widest text-[#8D8F91]">04</p>

								<label className="mt-2 block text-[#AAAAAA] text-sm">
									Services needed

									<input
										value={services}
										onChange={e => setServices(e.target.value)}
										className="mt-3 w-full bg-transparent border-b border-[#333333] pb-4 outline-none"
										placeholder="e.g. Frontend, Data, Integrations"
									/>
								</label>
							</div>

							<div>
								<p className="text-xs tracking-widest text-[#8D8F91]">05</p>

								<label className="mt-2 block text-[#AAAAAA] text-sm">
									Message

									<textarea
										rows="9"
										value={message}
										onChange={e => setMessage(e.target.value)}
										onBlur={() => handleBlur('message')}
										className="mt-3 w-full bg-transparent border-b border-[#333333] pb-4 outline-none"
										placeholder="Tell me about the project"
									/>
								</label>

								{touched.message && errors.message && (
									<p className="text-red-400 text-xs mt-2">{errors.message}</p>
								)}
							</div>

							<div className="flex justify-end pt-4 relative">

								<button
									type="submit"
									disabled={!isValid}
									className={`absolute bottom-0 right-0 h-35 w-35 rounded-full text-white transition-all duration-300 bg-[#3B5AFF] hover:scale-105 hover:shadow-[0_0_30px_rgba(59,90,255,.35)]'
										// : 'bg-gray-600/60 cursor-not-allowed'
										}`}
								>
									Send
								</button>

							</div>

						</form>

					</div>

					{/* DETAILS */}
					<div className="md:col-span-4 space-y-8">

						<div>
							<p className="text-xs tracking-widest text-[#8D8F91]">
								CONTACT DETAILS
							</p>

							<div className="mt-3 space-y-2">
								<a
									className="hover:text-[#3B5AFF]"
									href={`mailto:${siteData.email}`}
								>
									{siteData.email}
								</a>

								<p>{siteData.phone || '+91 98765 43210'}</p>
							</div>
						</div>

						<div>
							<p className="text-xs tracking-widest text-[#8D8F91]">
								BUSINESS DETAILS
							</p>

							<div className="mt-3 space-y-1">
								<p>Makham Ishita Gupta</p>
								<p>Location: {siteData.location}</p>
							</div>
						</div>

						<div className="flex gap-6 pt-2">
							<a href={siteData.socials.instagram} className="hover:text-[#3B5AFF]">Instagram</a>
							<a href={siteData.socials.linkedin} className="hover:text-[#3B5AFF]">LinkedIn</a>
							<a href={siteData.socials.twitter} className="hover:text-[#3B5AFF]">Twitter</a>
						</div>

					</div>

				</div>

			</motion.div>

		</motion.section>
	)
}

export default ContactPage