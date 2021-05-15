import React, { useEffect, useState } from 'react';
import Loader from './Loader';


function Statec() {
    

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

   const [data1, setData1] = useState([]);



   const getCovidData1 = async () => {
    try {
     const res1 = await fetch('https://api.covid19india.org/data.json');
     const actualData1 = await res1.json();
     setData1(actualData1.statewise[1]);
    } catch(err) {
        console.log(err);
    }
        
 
 }      
    
     
   


useEffect(() => {
   getCovidData1();
}, []);


const [data2, setData2] = useState([]);

const getCovidData2 = async () => {
    try {
     const res2 = await fetch('https://api.covid19india.org/data.json');
     const actualData2 = await res2.json();
     setData2(actualData2.statewise[2]);
    } catch(err) {
        console.log(err);
    }
        
 
 }      
useEffect(() => {
   getCovidData2();
}, []);


const [data3, setData3] = useState([]);

const getCovidData3 = async () => {
    try {
     const res3 = await fetch('https://api.covid19india.org/data.json');
     const actualData3 = await res3.json();
     setData3(actualData3.statewise[3]);
    } catch(err) {
        console.log(err);
    }
        
 
 }      
useEffect(() => {
   getCovidData3();
}, []);


const [data4, setData4] = useState([]);

const getCovidData4 = async () => {
    try {
     const res4 = await fetch('https://api.covid19india.org/data.json');
     const actualData4 = await res4.json();
     setData4(actualData4.statewise[4]);
    } catch(err) {
        console.log(err);
    }
        
 
 }      
useEffect(() => {
   getCovidData4();
}, []);

const [data5, setData5] = useState([]);

const getCovidData5 = async () => {
    try {
     const res5 = await fetch('https://api.covid19india.org/data.json');
     const actualData5 = await res5.json();
     setData5(actualData5.statewise[5]);
    } catch(err) {
        console.log(err);
    }
        
 
 }      
useEffect(() => {
   getCovidData5();
}, []);


const [data6, setData6] = useState([]);

const getCovidData6 = async () => {
    try {
     const res6 = await fetch('https://api.covid19india.org/data.json');
     const actualData6 = await res6.json();
     setData6(actualData6.statewise[6]);
    } catch(err) {
        console.log(err);
    }
        
 
 }      
useEffect(() => {
   getCovidData6();
}, []);

const [data7, setData7] = useState([]);

const getCovidData7 = async () => {
    try {
     const res7 = await fetch('https://api.covid19india.org/data.json');
     const actualData7 = await res7.json();
     setData7(actualData7.statewise[7]);
    } catch(err) {
        console.log(err);
    }
        
 
 }      
useEffect(() => {
   getCovidData7();
}, []);

const [data8, setData8] = useState([]);

const getCovidData8 = async () => {
    try {
     const res8 = await fetch('https://api.covid19india.org/data.json');
     const actualData8 = await res8.json();
     setData8(actualData8.statewise[8]);
    } catch(err) {
        console.log(err);
    }
        
 
 }      
useEffect(() => {
   getCovidData8();
}, []);


const [data9, setData9] = useState([]);

const getCovidData9 = async () => {
    try {
     const res9 = await fetch('https://api.covid19india.org/data.json');
     const actualData9 = await res9.json();
     setData9(actualData9.statewise[9]);
    } catch(err) {
        console.log(err);
    }
        
 
 }      
useEffect(() => {
   getCovidData9();
}, []);


const [data10, setData10] = useState([]);

const getCovidData10 = async () => {
    try {
     const res10 = await fetch('https://api.covid19india.org/data.json');
     const actualData10 = await res10.json();
     setData10(actualData10.statewise[10]);
    } catch(err) {
        console.log(err);
    }
        
 
 }      
useEffect(() => {
   getCovidData10();
}, []);

const [data11, setData11] = useState([]);

const getCovidData11 = async () => {
    try {
     const res11 = await fetch('https://api.covid19india.org/data.json');
     const actualData11 = await res11.json();
     setData11(actualData11.statewise[11]);
    } catch(err) {
        console.log(err);
    }
        
 
 }      
useEffect(() => {
   getCovidData11();
}, []);

const [data12, setData12] = useState([]);

const getCovidData12 = async () => {
    try {
     const res12 = await fetch('https://api.covid19india.org/data.json');
     const actualData12 = await res12.json();
     setData12(actualData12.statewise[12]);
    } catch(err) {
        console.log(err);
    }
        
 
 }      
useEffect(() => {
   getCovidData12();
}, []);


const [data13, setData13] = useState([]);

const getCovidData13 = async () => {
    try {
     const res13 = await fetch('https://api.covid19india.org/data.json');
     const actualData13 = await res13.json();
     setData13(actualData13.statewise[13]);
    } catch(err) {
        console.log(err);
    }
        
 
 }      
useEffect(() => {
   getCovidData13();
}, []);


const [data14, setData14] = useState([]);

const getCovidData14 = async () => {
    try {
     const res14 = await fetch('https://api.covid19india.org/data.json');
     const actualData14 = await res14.json();
     setData14(actualData14.statewise[14]);
    } catch(err) {
        console.log(err);
    }
        
 
 }      
useEffect(() => {
   getCovidData14();
}, []);

const [data15, setData15] = useState([]);

const getCovidData15 = async () => {
    try {
     const res15 = await fetch('https://api.covid19india.org/data.json');
     const actualData15 = await res15.json();
     setData15(actualData15.statewise[15]);
    } catch(err) {
        console.log(err);
    }
        
 
 }      
useEffect(() => {
   getCovidData15();
}, []);


const [data16, setData16] = useState([]);

const getCovidData16 = async () => {
    try {
     const res16 = await fetch('https://api.covid19india.org/data.json');
     const actualData16 = await res16.json();
     setData16(actualData16.statewise[16]);
    } catch(err) {
        console.log(err);
    }
        
 
 }      
useEffect(() => {
   getCovidData16();
}, []);

const [data17, setData17] = useState([]);

const getCovidData17 = async () => {
    try {
     const res17 = await fetch('https://api.covid19india.org/data.json');
     const actualData17 = await res17.json();
     setData17(actualData17.statewise[17]);
    } catch(err) {
        console.log(err);
    }
        
 
 }      
useEffect(() => {
   getCovidData17();
}, []);

const [data18, setData18] = useState([]);

const getCovidData18 = async () => {
    try {
     const res18 = await fetch('https://api.covid19india.org/data.json');
     const actualData18 = await res18.json();
     setData18(actualData18.statewise[18]);
    } catch(err) {
        console.log(err);
    }
        
 
 }      
useEffect(() => {
   getCovidData18();
}, []);

const [data19, setData19] = useState([]);

const getCovidData19 = async () => {
    try {
     const res19 = await fetch('https://api.covid19india.org/data.json');
     const actualData19 = await res19.json();
     setData19(actualData19.statewise[19]);
    } catch(err) {
        console.log(err);
    }
        
 
 }      
useEffect(() => {
   getCovidData19();
}, []);

const [data20, setData20] = useState([]);

const getCovidData20 = async () => {
    try {
     const res20 = await fetch('https://api.covid19india.org/data.json');
     const actualData20 = await res20.json();
     setData20(actualData20.statewise[20]);
    } catch(err) {
        console.log(err);
    }
        
 
 }      
useEffect(() => {
   getCovidData20();
}, []);


const [data21, setData21] = useState([]);

const getCovidData21 = async () => {
    try {
     const res21 = await fetch('https://api.covid19india.org/data.json');
     const actualData21 = await res21.json();
     setData21(actualData21.statewise[21]);
    } catch(err) {
        console.log(err);
    }
        
 
 }      
useEffect(() => {
   getCovidData21();
}, []);

const [data22, setData22] = useState([]);

const getCovidData22 = async () => {
    try {
     const res22 = await fetch('https://api.covid19india.org/data.json');
     const actualData22 = await res22.json();
     setData22(actualData22.statewise[22]);
    } catch(err) {
        console.log(err);
    }
        
 
 }      
useEffect(() => {
   getCovidData22();
}, []);

const [data23, setData23] = useState([]);

const getCovidData23 = async () => {
    try {
     const res23 = await fetch('https://api.covid19india.org/data.json');
     const actualData23 = await res23.json();
     setData23(actualData23.statewise[23]);
    } catch(err) {
        console.log(err);
    }
        
 
 }      
useEffect(() => {
   getCovidData23();
}, []);


const [data24, setData24] = useState([]);

const getCovidData24 = async () => {
    try {
     const res24 = await fetch('https://api.covid19india.org/data.json');
     const actualData24 = await res24.json();
     setData24(actualData24.statewise[24]);
    } catch(err) {
        console.log(err);
    }
        
 
 }      
useEffect(() => {
   getCovidData24();
}, []);

const [data25, setData25] = useState([]);

const getCovidData25 = async () => {
    try {
     const res25 = await fetch('https://api.covid19india.org/data.json');
     const actualData25 = await res25.json();
     setData25(actualData25.statewise[25]);
    } catch(err) {
        console.log(err);
    }
        
 
 }      
useEffect(() => {
   getCovidData25();
}, []);


const [data26, setData26] = useState([]);

const getCovidData26 = async () => {
    try {
     const res26 = await fetch('https://api.covid19india.org/data.json');
     const actualData26 = await res26.json();
     setData26(actualData26.statewise[26]);
    } catch(err) {
        console.log(err);
    }
        
 
 }      
useEffect(() => {
   getCovidData26();
}, []);

const [data27, setData27] = useState([]);

const getCovidData27 = async () => {
    try {
     const res27 = await fetch('https://api.covid19india.org/data.json');
     const actualData27 = await res27.json();
     setData27(actualData27.statewise[27]);
    } catch(err) {
        console.log(err);
    }
        
 
 }      
useEffect(() => {
   getCovidData27();
}, []);


const [data28, setData28] = useState([]);

const getCovidData28 = async () => {
    try {
     const res28 = await fetch('https://api.covid19india.org/data.json');
     const actualData28 = await res28.json();
     setData28(actualData28.statewise[28]);
    } catch(err) {
        console.log(err);
    }
        
 
 }      
useEffect(() => {
   getCovidData28();
}, []);

const [data29, setData29] = useState([]);

const getCovidData29 = async () => {
    try {
     const res29 = await fetch('https://api.covid19india.org/data.json');
     const actualData29 = await res29.json();
     setData29(actualData29.statewise[29]);
    } catch(err) {
        console.log(err);
    }
        
 
 }      
useEffect(() => {
   getCovidData29();
}, []);


const [data30, setData30] = useState([]);

const getCovidData30 = async () => {
    try {
     const res30 = await fetch('https://api.covid19india.org/data.json');
     const actualData30 = await res30.json();
     setData30(actualData30.statewise[30]);
    } catch(err) {
        console.log(err);
    }
        
 
 }      
useEffect(() => {
   getCovidData30();
}, []);


const [data31, setData31] = useState([]);

const getCovidData31 = async () => {
    try {
     const res31 = await fetch('https://api.covid19india.org/data.json');
     const actualData31 = await res31.json();
     setData31(actualData31.statewise[31]);
    } catch(err) {
        console.log(err);
    }
        
 
 }      
useEffect(() => {
   getCovidData31();
}, []);


const [data32, setData32] = useState([]);

const getCovidData32 = async () => {
    try {
     const res32 = await fetch('https://api.covid19india.org/data.json');
     const actualData32 = await res32.json();
     setData32(actualData32.statewise[32]);
    } catch(err) {
        console.log(err);
    }
        
 
 }      
useEffect(() => {
   getCovidData32();
}, []);

const [data33, setData33] = useState([]);

const getCovidData33 = async () => {
    try {
     const res33 = await fetch('https://api.covid19india.org/data.json');
     const actualData33 = await res33.json();
     setData33(actualData33.statewise[33]);
    } catch(err) {
        console.log(err);
    }
        
 
 }      
useEffect(() => {
   getCovidData33();
}, []);

const [data34, setData34] = useState([]);

const getCovidData34 = async () => {
    try {
     const res34 = await fetch('https://api.covid19india.org/data.json');
     const actualData34 = await res34.json();
     setData34(actualData34.statewise[34]);
    } catch(err) {
        console.log(err);
    }
        
 
 }      
useEffect(() => {
   getCovidData34();
}, []);

const [data37, setData37] = useState([]);

const getCovidData37 = async () => {
    try {
     const res37 = await fetch('https://api.covid19india.org/data.json');
     const actualData37 = await res37.json();
     setData37(actualData37.statewise[37]);
    } catch(err) {
        console.log(err);
    }
        
 
 }      
useEffect(() => {
   getCovidData37();
}, []);

const [data35, setData35] = useState([]);

const getCovidData35 = async () => {
    try {
     const res35 = await fetch('https://api.covid19india.org/data.json');
     const actualData35 = await res35.json();
     setData35(actualData35.statewise[35]);
    } catch(err) {
        console.log(err);
    }
        
 
 }      
useEffect(() => {
   getCovidData36();
}, []);

const [data36, setData36] = useState([]);

const getCovidData36 = async () => {
    try {
     const res36 = await fetch('https://api.covid19india.org/data.json');
     const actualData36 = await res36.json();
     setData36(actualData36.statewise[36]);
    } catch(err) {
        console.log(err);
    }
        
 
 }      
useEffect(() => {
   getCovidData36();
}, []);
  return (
   <> 
   <div className="table_container">

   <table width="100%">
  <tr>
    <th class="t1">States</th>
    <th class="t2">Confirmed</th>
    <th class="t3">Active</th>
    <th class="t3">Recovered</th>
    <th class="t4">Deaths</th>
  </tr>
  <tr>
    <td>{data1.state}</td>
    <td>{data1.confirmed}</td>
    <td>{data1.active}</td>
    <td>{data1.recovered}</td>
    <td>{data1.deaths}</td>
  </tr>
  <tr>
    <td>{data2.state}</td>
    <td>{data2.confirmed}</td>
    <td>{data2.active}</td>
    <td>{data2.recovered}</td>
    <td>{data2.deaths}</td>
  </tr>
  <tr>
    <td>{data3.state}</td>
    <td>{data3.confirmed}</td>
    <td>{data3.active}</td>
    <td>{data3.recovered}</td>
    <td>{data3.deaths}</td>
  </tr>
  <tr>
    <td>{data4.state}</td>
    <td>{data4.confirmed}</td>
    <td>{data4.active}</td>
    <td>{data4.recovered}</td>
    <td>{data4.deaths}</td>
  </tr>
  <tr>
    <td>{data5.state}</td>
    <td>{data5.confirmed}</td>
    <td>{data5.active}</td>
    <td>{data5.recovered}</td>
    <td>{data5.deaths}</td>
  </tr>
  <tr>
    <td>{data6.state}</td>
    <td>{data6.confirmed}</td>
    <td>{data6.active}</td>
    <td>{data6.recovered}</td>
    <td>{data6.deaths}</td>
  </tr>
  <tr>
    <td>{data7.state}</td>
    <td>{data7.confirmed}</td>
    <td>{data7.active}</td>
    <td>{data7.recovered}</td>
    <td>{data7.deaths}</td>
  </tr>
  <tr>
    <td>{data8.state}</td>
    <td>{data8.confirmed}</td>
    <td>{data8.active}</td>
    <td>{data8.recovered}</td>
    <td>{data8.deaths}</td>
  </tr>
  <tr>
    <td>{data9.state}</td>
    <td>{data9.confirmed}</td>
    <td>{data9.active}</td>
    <td>{data9.recovered}</td>
    <td>{data9.deaths}</td>
  </tr>
  <tr>
    <td>{data10.state}</td>
    <td>{data10.confirmed}</td>
    <td>{data10.active}</td>
    <td>{data10.recovered}</td>
    <td>{data10.deaths}</td>
  </tr>





  <tr>
    <td>{data11.state}</td>
    <td>{data11.confirmed}</td>
    <td>{data11.active}</td>
    <td>{data11.recovered}</td>
    <td>{data11.deaths}</td>
  </tr>
  <tr>
    <td>{data12.state}</td>
    <td>{data12.confirmed}</td>
    <td>{data12.active}</td>
    <td>{data12.recovered}</td>
    <td>{data12.deaths}</td>
  </tr>
  <tr>
    <td>{data13.state}</td>
    <td>{data13.confirmed}</td>
    <td>{data13.active}</td>
    <td>{data13.recovered}</td>
    <td>{data13.deaths}</td>
  </tr>
  <tr>
    <td>{data14.state}</td>
    <td>{data14.confirmed}</td>
    <td>{data14.active}</td>
    <td>{data14.recovered}</td>
    <td>{data14.deaths}</td>
  </tr>
  <tr>
    <td>{data15.state}</td>
    <td>{data15.confirmed}</td>
    <td>{data15.active}</td>
    <td>{data15.recovered}</td>
    <td>{data15.deaths}</td>
  </tr>
  <tr>
    <td>{data16.state}</td>
    <td>{data16.confirmed}</td>
    <td>{data16.active}</td>
    <td>{data16.recovered}</td>
    <td>{data16.deaths}</td>
  </tr>
  <tr>
    <td>{data17.state}</td>
    <td>{data17.confirmed}</td>
    <td>{data17.active}</td>
    <td>{data17.recovered}</td>
    <td>{data17.deaths}</td>
  </tr>
  <tr>
    <td>{data18.state}</td>
    <td>{data18.confirmed}</td>
    <td>{data18.active}</td>
    <td>{data18.recovered}</td>
    <td>{data18.deaths}</td>
  </tr>
  <tr>
    <td>{data19.state}</td>
    <td>{data19.confirmed}</td>
    <td>{data19.active}</td>
    <td>{data19.recovered}</td>
    <td>{data19.deaths}</td>
  </tr>
  <tr>
    <td>{data20.state}</td>
    <td>{data20.confirmed}</td>
    <td>{data20.active}</td>
    <td>{data20.recovered}</td>
    <td>{data20.deaths}</td>
  </tr>


  <tr>
    <td>{data21.state}</td>
    <td>{data21.confirmed}</td>
    <td>{data21.active}</td>
    <td>{data21.recovered}</td>
    <td>{data21.deaths}</td>
  </tr>
  <tr>
    <td>{data22.state}</td>
    <td>{data22.confirmed}</td>
    <td>{data22.active}</td>
    <td>{data22.recovered}</td>
    <td>{data22.deaths}</td>
  </tr>
  <tr>
    <td>{data23.state}</td>
    <td>{data23.confirmed}</td>
    <td>{data23.active}</td>
    <td>{data23.recovered}</td>
    <td>{data23.deaths}</td>
  </tr>
  <tr>
    <td>{data24.state}</td>
    <td>{data24.confirmed}</td>
    <td>{data24.active}</td>
    <td>{data24.recovered}</td>
    <td>{data24.deaths}</td>
  </tr>
  <tr>
    <td>{data25.state}</td>
    <td>{data25.confirmed}</td>
    <td>{data25.active}</td>
    <td>{data25.recovered}</td>
    <td>{data25.deaths}</td>
  </tr>
  <tr>
    <td>{data26.state}</td>
    <td>{data26.confirmed}</td>
    <td>{data26.active}</td>
    <td>{data26.recovered}</td>
    <td>{data26.deaths}</td>
  </tr>
  <tr>
    <td>{data27.state}</td>
    <td>{data27.confirmed}</td>
    <td>{data27.active}</td>
    <td>{data27.recovered}</td>
    <td>{data27.deaths}</td>
  </tr>
  <tr>
    <td>{data28.state}</td>
    <td>{data28.confirmed}</td>
    <td>{data28.active}</td>
    <td>{data28.recovered}</td>
    <td>{data28.deaths}</td>
  </tr>
  <tr>
    <td>{data29.state}</td>
    <td>{data29.confirmed}</td>
    <td>{data29.active}</td>
    <td>{data29.recovered}</td>
    <td>{data29.deaths}</td>
  </tr>
  <tr>
    <td>{data30.state}</td>
    <td>{data30.confirmed}</td>
    <td>{data30.active}</td>
    <td>{data30.recovered}</td>
    <td>{data30.deaths}</td>
  </tr>
  <tr>
    <td>{data31.state}</td>
    <td>{data31.confirmed}</td>
    <td>{data31.active}</td>
    <td>{data31.recovered}</td>
    <td>{data31.deaths}</td>
  </tr>
  <tr>
    <td>{data32.state}</td>
    <td>{data32.confirmed}</td>
    <td>{data32.active}</td>
    <td>{data32.recovered}</td>
    <td>{data32.deaths}</td>
  </tr>
  <tr>
    <td>{data33.state}</td>
    <td>{data33.confirmed}</td>
    <td>{data33.active}</td>
    <td>{data33.recovered}</td>
    <td>{data33.deaths}</td>
  </tr>
  <tr>
    <td>{data34.state}</td>
    <td>{data34.confirmed}</td>
    <td>{data34.active}</td>
    <td>{data34.recovered}</td>
    <td>{data34.deaths}</td>
  </tr>
  <tr>
    <td>{data37.state}</td>
    <td>{data37.confirmed}</td>
    <td>{data37.active}</td>
    <td>{data37.recovered}</td>
    <td>{data34.deaths}</td>
  </tr>
  <tr>
    <td>{data35.state}</td>
    <td>{data35.confirmed}</td>
    <td>{data35.active}</td>
    <td>{data35.recovered}</td>
    <td>{data35.deaths}</td>
  </tr>
  <tr>
    <td>{data36.state?data36.state : <Loader />}</td>
    <td>{data36.confirmed}</td>
    <td>{data36.active}</td>
    <td>{data36.recovered}</td>
    <td>{data36.deaths}</td>
  </tr>
  </table>
   
   </div>
   </>
  );
}

export default Statec;
