export default function Contact() {
  return (
    <div className="page contact-page">
      <h1>Let's stay connected</h1>

      <section className="newsletter">
        <h2>Connect with me</h2>
        <p>Reach out directly and let's start the conversation.</p>
        <div className="contact-links">
          <div className="contact-item">
            <h3>WhatsApp</h3>
            <a href="https://wa.me/33716599324" target="_blank" rel="noopener noreferrer" className="contact-link">
              Send a message
            </a>
          </div>
          <div className="contact-item">
            <h3>Instagram</h3>
            <a href="https://instagram.com/ceciliaohayon" target="_blank" rel="noopener noreferrer" className="contact-link">
              Follow me
            </a>
          </div>
          <div className="contact-item">
            <h3>Calendar</h3>
            <a href="https://calendly.com/ceciliaohayon/connection-call" target="_blank" rel="noopener noreferrer" className="contact-link">
              Book a call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
