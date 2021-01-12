import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AboutUs from './AboutUs';
import Contact from './Contact';
import cover from '../assets/cover.png';
import tops from '../assets/tops.png';
import bottoms from '../assets/bottoms.png';
import outfit from '../assets/outfit.png';

class App extends Component {
    render() {
        return (
            <div>
                <img src={cover} alt='cover' className='actualcover' />
                <h1>Welcome to Mix and Match!</h1>
                <hr />
                <Link to='/tops'><img src={tops} alt='tops' className='cover' /></Link>
                <a href='/outfits'><img src={outfit} alt='outfit' className='cover' /></a>
                <a href='/bottoms'><img src={bottoms} alt='bottoms' className='cover' /></a>
                <hr />
                <AboutUs />
                <hr />
                <Contact />
            </div>
        )
    }
}

export default App;