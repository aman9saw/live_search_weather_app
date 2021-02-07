import React, { useEffect, useState } from "react";
import axios from "axios";
import "./css/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const Tempapp = () =>{



const [city,setCity] = useState();
const [search,setSearch] =useState("Dhanbad");
const[tmp,setTmp] = useState();
const [mintemp,setMinTemp] = useState();
const [maxtemp,setMaxTemp] = useState();

// useEffect( () =>{
//     const fetchApi = async () =>{
//         const url = `http://api.openweathermap.org/data/2.5/weather?q=jharia&appid=b2a77b7e430674f81508747d7755757e`;
//         const response = await fetch(url).then(res => res.json);
//         const resJson = await response.json;
//         console.log(resJson);
//     }
    
//     fetchApi();
// })

useEffect(() =>{
    //alert('hii'); 

    async function getData(){
        const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b2a77b7e430674f81508747d7755757e`);
         
        setCity(res.data.name);
        setTmp(res.data.main.temp);
        setMinTemp(res.data.main.temp_min);
        setMaxTemp(res.data.main.temp_max);
        console.log(res.data);
        console.log(res.data.name);
        
    }

    getData();
    
}   )

return(
    <>
    <h1 className="header">Weather Forcasting App</h1>
    <div className='main_div'>
    <div className='center_div'>
    <input type='search'
    className='inputField' 
    value={search}
    onChange={(event) =>{
        setSearch(event.target.value);
        setCity();
    setTmp();
    }}    
    /> 
    <div style={{height: '60px'}}></div>
    {!city ? (
        <p>No Data Found</p>
    ) : (
        <div>
        <div className='info'>
    <h2 className='location'>
    <i className="fas fa-street-view"></i><p>{search}</p>
    </h2>
    <h1 className='temp'>{tmp}°C</h1>
    <h3 className='tempmin_max'>Min : {mintemp}°C | Max : {maxtemp}°C </h3>

    </div>

    <div className='wave'></div>
    <div className='wavetwo'></div>
    <div className='wavethree'></div>
    </div>
    )}
    </div>

    
    

    
    </div>
    <div className="footer">
        Developer - Aman Saw, Contact - 917992274853
    </div>

    
    </>
)
}

export default Tempapp;