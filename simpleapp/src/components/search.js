import React, {useState} from 'react';
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
              <div key={key} className={styles.mainAddress}>{data.address}</div>
              <br/>
              <div className={styles.outerBox}>
                <p className={styles.boxTitle}>Property Info</p>
                <div className={styles.column}>
                  <div className={styles.row}>
                    <div className={styles.box}>
                      <p className={styles.smallBoxTitle}>Address and Legal ID</p>
                      <div className={styles.columnTag}>Address: <span className={styles.dataColumn}>{data.shortaddress}</span></div>
                      <div className={styles.columnTag}>Neighborhood: <span className={styles.dataColumn}>{data.neighborhood}</span></div>
                      <div className={styles.columnTag}>Zip code: <span className={styles.dataColumn}>{data.zipcode}</span></div>
                      <div className={styles.columnTag}>Block and Lot: <span className={styles.dataColumn}>{data.BandL}</span></div>
                      <div className={styles.columnTag}>Section Volume: <span className={styles.dataColumn}>{data.sectionvolume}</span></div>
                      <div className={styles.columnTag}>BBLE: <span className={styles.dataColumn}>{data.bble}</span></div>
                      <div className={styles.columnTag}>FIPS: <span className={styles.dataColumn}>{data.fips}</span></div>
                    </div>
                    <div className={styles.box}>
                      <p className={styles.smallBoxTitle}>Ownership</p>
                      <div className={styles.columnTag}>{data.name}</div>
                      <div className={styles.columnTag}>{data.cityzip}</div>
                    </div>
                    <div className={styles.box}>
                      <p className={styles.smallBoxTitle}>Location Info</p>
                      <div className={styles.columnTag}>Community District: <span className={styles.dataColumn}>{data.communitydistrict}</span></div>
                      <div className={styles.columnTag}>Census: <span className={styles.dataColumn}>{data.census}</span></div>
                      <div className={styles.columnTag}>Census Tract: <span className={styles.dataColumn}>{data.censustract}</span></div>
                      <div className={styles.columnTag}>Census Block: <span className={styles.dataColumn}>{data.censusblock}</span></div>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.box}>
                      <p className={styles.smallBoxTitle}>Building Info</p>
                      <div className={styles.linkText}>Department of Building Overview</div>
                      <div className={styles.columnTag}>Building Class: <span className={styles.dataColumn}>{data.buildingclass}</span></div>
                      <div className={styles.columnTag}>Building Description: <span className={styles.dataColumn}>{data.buildingdescription}</span></div>
                      <div className={styles.linkText}>View List of Building Classification Codes</div>
                      <div className={styles.columnTag}>Buildings: <span className={styles.dataColumn}>{data.buildings}</span></div>
                      <div className={styles.columnTag}>Floors: <span className={styles.dataColumn}>{data.floors}</span></div>
                      <div className={styles.columnTag}>Building Dimensions: <span className={styles.dataColumn}>{data.buildingdescription}</span></div>
                      <div className={styles.columnTag}>Year Built: <span className={styles.dataColumn}>{data.year}</span></div>
                      <div className={styles.columnTag}>NYC Square Footage: <span className={styles.dataColumn}>{data.nycsqfootage}</span></div>
                      <div className={styles.columnTag}>Calc Square Footage: <span className={styles.dataColumn}>{data.calcsqfootage}</span></div>
                      <div className={styles.linkText}>Square Footage details</div>
                      <div className={styles.columnTag}>Total Units: <span className={styles.dataColumn}>{data.totalunits}</span></div>
                      <div className={styles.columnTag}>Residential Units: <span className={styles.dataColumn}>{data.residentialunits}</span></div>
                      <div className={styles.columnTag}>Extension: <span className={styles.dataColumn}>{data.extension}</span></div>
                      <div className={styles.columnTag}>Basement: <span className={styles.dataColumn}>{data.basement}</span></div>
                      <div className={styles.columnTag}>Proximity: <span className={styles.dataColumn}>{data.proximity}</span></div>
                    </div>
                    <div className={styles.box}>
                      <p className={styles.smallBoxTitle}>Lot Info</p>
                      <div className={styles.columnTag}>Lot Dimensions: <span className={styles.dataColumn}>{data.lotdimentions}</span></div>
                      <div className={styles.columnTag}>Acres: <span className={styles.dataColumn}>{data.acres}</span></div>
                      <div className={styles.columnTag}>Lot Area: <span className={styles.dataColumn}>{data.lotarea}</span></div>
                      <div className={styles.columnTag}>Lot Type: <span className={styles.dataColumn}>{data.lottype}</span></div>
                    </div>
                    <div className={styles.box}>
                      <p className={styles.smallBoxTitle}>Zoning and FAR</p>
                      <div className={styles.columnTag}>R3-2 (LOW DENSITY RESIDENTIAL</div>
                      <div className={styles.linkText}>Zoning Map</div>
                      <div className={styles.columnTag}>Actual FAR: <span className={styles.dataColumn}>{data.actualfar}</span></div>
                      <div className={styles.columnTag}>Max Res. FAR: <span className={styles.dataColumn}>{data.maxresfar}</span></div>
                      <div className={styles.columnTag}>Max Comm. FAR: <span className={styles.dataColumn}>{data.maxcommfar}</span></div>
                      <div className={styles.columnTag}>Max Res. SqFT: <span className={styles.dataColumn}>{data.maxressqft}</span></div>
                      <div className={styles.columnTag}>Buildable Res. SqFT: <span className={styles.dataColumn}>{data.buildableressqft}</span></div>
                    </div>
                  </div>
                  <div className={styles.row}>
                    <div className={styles.box}>
                      <p className={styles.smallBoxTitle}>Soundscore</p>
                      <div className={styles.columnTag}>Pedestrian: <span className={styles.dataColumn}>{data.pedestrian}</span></div>
                      <div className={styles.columnTag}>Vehicle: <span className={styles.dataColumn}>{data.vehicle}</span></div>
                      <div className={styles.columnTag}>Airports: <span className={styles.dataColumn}>{data.airports}</span></div>
                      <div className={styles.columnTag}>Overall Sounscore: <span className={styles.dataColumn}>{data.overallsoundscore}</span></div>
                    </div>
                    <div className={styles.box}>
                      <p className={styles.smallBoxTitle}>Flood Info</p>
                      <div className={styles.columnTag}>Zone: <span className={styles.dataColumn}>{data.zone}</span></div>
                      <div className={styles.columnTag}>Panel: <span className={styles.dataColumn}>{data.panel}</span></div>
                      <div className={styles.columnTag}>Panel Date: <span className={styles.dataColumn}>{data.paneldate}</span></div>
                      <div className={styles.columnTag}>Community: <span className={styles.dataColumn}>{data.community}</span></div>
                      <div className={styles.linkText}>FEMA Flood Map</div>
                    </div>
                    <div className={styles.box}>
                      <p className={styles.smallBoxTitle}>2021 Taxes and Assessment</p>
                      <div className={styles.columnTag}>Tax: <span className={styles.dataColumn}>{data.tax}</span></div>
                      <div className={styles.columnTag}>Rate: <span className={styles.dataColumn}>{data.rate}</span></div>
                      <div className={styles.columnTag}>Assessed Value: <span className={styles.dataColumn}>{data.assessedvalue}</span></div>
                      <div className={styles.columnTag}>Land Value: <span className={styles.dataColumn}>{data.landvalue}</span></div>
                      <div className={styles.columnTag}>Market Value: <span className={styles.dataColumn}>{data.marketvlaue}</span></div>
                      <div className={styles.columnTag}>Tax Class: <span className={styles.dataColumn}>{data.taxclass}</span></div>
                      <div className={styles.linkText}>View Tax and Assessment History on this Property</div>
                    </div>
                  </div>
                </div>
                
                  {/* <div className={styles.box}>
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
              </div> */}
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
