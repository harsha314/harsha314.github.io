const Deployment = ({ deployment, textMode }) => {
    if (deployment) {
        return (
            <a
                href={deployment}
                target="_blank"
                rel="noreferrer"
                className={`link-${textMode} mx-1`}
            >
                Deployment
            </a>
        );
    }
    return <></>;
};

const ProjectCard = ({ props, mode, textMode }) => {
    let { projectName, mainIdea, description, repo, deployment } = props;

    return (
        <div
            className={`card bg-${mode} border border-${textMode} m-3`}
            style={{ width: '24rem' }}
        >
            <div className="card-body">
                <h4 className="card-title text-center">{projectName}</h4>
                <p className="card-text text-center h6">{mainIdea}</p>
                <ol>
                    <li className="text-center my-2">{description[0]}</li>
                    <li className="text-center my-2">{description[1]}</li>
                    <li className="text-center my-2">{description[2]}</li>
                    <li className="text-center my-2">
                        <Deployment
                            deployment={deployment}
                            textMode={textMode}
                        />
                        <a
                            href={repo}
                            target="_blank"
                            rel="noreferrer"
                            className={`link-${textMode}`}
                        >
                            Repository
                        </a>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default ProjectCard;
