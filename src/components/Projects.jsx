const Projects = ({}) => {
    return (
        <div>
            <div className="card" style={{ width: '24rem' }}>
                <div className="card-body">
                    <h4 className="card-title text-center">URL Shortener</h4>
                    <p className="card-text text-center h6">
                        Create shorter URLs
                    </p>
                    <ol>
                        <li className="text-center my-2">
                            Random,Custom short URLs
                        </li>
                        <li className="text-center my-2">Rename short URLs</li>
                        <li className="text-center my-2">
                            <a
                                href="https://app-bits.herokuapp.com"
                                className="me-2"
                            >
                                Deployment
                            </a>
                            <a href="https://github.com/harsha314/URL-Shortener-MERN">
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
