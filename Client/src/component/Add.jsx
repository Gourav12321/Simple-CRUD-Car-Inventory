import React, { useState } from 'react'
import axios from "axios";
function Add() {

    const [data ,setdata] = useState({
        name :"",
        model : "",
        pdate : "",
        prize : "",
        car_company : "",
    });

    const changedata = (e) =>{
        // e.preventDefault();
        const name = e.target.name;
        const value = e.target.value;
        setdata((pre)=>{
            return {...pre , [name] : value}
        })
    }


    const onsubmit = async(e)=>{
        e.preventDefault();
        try{
            await axios.post("http://localhost:3000/backend/add",data);
            setdata({
                name : "",
                model : "",
                pdate : "",
                prize : "",
                car_company : "",
            });

            swal({
                title : "Saved",
                text : "Data Added Sucessfully",
                icon : "success"
              });
        }catch(error){
            console.log(error);
        }
    }

  return (
    <div className='px-[10rem] py-[5rem] flex gap-10 w-full justify-center'>
        <div className='w-1/3 gap-6 flex flex-col'>
                <p>Name  </p>
                <p>Model  </p>
                <p>Purchasing Date  </p>
                <p>Prize  </p>
                <p>Car Company  </p>
        </div>
        <div className='w-1/2'>
        <form onSubmit={onsubmit} className=' flex flex-col  gap-6'>

            <input type='text' name='name' placeholder='Enter Name' onChange={changedata} value={data.name}/>
            <input type='text' name='model' placeholder='Enter Model No.' onChange={changedata} value={data.model}/>
            <input type='date' name='pdate' placeholder='Enter Purchasing date' onChange={changedata} value={data.pdate}/>
            <input type='number' name='prize' placeholder='Enter Prize of Car' onChange={changedata} value={data.prize}/>
            <input type='text' name='car_company' placeholder='Enter Company of Car' onChange={changedata} value={data.car_company}/>
            <button type='submit' className='bg-cyan-300'>Submit</button>
        </form>
        </div>
    </div>
  )
}

export default Add