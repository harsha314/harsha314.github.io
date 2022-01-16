import me from '../assets/me.jpg';

const About = () => {
    return (
        <div
            id="about"
            className="flex-grow-1 d-flex justify-content-center align-items-center"
        >
            <div className="row" style={{ width: '54rem' }}>
                <div
                    className="
                        col-md-8
                        d-flex
                        flex-column
                        align-items-center
                        justify-content-center
                    "
                >
                    <p className="h3 text-center">Harsha Vardhan</p>
                    <ul>
                        <li className="h6">
                            Final Year-UG studying CSE at NIT,Durgapur
                        </li>
                        <li className="h6">
                            interested in Algorithms, Databases, ReactJS
                        </li>
                    </ul>
                </div>
                <div className="col-md-4 d-flex justify-content-center">
                    <img
                        src={String(me)}
                        alt="image ille"
                        className="rounded-3"
                        style={{ maxWidth: '18rem', height: 'auto' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
