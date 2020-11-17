import React, { Component } from 'react';
import { connect } from 'react-redux';
import './app.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';


class LessonNavBar extends Component {

  render() {

    return (
      <div>
        <p>Lesson 1</p>
        <p>Lesson 2</p>
        <p>Lesson 3</p>
        <p>Lesson 4</p>
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
)(LessonNavBar);