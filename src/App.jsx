import { useState } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import Footer from './components/Footer';
import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import Programming from './components/Porgramming';
import Working from './components/Working';
import PageMode from './components/PageMode';

const App = () => {
    const [mode, setMode] = useState('light');
    const location = useLocation();
    return (
        <div
            className="d-flex flex-column"
            style={{ width: '100vw', height: '100vh' }}
        >
            <NavBar location={location} />
            <PageMode mode={mode} setMode={setMode} />
            <Switch>
                <Route exact path="/">
                    <About mode={mode} />
                </Route>

                <Route exact path="/projects">
                    <Projects mode={mode} />
                </Route>
                <Route exact path="/programming">
                    <Programming mode={mode} />
                </Route>
                <Route exact path="/working">
                    <Working mode={mode} />
                </Route>
            </Switch>

            <Footer />
        </div>
    );
};

export default App;
