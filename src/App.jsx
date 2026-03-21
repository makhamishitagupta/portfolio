import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import SkillsPage from './pages/SkillsPage'
import NotFoundPage from './pages/NotFoundPage'
import { Routes, Route, useLocation, matchPath } from 'react-router-dom'

function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const [showNav, setShowNav] = useState(false)
	const location = useLocation()

	const staticKnownRoutes = ['/', '/projects', '/about', '/skills', '/contact']
	const isKnownRoute =
		staticKnownRoutes.includes(location.pathname) ||
		Boolean(matchPath('/projects/:id', location.pathname))
	const isNotFoundRoute = !isKnownRoute

	useEffect(() => {
		if (isNotFoundRoute) {
			setShowNav(false)
			return
		}

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
	}, [isNotFoundRoute, location.pathname])

	return (
		<main className="min-h-screen bg-black text-white">
			{!isNotFoundRoute && showNav && <Navbar onOpen={() => setIsMenuOpen(true)} />}
			{!isNotFoundRoute && <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />}

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
								<Skills />
								<Contact />
							</>
						}
					/>
					<Route path="/projects" element={<ProjectsPage />} />
					<Route path="/projects/:id" element={<ProjectDetailPage />} />
					<Route path="/about" element={<AboutPage />} />
					<Route path="/skills" element={<SkillsPage />} />
					<Route path="/contact" element={<ContactPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			{!isNotFoundRoute && <Footer />}
		</main>
	)
}

export default App
