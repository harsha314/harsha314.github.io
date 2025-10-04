const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <section className="bio">
        <h2>Professional Background</h2>
        <p>
          I'm a Software Engineer passionate about building web applications and
          solving complex problems. I specialize in full-stack development with
          expertise in React, Node.js, and TypeScript.
        </p>
      </section>
      <section className="skills">
        <h2>Technical Skills</h2>
        <ul>
          <li>Frontend: React, TypeScript, HTML, CSS</li>
          <li>Backend: Node.js, Express</li>
          <li>Databases: MongoDB, PostgreSQL</li>
          <li>Tools: Git, Docker, AWS</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
