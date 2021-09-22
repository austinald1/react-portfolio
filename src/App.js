//import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import { Container, Navbar, Nav } from 'react-bootstrap';

import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Header></Header>
        <Container className="Content">
            <Router>
                  {/* The content that renders will be managed by Switch */}
                      <Switch>
                          <Route path="/about-me">
                            <AboutMe />
                          </Route>
                          <Route path="/portfolio">
                            <Portfolio />
                          </Route>
                          <Route path="/contact">
                            <Contact />
                          </Route>
                          <Route path="/resume">
                            <Resume />
                          </Route>
                          <Route path="/">
                            <AboutMe />
                          </Route>
                      </Switch>
            </Router>
          </Container>
        <Footer></Footer>
    </div>
  );
}

export default App;