import React, { Component } from 'react';
import { connect } from 'react-redux';
import './app.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';


class Lesson extends Component {

  render() {

    return (
      <div>
        <h1>Introduction</h1>

        <p>Programming is very important. Many people program.</p>

        <p>However, not all people program.</p>
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
)(Lesson);