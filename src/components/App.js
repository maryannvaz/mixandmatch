import React, { Component } from 'react';
import AboutUs from './AboutUs';
import Contact from './Contact';
import cover from '../assets/cover.png';
import tops from '../assets/tops.png';
import bottoms from '../assets/bottoms.png';

class App extends Component {
    render() {
        return (
            <div>
                <img src={cover} alt='cover' className='cover' />
                <h1>Welcome to Mix and Match!</h1>
                <hr />
                <img src={tops} alt='tops' className='cover' />
                <img src={bottoms} alt='bottoms' className='cover' />
                <hr />
                <AboutUs />
                <hr />
                <Contact />
            </div>
        )
    }
}

export default App;