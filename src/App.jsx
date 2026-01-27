import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ProjectsPage from './pages/ProjectsPage'
import { Routes, Route, useLocation } from 'react-router-dom'

function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

    	const [showNav, setShowNav] = useState(false)
		const location = useLocation()

		useEffect(() => {
			// Always show navbar on non-home routes
			if (location.pathname !== '/') {
				setShowNav(true)
				return
			}
			const update = () => {
				const threshold = window.innerHeight * 0.6
				setShowNav(window.scrollY > threshold)
			}
			update()
			window.addEventListener('scroll', update, { passive: true })
			window.addEventListener('resize', update)
			return () => {
				window.removeEventListener('scroll', update)
				window.removeEventListener('resize', update)
			}
		}, [location.pathname])

		return (
			<main className="min-h-screen bg-black text-white">
				{showNav && <Navbar onOpen={() => setIsMenuOpen(true)} />}
				<Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

				<Routes>
					<Route
						path="/"
						element={
							<>
								<Hero />
								<div className="bg-[#121212] py-16" />
								<About />
								{/* Projects moved to its own page */}
								<Projects />
								<Contact />
							</>
						}
					/>
					<Route path="/projects" element={<ProjectsPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/contact" element={<ContactPage />} />
				</Routes>
				<Footer />
			</main>
		)
}

export default App
