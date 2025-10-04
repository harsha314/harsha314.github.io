const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Harsha. All rights reserved.</p>
      <div className="social-links">
        <a
          href="https://github.com/harsha314"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/your-profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
