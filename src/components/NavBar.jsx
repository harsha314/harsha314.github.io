import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const NavBar = ({ location }) => {
    useEffect(() => {
        // console.log(location.pathname);
        let pathname = location.pathname.slice(1) || 'about';
        let highLighted = document.getElementById(`${pathname}-navlink`);
        if (highLighted && highLighted.classList) {
            highLighted.classList.add('btn-secondary');
            highLighted.classList.add('rounded');
        }
        return () => {
            // console.log(location.pathname);
            let pathname = location.pathname.slice(1) || 'about';
            let highLighted = document.getElementById(`${pathname}-navlink`);
            if (highLighted && highLighted.classList) {
                if (highLighted.classList.contains('btn-secondary'))
                    highLighted.classList.remove('btn-secondary');
                if (highLighted.classList.contains('rounded'))
                    highLighted.classList.remove('rounded');
            }
        };
    }, [location]);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand btn mb-0 h1 mx-3">
                    Harsha
                </Link>
                <button
                    className="navbar-toggler mx-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mt-2 mt-lg-0 ms-auto mb-2 mb-lg-0">
                        <li className="nav-item mx-3">
                            <Link
                                to="/"
                                id="about-navlink"
                                className={`nav-link active text-center shadow-none`}
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link
                                to="/projects"
                                id="projects-navlink"
                                className={`nav-link active text-center shadow-none`}
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link
                                to="/programming"
                                id="programming-navlink"
                                className={`nav-link active text-center shadow-none`}
                            >
                                Programming
                            </Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link
                                id="working-navlink"
                                to="/working"
                                className={`nav-link active text-center shadow-none`}
                            >
                                Working On
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
