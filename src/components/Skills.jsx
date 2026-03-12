const skillGroups = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Python", "Java", "REST API", "GraphQL"],
  },
  {
    category: "Database",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"],
  },
  {
    category: "Tools",
    skills: ["Git", "Docker", "VS Code", "Figma", "Linux", "CI/CD"],
  },
]

function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Kỹ năng</h2>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.category} className="skill-group">
            <h3 className="skill-category">{group.category}</h3>
            <div className="skill-list">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-item">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills