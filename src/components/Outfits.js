import React, { Component } from 'react';
import TopsData from '../assets/tops-inventory.json';
import BottomsData from '../assets/bottoms-inventory.json';
import Bottoms from './Bottoms';

class Outfits extends Component {
    state = { topsIndex: 0, bottomsIndex: 0 };

    topsFunction = () => {
        this.setState({ topsIndex: this.state.topsIndex + 1 });
    }

    bottomsFunction = () => {
        this.setState({ bottomsIndex: this.state.bottomsIndex + 1 });
    }

    bothFunction = () => {
        this.topsFunction();
        this.bottomsFunction();
    }

    render() {
        return (
            <div>
                <h1>Outfits</h1>
                <button onClick={this.topsFunction}>Tops button</button>
                <button onClick={this.bottomsFunction}>Bottoms button</button>
                <div>
                    <figure class="figure" className='figure'>
                        <a href={TopsData[this.state.topsIndex % TopsData.length].Link}><img src={TopsData[this.state.topsIndex % TopsData.length].Image} class="figure-img img-fluid rounded" alt="image" className='figure-image'/></a>
                        <figcaption class="figure-caption" className='figure-text'>
                            {TopsData[this.state.topsIndex % TopsData.length].Item}
                            <br></br>
                            <i>{TopsData[this.state.topsIndex % TopsData.length].Brand}</i>
                            <br></br>
                            ${TopsData[this.state.topsIndex % TopsData.length].Price}
                        </figcaption>
                    </figure> 
                    <figure class="figure" className='figure'>
                        <a href={BottomsData[this.state.bottomsIndex % BottomsData.length].Link}><img src={BottomsData[this.state.bottomsIndex % BottomsData.length].Image} class="figure-img img-fluid rounded" alt="image" className='figure-image'/></a>
                        <figcaption class="figure-caption" className='figure-text'>
                            {BottomsData[this.state.bottomsIndex % BottomsData.length].Item}
                            <br></br>
                            <i>{BottomsData[this.state.bottomsIndex % BottomsData.length].Brand}</i>
                            <br></br>
                            ${BottomsData[this.state.bottomsIndex % BottomsData.length].Price}
                        </figcaption>
                    </figure>
                </div>
                <br></br>
                <br></br>
                <button onClick={this.bothFunction}>Both button</button>
            </div>
        )
    }
}

export default Outfits;