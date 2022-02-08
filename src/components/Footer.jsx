const Footer = () => {
    return (
        <footer
            className="bg-dark d-flex flex-row justify-content-center text-light fs-6 mt-auto"
            style={{
                height: '12vh',
                width: '100vw'
            }}
        >
            <div className="mx-2 mx-lg-4 my-auto">
                <a
                    href="https://github.com/harsha314"
                    target="_blank"
                    rel="noreferrer"
                    className="link-light"
                >
                    Github
                </a>
            </div>
            <div className="mx-2 mx-lg-4 my-auto">
                <a
                    href="https://www.linkedin.com/in/harsha-vardhan-ravupalli"
                    target="_blank"
                    className="link-light"
                    rel="noreferrer"
                >
                    LinkedIn
                </a>
            </div>
            <div className="mx-2 mx-lg-4 my-auto">
                <a
                    href="https://drive.google.com/file/d/1K_h3FeA3YG9AiUMp3Ieq1S1VPLf5doXZ/view?usp=sharing"
                    target="_blank"
                    className="link-light"
                    rel="noreferrer"
                >
                    Resume
                </a>
            </div>
        </footer>
    );
};

export default Footer;
