import React, { Component } from 'react';

class Tops extends Component {
    render() {
        return (
            <div>
                <script async defer src="//assets.pinterest.com/js/pinit.js"></script>
                <h1>Tops</h1>
                <a
                    data-pin-do="embedUser"
                    data-pin-board-width="900"
                    data-pin-scale-height="300"
                    data-pin-scale-width="300"
                    href="https://www.pinterest.com/thredup/_shop/"
                ></a>
                console.log('Hi');
            </div>
        )
    }
}

export default Tops;