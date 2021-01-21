import React, { Component } from 'react';
import TopsData from '../assets/tops-inventory.json';
var wasClicked = false;
var index = 0;

class Tops extends Component {
    myFunction = () => {
        wasClicked = true;
    }

    render() {
        return (
            <div>
                <br></br>
                <h1>Tops</h1>
                <button onClick={this.myFunction}>Click me!</button>
                {
                    if (wasClicked) {
                        index++;
                        return (
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
                        )
                    }
                }
            </div>
        )
    }
}

export default Tops;
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