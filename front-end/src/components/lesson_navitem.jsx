import React, { Component } from 'react';
import { connect } from 'react-redux';
import './app.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavItem = styled.div`
  height: 70px;
  width: 75px; /* width must be same size as NavBar to center */
  text-align: center; /* Aligns <a> inside of NavIcon div */
  margin-bottom: 0;   /* Puts space between NavItems */
  a {
    font-size: 2.7em;
    color: ${(props) => props.active ? "white" : "#9FFFCB"};
    :hover {
      opacity: 0.7;
      text-decoration: none; /* Gets rid of underlining of icons */
    }  
  }
`;

class LessonNavItem extends Component {

    

    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
    }

  render() {

    const { active } = this.props;

    return (
        <StyledNavItem active={active}>
            <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
           
            </Link>
        </StyledNavItem>
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
)(LessonNavItem);