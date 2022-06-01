import { addDoc, collection } from 'firebase/firestore';
import {db} from "../firebase-config"

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Create() {
    const [form,setForm]=useState({
                    landlordId:"5jhcoTjEWJw2iSU9uS24",
                    username:"Junior",
                    image:"image_cropper_1636218420336.jpg",
                    house:"", description:""
                    });
    const [loading, setLoading]=useState(false)
    const [error, setError]=useState(false)
    const houseCollection=collection(db,"posts");
    let navigate=useNavigate();

    const submit= async ()=>{
        setLoading(true);
        console.log(form);
        if(form.description ==="" || form.house ===""){
            setError(true);
        }else{
            setError(false)
            await addDoc(houseCollection,form);
            navigate("/");
        }
        
        setLoading(false);
    }



  return (
    <div className='container mt-5'>
       
        <div className='card p-3 border  mx-auto shadow bg-light '  style={{maxWidth:"600px"}}>
            <h4 className='card-title text-center text-dark'>Create New House</h4>
            <div class="mb-3">
                <label htmlfor="house" class="form-label">House name</label>
                <input type="text" onChange={(event)=>setForm({...form,house:event.target.value})} class="form-control border-0 shadow" id="house" placeholder="house 1"/>
            </div>
            <div class="mb-3">
                <label fhtmlor="description" class="form-label">Description</label>
                <textarea class="form-control border-0 shadow-lg" onChange={(event)=>setForm({...form,description:event.target.value})} id="description" placeholder='house 1 description' rows="3"></textarea>
            </div>

            { error ? <div class="alert alert-danger alert-dismissible fade show" role="alert"> please fill all fields.</div> : null }

            { loading ? <div class="spinner-border text-dark mx-auto mt-5" role="status">
                <span class="visually-hidden">Loading...</span> </div> :

              <button onClick={submit} className='btn btn-dark rounded-pill  mx-auto w-50'>SUBMIT</button>
            }

        </div>

    </div>
  )
}
