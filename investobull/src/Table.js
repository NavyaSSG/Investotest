import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaInfoCircle } from 'react-icons/fa';
const Table = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
fetchData();
   },[])
   const fetchData=async()=>{
    try{
       const response=await axios.get('https://intradayscreener.com/api/openhighlow/cash')
       setData(response.data);
    }catch(error){
console.log("Error");
    }
   } 
  return (
    <div style={{display:'inline-block',alignItems:'center',justifyContent:'center', textAlign:'center', width:'100vw'}}>
    {/* <h2>Details</h2> */}
    <table style={{borderCollapse:'collapse' }} className='table'  >
     <tr className="heading">
     <th className='heading'>SYMBOL <FaInfoCircle /></th>
    <th className='heading'>LTP</th>
   <th className='heading' colSpan={2}>Momentum <FaInfoCircle /></th>
     <th className='heading'>OPEN <FaInfoCircle /></th>
    <th className='heading'>Deviation from Pivots <FaInfoCircle /></th>
    <th>TODAYS RANGE <FaInfoCircle /></th>
    <th className='heading'>OHL <FaInfoCircle /></th>
     </tr>
 {data.map((data) => (
     <tr key = {data.index}>
     <td>{data.symbol}</td>
     <td>{data.ltp}</td>
     <td>{data.open}</td>
     <td>{data.high}</td>
     <td>{data.low}</td>
     <td>{data.high}-{data.low}</td>
     <td>{data.change}<input type='range'/>{data.pctChange}</td>
     {/* <td >{data.openHighLowSignal}</td> */}
     <td style={{ color: data.openHighLowSignal === 'Open=Low' ? 'green' : 'red' }} >{data.openHighLowSignal}</td>
 </tr>

 ))}
     

    </table>
     
 </div>
  )
}

export default Table;