const Projects = ({ mode }) => {
    const textMode = mode === 'dark' ? 'light' : 'dark';
    return (
        <div
            className={`flex-grow-1 d-flex justify-content-center align-items-center bg-${mode} text-${textMode}`}
        >
            <div
                className={`card bg-${mode} border border-${textMode}`}
                style={{ width: '24rem' }}
            >
                <div className="card-body">
                    <h4 className="card-title text-center">URL Shortener</h4>
                    <p className="card-text text-center h6">
                        Create shorter URLs
                    </p>
                    <ol>
                        <li className="text-center my-2">
                            Random, Custom short URLs
                        </li>
                        <li className="text-center my-2">Rename short URLs</li>
                        <li className="text-center my-2">
                            <a
                                href="https://app-bits.herokuapp.com"
                                target="_blank"
                                rel="noreferrer"
                                className={`link-${textMode}`}
                            >
                                Deployment
                            </a>
                            <a
                                href="https://github.com/harsha314/URL-Shortener-MERN"
                                target="_blank"
                                rel="noreferrer"
                                className={`ms-2 link-${textMode}`}
                            >
                                Repo
                            </a>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Projects;
