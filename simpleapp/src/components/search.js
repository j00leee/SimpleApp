import React, {useState, useEffect } from 'react';
//import Autocomplete from "react-google-autocomplete";
import { stockData } from "./Data/data";
import styles from './search.module.css';


const Search = () => {

    const [searchTerm, setSearchTerm] = useState('');
     

    return (
        <>
      <div>
          <input
           type="text"
           placeholder="search..."
           onChange={event => {
               setSearchTerm(event.target.value);
            }}
          />
      </div>
      <div className="stock-container">
        {stockData.filter((data)=> {
            if(searchTerm === "") {
                return data
            } else if (data.address.toLowerCase().includes(searchTerm.toLowerCase())) {
                return data
            }
        }).map((data, key) => {
          return (
            /*<div key={key}>
              {data.company +
                " , " +
                data.ticker +
                " ," +
                data.stockPrice +
                ", " +
                data.timeElapsed}
              </div> */
              <>
              <br/>
              <div key={key}>{data.address}</div>
              <br/>
              <div className={styles.row}>
                <div className={styles.box}>
                  <div>Num of Rooms</div>
                  <br/>
                  <div key={key}>{data.rooms}</div>
                </div>
                <div className={styles.box}>
                  <div>Num of Bathroom</div>
                  <br/>
                  <div key={key}>{data.bathroom}</div>
                </div>
                <div className={styles.box}>
                  <div>Listing By</div>
                  <br/>
                  <div key={key}>{data.listing}</div>
                </div>
                <div className={styles.box}>
                  <div>Property Type</div>
                  <br/>
                  <div key={key}>{data.type}</div>
                </div>
                <div className={styles.box}>
                  <div>Year Built</div>
                  <br/>
                  <div key={key}>{data.year}</div>
                </div>
              </div>
              <br/>
              </>
          );
        })}
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
