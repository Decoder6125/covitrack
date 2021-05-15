import React, { useEffect, useState } from 'react';
function Logo() {


  const [data, setData] = useState([]);



      const getCovidData = async () => {
       try {
        const res = await fetch('https://api.covid19india.org/data.json');
        const actualData = await res.json();
        setData(actualData.statewise[0]);
       } catch(err) {
           console.log(err);
       }
           
    
    }      
       
        
      


   useEffect(() => {
      getCovidData();
   }, []);





  return (
   <>
   
   <div className="logo">
     <div class="left"><img height="50px" width="50px" src="covid.png"></img></div>
     <div class="right">Last updated: {data.lastupdatedtime?data.lastupdatedtime : 'loading'}</div>
   </div>
   </>
  );
}

export default Logo;
