import React, { useEffect, useState } from 'react';
import Loader from './Loader';

function Covid() {
    

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
   
   <br></br><br></br><br></br>   <br></br><br></br><br></br>

   <center><font color="tomato" size="30px">Total cases</font></center><br></br>

   <div className="grid_container1">
       <div className="grida">{data.confirmed?data.confirmed: <Loader />}</div>
       <div className="gridb">{data.active}</div>

   </div>

   <div className="grid_container1">
       <div className="gridc">{data.recovered}</div>
       <div className="gridd">{data.deaths}</div>

   </div>
    <br></br>
    <center><font color="tomato" size="30px">Fresh cases</font></center><br></br>
    <div className="grid_container2">
       <div className="grid11">{data.deltaconfirmed}</div>
       <div className="grid12">N/A</div>
       <div className="grid13">{data.deltarecovered}</div>
       <div className="grid14">{data.deltadeaths}</div>

   </div>



   </>
  );
}

export default Covid;
