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
      <Router>
        <Header></Header>
        <Container>
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
          </Container>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;