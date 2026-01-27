
function Navbar({ onOpen }) {
	return (
		<div className="pointer-events-none fixed right-6 top-6 z-40">
			<button
				aria-label="Open menu"
				onClick={onOpen}
				className="pointer-events-auto h-12 w-12 rounded-full bg-black hover:bg-[#1A1A1A] text-white flex items-center justify-center border border-white/20 transition-colors"
			>
				<div className="relative h-5 w-5">
					<span className="absolute left-0 top-1 block h-0.5 w-5 bg-white"></span>
					<span className="absolute left-0 top-2.5 block h-0.5 w-5 bg-white"></span>
					<span className="absolute left-0 bottom-1 block h-0.5 w-5 bg-white"></span>
				</div>
			</button>
			{/* Right-top About link (route) */}
			{/* <div className="hidden md:block absolute right-16 top-0 pointer-events-auto">
				<a href="/about" className="text-white/70 hover:text-[#B29774] transition-colors underline-offset-4 hover:underline">About</a>
			</div> */}
		</div>
	)
}

export default Navbar
