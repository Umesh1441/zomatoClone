import React, { useEffect } from 'react';
import './App.css';
import Rinfo from './Rinfo';
import Set from './Set';
import { useState } from 'react';
import Fooddata from './container/Fooddata';



function Home() {
  const [Fdata, setFdata] = useState(Fooddata);

  const [Copydata, setCopydata] = useState([]);

  
  const changedata=(e)=> {
    let getchangeData = e.toLowerCase();
    if (getchangeData === "") {
      setCopydata(Fdata);
    }
    else {
      let storedata = Copydata.filter((ele, k) => {
        return ele.rname.toLowerCase().match(getchangeData);
      });
      setCopydata(storedata);
    }
  }


  //this will put Fooddata to copydata in 2sec
  useEffect(() => {
    setTimeout(() => {
      setCopydata(Fooddata);
    }, 2000);
  }, [])
  return (
    <>
    
      <div class='search'>
        <div ></div>
        <input class='search_inout' onChange={(e)=>changedata(e.target.value)} style={{width:"15cm",marginTop:30}} placeholder='Search for Restaurants' type='text'></input>
        <button class="btn_submit" >submit</button>
      </div>
      <h3>Restaurants in haryana Open now </h3>
      {Copydata && Copydata.length ? Copydata.map((it) => <Rinfo
        id={it.id}
        rname={it.rname}
        imgdata={it.imgdata}
        address={it.address}
        delimg={it.delimg}
        somedata={it.somedata}
        price={it.price}
        rating={it.rating}
        arrimg={it.arrimg}
        
        
        ></Rinfo>) : <Set></Set>}


    </>
  );
}

export default Home;
