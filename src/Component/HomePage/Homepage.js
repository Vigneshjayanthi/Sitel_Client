import React, { Component } from 'react';
import './Homepage.css';
import logo from '../Asserts/lorem_ipsum.jpg';

class HomePage extends Component {
    render() {
        return (<div className="container">
            <h2 className="mt-4 mb-4">HomePage</h2>
            <section className="maincontent">
            <img  className="image_style" src={logo} alt="lorem ipsum logo"/>
                <h1>Welcome</h1>
               
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
               anim id est laborum.</p>
               <p>Go visit us at our <a href="/">dummy website</a> to check out what we do as an organization. Have a good day!</p>
               <div>
                   <a className="btn btn-primary" href="/post" role="button">Go To Posts &#xbb;</a>
               </div>
        
            </section>
        </div>
        )
    }
}

export default HomePage;