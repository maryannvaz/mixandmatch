import React, { Component } from 'react';
import TopsData from '../assets/tops-inventory.json';
import BottomsData from '../assets/bottoms-inventory.json';
import Bottoms from './Bottoms';

class Outfits extends Component {
    state = { index: 0 };

    myFunction = () => {
        this.setState({ index: this.state.index + 1 });
    }

    render() {
        return (
            <div>
                <h1>Outfits</h1>
                <button onClick={this.myFunction}>Click me!</button>
                <div>
                    <figure class="figure" className='figure'>
                        <a href={TopsData[this.state.index % TopsData.length].Link}><img src={TopsData[this.state.index % TopsData.length].Image} class="figure-img img-fluid rounded" alt="image" className='figure-image'/></a>
                        <figcaption class="figure-caption" className='figure-text'>
                            {TopsData[this.state.index % TopsData.length].Item}
                            <br></br>
                            <i>{TopsData[this.state.index % TopsData.length].Brand}</i>
                            <br></br>
                            ${TopsData[this.state.index % TopsData.length].Price}
                        </figcaption>
                    </figure> 
                    <figure class="figure" className='figure'>
                        <a href={BottomsData[this.state.index % BottomsData.length].Link}><img src={BottomsData[this.state.index % BottomsData.length].Image} class="figure-img img-fluid rounded" alt="image" className='figure-image'/></a>
                        <figcaption class="figure-caption" className='figure-text'>
                            {BottomsData[this.state.index % BottomsData.length].Item}
                            <br></br>
                            <i>{BottomsData[this.state.index % BottomsData.length].Brand}</i>
                            <br></br>
                            ${BottomsData[this.state.index % BottomsData.length].Price}
                        </figcaption>
                    </figure>
                </div>
            </div>
        )
    }
}

export default Outfits;
/*


/*
int index = 0;
for (int i = 0; i < TopsData.length; i++) {
    if ( user clicks the button ) {
        index++; 
        {
            <figure class="figure" className='figure'>
                        <a href={TopsData[index].Link}><img src={TopsData[index].Image} class="figure-img img-fluid rounded" alt="image" className='figure-image'/></a>
                        <figcaption class="figure-caption" className='figure-text'>
                            {TopsData[index].Item}
                            <br></br>
                            <i>{TopsData[index].Brand}</i>
                            <br></br>
                            ${TopsData[index].Price}
                        </figcaption>
                    </figure> 
        }
    }
}

TopsData.map((index) => {
    if ( user clicks button )
    index++;
    {
        <figure class="figure" className='figure'>
                        <a href={TopsData[index % TopsData.length].Link}><img src={TopsData[index].Image} class="figure-img img-fluid rounded" alt="image" className='figure-image'/></a>
                        <figcaption class="figure-caption" className='figure-text'>
                            {TopsData[index].Item}
                            <br></br>
                            <i>{TopsData[index].Brand}</i>
                            <br></br>
                            ${TopsData[index].Price}
                        </figcaption>
                    </figure> 
    }
})


/*
{TopsData.map((d, index)=>{
                    return <figure class="figure" className='figure'>
                        <a href={d.Link}><img src={d.Image} class="figure-img img-fluid rounded" alt="image" className='figure-image'/></a>
                        <figcaption class="figure-caption" className='figure-text'>
                            {d.Item}
                            <br></br>
                            <i>{d.Brand}</i>
                            <br></br>
                            ${d.Price}
                        </figcaption>
                    </figure>
                })}
                */