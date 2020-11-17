import React, {Component} from 'react';
import { connect } from 'react-redux';
import './app.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';



class App extends Component {

    handleLoggedIn = (email) => {
        console.log("Getting the user " + email)

        this.setState({currentEmail:email});

    }

    handleOnClick = event => {
        this.props.increaseCount();
        this.props.fetchAstronauts();
        console.log(this.props)
      };


    render() { 
      console.log(1)
        return ( 
            <div>
                    <Router>
                        <div className="block">
                        <ul id="menu">
                            <li>
                            <Link to="/home">Home</Link>
                            </li>
                            <li>
                            <Link to="/learning">Learning</Link>
                            </li>
                        </ul>

                        </div>
                        <div id="content">

                            
                        </div>
                    </Router>

            </div>


         );
    }
}
 
const mapStateToProps = state => {
    return {
      items: state.items
    };
  };
   
  const mapDispatchToProps = dispatch => {
    return {
      increaseCount: () => dispatch({ type: 'INCREASE_COUNT' })
    };
  };

  
   
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);