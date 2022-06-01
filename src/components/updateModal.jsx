import React, {  useEffect, useState } from 'react';
import { doc,updateDoc} from "firebase/firestore";
import { db } from '../firebase-config';

export default function UpdateModal({house,description,id}) {

const [form,setForm]=useState({house,description})
 const [loading,setLoading]=useState(false)
 useEffect(()=>{
     setForm({house,description})
 },[])

 const submit= async()=>{
     console.log(form);
     setLoading(true);
     const houseDoc=doc(db,"posts",id);
     if (form.house.length>2 & form.description.length>10){
        await updateDoc(houseDoc,form);
        setLoading(false);
        window.location.reload();
     }else{
        setLoading(false);
        window.alert("please fill all fields !!");
     }      

 }
 

  return (
    <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="updateModalLabel">Update House</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">               
            <div class="mb-3">
                <label htmlfor="house" class="form-label">House name</label>
                <input type="text" defaultValue={house} onChange={(event)=>setForm({...form,house:event.target.value})} class="form-control border-0 shadow"   id="house" placeholder="house 1"/>
            </div>
            <div class="mb-3">
                <label fhtmlor="description" class="form-label">Description</label>
                <textarea class="form-control border-0 shadow-lg" onChange={(event)=>setForm({...form,description:event.target.value})} defaultValue={description} id="description" placeholder='house 1 description' rows="3"></textarea>
            </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          {loading ? <div class="spinner-border text-dark mx-auto mt-5" role="status">
                <span class="visually-hidden">Loading...</span> </div> : <button type="button" onClick={submit} class="btn btn-primary">Submit</button>}
        </div>
      </div>
    </div>
  </div>
  )
}
