import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero name="Lê Minh Trọng" job="Full-Stack Developer" />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">
        <p>© 2026 Lê Minh Trọng. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
