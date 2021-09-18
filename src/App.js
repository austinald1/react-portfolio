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
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
        <Container>
            <Router>
                  {/* The content that renders will be managed by Switch */}
                      <Switch>
                          <Route path="/about-me">
                            <AboutMe />
                          </Route>
                          <Route path="/portfolio">
                          </Route>
                          <Route path="/">
                          </Route>
                      </Switch>
            </Router>
          </Container>
        <Footer></Footer>
    </div>
  );
}

export default App;