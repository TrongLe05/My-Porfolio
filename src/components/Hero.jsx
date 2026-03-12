function Hero({ name, job }) {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-avatar">
          <img
            src="../public/projects/avatar.jpg"
            alt={name}
            className="hero-avatar-img"
          />
        </div>
        <div className="hero-info">
          <p className="hero-greeting">Xin chào, mình là</p>
          <h1 className="hero-name">{name}</h1>
          <h2 className="hero-job">{job}</h2>
          <p className="hero-desc">
            Mình đam mê xây dựng các ứng dụng web hiện đại, hiệu năng cao
            và mang lại trải nghiệm tốt nhất cho người dùng.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">Xem dự án</a>
            <a href="#contact" className="btn btn-outline">Liên hệ</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero