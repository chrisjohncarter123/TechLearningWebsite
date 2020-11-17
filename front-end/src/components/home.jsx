import React, { Component } from 'react';
import { connect } from 'react-redux';
import './app.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';


class Home extends Component {

  render() {

    return (
      <div>
        <h1>Home</h1>
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
)(Home);