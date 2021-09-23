import React, {useState, useEffect } from 'react';
//import Autocomplete from "react-google-autocomplete";
import { stockData } from "./Data/data";



const Search = () => {

    const [searchTerm, setSearchTerm] = useState('');
     

    return (
        <>
  
      <div className="stock-container">
        {stockData.filter((data)=> {
            if(searchTerm == "") {
                return data
            } else if (data.company.toLowerCase().includes(searchTerm.toLowerCase())) {
                return data
            }
        }).map((data, key) => {
          return (
            <div key={key}>
              {data.company +
                " , " +
                data.ticker +
                " ," +
                data.stockPrice +
                ", " +
                data.timeElapsed}
            </div>
          );
        })}
      </div>
      <div>
          <input
           type="text"
           placeholder="search..."
           onChange={event => {
               setSearchTerm(event.target.value);
            }}
          />
      </div>
    </>
    /* <div>
            hello
            {
                data && data.length>0 && data.map((item)=><p>{item.address}</p>)
            }
            <Autocomplete
                apiKey={'1220afd0012e7145ef6018001b3ccf43'}
                onPlaceSelected={(place) => {
                    console.log(place);
                }}
            /> 
            </div> */
    )
}

export default Search;
