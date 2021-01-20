import React, { Component } from 'react';
import TopsData from '../assets/tops-inventory.json';
import BottomsData from '../assets/bottoms-inventory.json';

class Outfits extends Component {
    render() {
        return (
            <div>
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
            </div>
        )
    }
}

export default Outfits;