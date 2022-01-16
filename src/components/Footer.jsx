const Footer = () => {
    return (
        <footer
            className="bg-dark d-flex flex-row justify-content-center text-light fs-6 mt-auto"
            style={{ height: '12vh', width: '100vw' }}
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
                <a href="/" className="link-light">
                    LinkedIn
                </a>
            </div>
            <div className="mx-2 mx-lg-4 my-auto">
                <a href="/" className="link-light">
                    Resume
                </a>
            </div>
        </footer>
    );
};

export default Footer;
