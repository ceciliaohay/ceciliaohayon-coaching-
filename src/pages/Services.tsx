export default function Services() {
  return (
    <div className="page services-page">
      <h1>How we work together</h1>

      <section className="entry-offers">
        <div className="offers-grid">
          <div className="offer-card">
            <h3>Consultation Call</h3>
            <p className="price">Free</p>
            <p>A first check-in to explore where you stand and what's possible for you. You bring an idea or desire, and we look at it together to understand your starting point.</p>
            <a href="https://calendly.com/ceciliaohayon/connection-call" target="_blank" rel="noopener noreferrer" className="secondary-button">Book now</a>
          </div>

          <div className="offer-card featured">
            <h3>90-Minute Intensive</h3>
            <p className="price">Investment required</p>
            <p className="description">Before the session: Prepare with guided pre-work to clarify your vision.</p>
            <p className="description">During: 90 minutes of focused work to close the gap between where you are and the reality you see for yourself.</p>
            <p className="description">After: One week of Telegram support to integrate and move forward.</p>
            <p>You'll leave with clarity, direction, and a plan that's truly yours.</p>
            <a href="https://wa.me/33716599324" target="_blank" rel="noopener noreferrer" className="cta-button">Get more information</a>
          </div>
        </div>
      </section>

      <section className="coaching-programs">
        <h2>Coaching Programs</h2>

        <div className="programs-grid">
          <div className="program-card">
            <h3>3-Month Program</h3>
            <p className="sessions">2 sessions per month + Telegram coaching</p>
            <p>This is where you start. Where you touch the gap and begin closing it. You'll get clarity on your vision, identify what's holding you back, and create momentum toward your goal.</p>
            <a href="https://wa.me/33716599324" target="_blank" rel="noopener noreferrer" className="secondary-button">Learn more</a>
          </div>

          <div className="program-card">
            <h3>6-Month Program</h3>
            <p className="sessions">2 sessions per month + Telegram coaching</p>
            <p>This is where transformation happens. You don't just close the gap—you become the woman who embodies this new reality. With twice the time, you integrate deeply, create sustainable change, and step fully into your aligned life.</p>
            <a href="https://wa.me/33716599324" target="_blank" rel="noopener noreferrer" className="secondary-button">Learn more</a>
          </div>
        </div>

        <div className="programs-note">
          <p><strong>The difference?</strong> Three months is enough to touch it. Six months is enough to truly become it.</p>
        </div>
      </section>
    </div>
  );
}
