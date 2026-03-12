function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Liên hệ</h2>
      <p className="contact-desc">
        Bạn có dự án muốn hợp tác hoặc muốn trao đổi thêm? Hãy liên hệ với mình!
      </p>
      <div className="contact-links">
        <a href="mailto:contact@example.com" className="contact-item">
          <span className="contact-icon"><img src="https://img.icons8.com/?size=100&id=eFPBXQop6V2m&format=png&color=000000" alt="Email-Icon" /></span>
          <span>leminhtrong0901@gmail.com</span>
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <span className="contact-icon"><img src="https://img.icons8.com/?size=100&id=LoL4bFzqmAa0&format=png&color=000000" alt="GitHub-Icon" /></span>
          <span>GitHub</span>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <span className="contact-icon"><img src="https://img.icons8.com/?size=100&id=MR3dZdlA53te&format=png&color=000000" alt="LinkedIn-Icon" /></span>
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  )
}

export default Contact