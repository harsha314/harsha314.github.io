import { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';

const Projects = ({ mode }) => {
    const [projects, setProjects] = useState([]);
    const textMode = mode === 'dark' ? 'light' : 'dark';
    useEffect(() => {
        setProjects([
            {
                projectName: `URL Shortener`,
                mainIdea: `Create shorter URLs`,
                description: [
                    `Random, Custom short URLs`,
                    `Rename short URLs`,
                    `MongoDB , Express , ReactJS , NodeJS`
                ],
                repo: `https://github.com/harsha314/URL-Shortener-MERN`,
                deployment: `https://app-bits.herokuapp.com`
            },
            {
                projectName: `Expense Tracker API`,
                mainIdea: ` Track your expenses's`,
                description: [
                    `Save Transactions`,
                    `Check expenses in a period`,
                    `MySQL , Express , NodeJS`
                ],
                repo: `https://github.com/harsha314/expense-tracker-api`,
                deployment: ``
            }
        ]);
    }, []);
    return (
        <div
            className={`flex-grow-1 d-flex justify-content-center align-items-center bg-${mode} text-${textMode}`}
        >
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    props={project}
                    mode={mode}
                    textMode={textMode}
                />
            ))}
        </div>
    );
};

export default Projects;
