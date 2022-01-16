import { Switch, Route, useLocation } from 'react-router-dom';

import Footer from './components/Footer';
import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import Programming from './components/Porgramming';
import Working from './components/Working';

const App = () => {
    const location = useLocation();
    return (
        <div className="d-flex flex-column" style={{ height: '100vh' }}>
            <NavBar location={location} />
            <Switch>
                <Route exact path="/">
                    <About />
                </Route>

                <Route exact path="/projects">
                    <Projects />
                </Route>
                <Route exact path="/programming">
                    <Programming />
                </Route>
                <Route exact path="/working">
                    <Working />
                </Route>
            </Switch>

            <Footer />
        </div>
    );
};

export default App;
