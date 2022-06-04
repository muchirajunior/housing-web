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
    <div className="modal fade" id="updateModal" tabIndex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="updateModalLabel">Update House</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">               
            <div className="mb-3">
                <label htmlFor="house" className="form-label">House name</label>
                <input type="text" defaultValue={house} onChange={(event)=>setForm({...form,house:event.target.value})} className="form-control border-0 shadow"   id="house" placeholder="house 1"/>
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea className="form-control border-0 shadow-lg" onChange={(event)=>setForm({...form,description:event.target.value})} defaultValue={description} id="description" placeholder='house 1 description' rows="3"></textarea>
            </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          {loading ? <div className="spinner-border text-dark mx-auto mt-5" role="status">
                <span className="visually-hidden">Loading...</span> </div> : <button type="button" onClick={submit} className="btn btn-primary">Submit</button>}
        </div>
      </div>
    </div>
  </div>
  )
}
