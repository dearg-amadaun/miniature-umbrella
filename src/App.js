//Built-in React
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

//Page Components
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';



class App extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    title: 'Brendan Rottmund',
    headerLinks: [
      { title: 'Home', path: '/home'},
      { title: 'About', path: '/about'},
      { title: 'Contact', path: '/contact'},
    ],
    home: {
      title: 'New skills,',
      subTitle: 'New career,',
      text: 'Bootcamp and beyond!'
    },
    about: {
      title: 'About Me'
    },
    Contact: {
      title: 'Contact Me'
    },
  }
}
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Brendan Rottmund</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/home">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
              <Switch>
                <Route exact path="/home" render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
              </Switch>  
              <Switch>
                <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
              </Switch>
              <Switch>
                <Route path="/contact" render={() => <ContactPage title={this.state.Contact.title} />} />
              </Switch>
          <Footer />

        </Container>
      </Router>
    );
  }  
}

export default App;