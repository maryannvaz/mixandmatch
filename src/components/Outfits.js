import React, { Component } from 'react';
import TopsData from '../assets/tops-inventory.json';
import BottomsData from '../assets/bottoms-inventory.json';

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
                <div>
                    <div style={{ display: 'inline-block', margin: '0% 5% 0% 5%' }}>
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
                    </div>
                    <div style={{ display: 'inline-block', margin: '0% 5% 0% 5%' }}>
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
                </div>
                <br></br>
                <button onClick={this.topsFunction} className='tops-button'>Tops</button>
                <button onClick={this.bottomsFunction} className='bottoms-button'>Bottoms</button>
                <br></br>
                <br></br>
                <br></br>
                <div>
                    <button onClick={this.bothFunction} className='both-button'>Mix and match!</button>
                </div>
            </div>
        )
    }
}

export default Outfits;