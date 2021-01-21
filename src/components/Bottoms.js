import React, { Component } from 'react';
import BottomsData from '../assets/bottoms-inventory.json';

class Bottoms extends Component {
    render() {
        return (
            <div>
                <h1>Bottoms</h1>
                {BottomsData.map((d, index)=>{
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

export default Bottoms;