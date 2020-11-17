import React, { Component } from 'react';
import { connect } from 'react-redux';
import './app.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import Footer from './footer'
import Learn from './learn'
import Home from './home'


class App extends Component {

  render() {

    return (
      <div>
        
        <Router>
          <div>
            <ul id="menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/learn">Learning</Link>
              </li>
            </ul>
          </div>

          <div id="content">
            <Route exact path="/" component={Home} />
            <Route exact path="/learn" component={Learn} />
          </div>
          
        </Router>

        <Footer />
      </div>


    );
  }
}

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);