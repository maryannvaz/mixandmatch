import React, { useState } from 'react';
import * as XLSX from 'xlsx';

//if(typeof require !== 'undefined') XLSX = require('xlsx');
//let file = XLSX.readFile('Mixandmatchinventory.xlsx');
//let file = XLSX.writeFile(workbook, 'Mixandmatchinventory.xlsx');

const Tops = () => {
    const [items, setItems] = useState([])

    const readExcel= (file) => {

        const promise = new Promise((resolve, reject) => {

            const fileReader = new FileReader();
            fileReader.readAsArrayBuffer(file);

            fileReader.onload = (e) => {
                const bufferArray = e.target.result;

                const wb = XLSX.read(bufferArray, { type: "buffer" });

                const wsname = wb.SheetNames[0];

                const ws = wb.Sheets[wsname];

                const data = XLSX.utils.sheet_to_json(ws);

                resolve(data);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
        });

        promise.then((d) => {
            setItems(d)
        })
    };

    return (
        <div>
            <h1>Tops</h1>
            <div>

                <input 
                    type="file"
                    onChange={(e) => {
                        const file = e.target.files[0];
                        readExcel(file);
                    }}
                />
                
                {items.map((d) => (
                
                <figure class="figure" className='figure'>
                    <a href={d.Link}><img src={d.Image} class="figure-img img-fluid rounded" alt="image" className='figure-image'/></a>
                    <figcaption class="figure-caption" className='figure-text'>{d.Item},{d.Price},{d.Size},{d.Brand},{d.Color}</figcaption>
                </figure>
                ))}
                
                
            </div>
        </div>
    )
}
/*
<table class="table container">
                <thead>
                    <tr>
                        <th scope="col">Item</th>
                        <th scope="col">Price</th>
                        <th scope="col">Size</th>
                        <th scope="col">Brand</th>
                        <th scope="col">Color</th>
                        <th scope="col">Image</th>
                        <th scope="col">Link</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((d) => (
                        <tr key={d.Item}>
                            <th >{d.Item}</th>
                            <td>{d.Price}</td>
                            <td>{d.Size}</td>
                            <td>{d.Brand}</td>
                            <td>{d.Color}</td>
                            <td>{d.Image}</td>
                            <td>{d.Link}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
 */
export default Tops;