import { siteData } from '../data/data'

function Footer() {
	return (
		<footer className="bg-black text-white py-8">
			<div className="mx-auto w-full max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
				<p className="text-sm text-white/70">© {new Date().getFullYear()} {siteData.name}</p>
				<div className="flex gap-5 text-sm text-white/70">
					<a href={siteData.socials.github} target="_blank" className="hover:text-[#B29774]">GitHub</a>
					<a href={siteData.socials.linkedin} target="_blank" className="hover:text-[#B29774]">LinkedIn</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer


