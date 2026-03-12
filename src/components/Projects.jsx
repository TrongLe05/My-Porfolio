import projects from "../data/projects"

function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Dự án</h2>
      <div className="projects-grid">
        {projects.map((p, index) => (
          <div key={index} className="project-card">
            <div className="project-img-wrapper">
              <img
                src={p.image}
                alt={p.name}
                className="project-img"
              />
            </div>
            <h3 className="project-name">{p.name}</h3>
            <p className="project-desc">{p.description}</p>
            <div className="project-tech">
              {p.tech.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={p.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={p.demo} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects