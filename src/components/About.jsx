import me from '../assets/me.jpg';

const About = ({ mode }) => {
    const textMode = mode === 'dark' ? 'light' : 'dark';
    return (
        <div
            id="about"
            className={`flex-grow-1 d-flex flex-column flex-md-row justify-content-evenly align-items-center bg-${mode} text-${textMode}`}
        >
            <div className="text-center lh-lg">
                <p className="h3 ">Harsha Vardhan</p>
                <ul style={{ listStyleType: 'none' }}>
                    <li className="fs-6">
                        Final Year UG student at NIT Durgapur
                    </li>
                    <li className="fs-6">Interested in Algorithms,Databases</li>
                    <li className="fs-6">
                        Programming Languages : C++, Javascript
                    </li>
                </ul>
            </div>
            <div className="d-flex align-items-center justify-content-center">
                <img
                    src={me}
                    alt="not loaded :("
                    style={{ maxWidth: '18rem', height: 'auto' }}
                />
            </div>
        </div>
    );
};

export default About;
