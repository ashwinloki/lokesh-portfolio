const Contact = () => {
  return (
    <>
      <section className="contact-section" id="contact">
        <div className="contact-label">
          <span className="contact-dot"></span>
          AVAILABLE TO CONNECT
        </div>

        <h2>
  Let’s build something
  <br />
  <span>intelligent and useful.</span>
</h2>

        <p>
  I'm open to AI engineering opportunities, collaborations,
  and conversations around building practical AI products.
</p>

        <div className="contact-actions">
          <a
            href="mailto:ashwinlokesh1405@gmail.com"
            className="contact-primary"
          >
            Send an Email
            <span>↗</span>
          </a>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/lokesh-p-b71468202/?isSelfProfile=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/ashwinloki"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <a href="#home" className="footer-logo">
          Lokesh<span>.</span>
        </a>

        <p>
          AI Engineer · UI/UX Designer
        </p>

        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>
      </footer>
    </>
  );
};

export default Contact;