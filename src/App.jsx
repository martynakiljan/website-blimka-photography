import './styles/all.scss'
import Menu from './components/Menu'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Services from './components/Services'
import Process from './components/Process'
import Instagram from './components/Instagram'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Spinner from './components/Spinner'
import React, { useState, useEffect } from 'react'
import LanguageSwitcher from './components/TopButtons'
import ScrollToTopButton from './components/ScrollToTopButton'

function App() {
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false)
		}, 500)

		return () => clearTimeout(timer)
	}, [])

	return (
		<div className='App'>
			{loading ? (
				<Spinner />
			) : (
				<div className='wrapper'>
					<LanguageSwitcher />
					<Menu />
					<Header />
					<AboutMe />
					<Services />
					<Process />
					<Projects />
					<Instagram />
					<Contact />
					<ScrollToTopButton />
					<Footer />
				</div>
			)}
		</div>
	)
}
export default App
