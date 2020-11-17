import React, { Component } from 'react';
import { connect } from 'react-redux';
import './app.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class LessonNavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activePath: '/',
      items: [
        {
          path: '/', /* path is used as id to check which NavItem is active basically */
          name: 'Home',
          css: 'fa fa-fw fa-home',
          key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
        },
        {
          path: '/about',
          name: 'About',
          css: 'fa fa-fw fa-clock',
          key: 2
        },
        {
          path: '/NoMatch',
          name: 'NoMatch',
          css: 'fas fa-hashtag',
          key: 3
        },
      ]
    }  
  }

  onItemClick = (path) => {
    this.setState({ activePath: path }); /* Sets activePath which causes rerender which causes CSS to change */
  }

  render() {
    const { items, activePath } = this.state;
    return (
      <StyledSideNav>
        {
          /* items = just array AND map() loops thru that array AND item is param of that loop */
          items.map((item) => {
            /* Return however many NavItems in array to be rendered */
            return (
              <NavItem path={item.path} name={item.name} css={item.css} onItemClick={this.onItemClick} /* Simply passed an entire function to onClick prop */ active={item.path === activePath} key={item.key}/>
            )
          })
        }
      </StyledSideNav>
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