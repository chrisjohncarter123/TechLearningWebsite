import React, { Component } from 'react';
import { connect } from 'react-redux';
import './app.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import LessonNavBar from './lesson_navbar'


class Learn extends Component {

  render() {

    return (
      <div>
        <h1>Learn</h1>
        <LessonNavBar />
        

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
)(Learn);