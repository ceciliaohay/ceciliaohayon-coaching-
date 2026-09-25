export default function Home() {
  return (
    <div className="page home-page">
      <section className="hero">
        <div className="hero-image">
          <img src="/images/be788803-image.jpg" alt="Cecilia Ohayon" />
        </div>
        <div className="hero-content">
          <h1>Supporting you to create the life you know you are meant for</h1>
        </div>
      </section>

      <section className="recognition">
        <div className="recognition-content">
          <p>You already know exactly where you want to go. You see the opportunities. You see yourself living that reality you keep seeing in your mind.</p>

          <p>There's a gap between the woman you know is possible and where you are right now.</p>

          <p>You are fully committed and capable. You won't accept anything less, because living aligned with your purpose is what makes you feel alive.</p>

          <p className="highlight">What's missing isn't the knowing. It's the support to actually become her.</p>
        </div>
      </section>

      <section className="how-i-work">
        <h2>How I Work</h2>
        <div className="work-grid">
          <div className="work-card">
            <img src="/images/757cb933-image.jpg" alt="Connection" />
            <h3>Connection</h3>
            <p>A safe space where you can be fully yourself, explored together</p>
          </div>
          <div className="work-card">
            <img src="/images/ac4c7918-image.jpg" alt="Awareness" />
            <h3>Awareness</h3>
            <p>Understanding what's really going on beneath the surface</p>
          </div>
          <div className="work-card">
            <img src="/images/1b543cb7-image.jpg" alt="Integration" />
            <h3>Integration</h3>
            <p>Embodying the shifts so they stick and become real in your life</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to bridge the gap?</h2>
        <p>Let's start with a free consultation call to explore what's possible for you.</p>
        <a href="#contact" className="cta-button">Book a consultation call</a>
      </section>
    </div>
  );
}
