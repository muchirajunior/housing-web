import React ,{ useState} from 'react'


export default function Register() {

  const [form,setForm]=useState({ email:"", password:""});
  const [loading, setLoading]=useState(false)
  const [error, setError]=useState(false)
  const submit= async()=>{
      setLoading(true);
      setError(true);
  }


  return (
    <div className='position-fixed end-0 d-flex align-items-center w-100 h-100 bg-primary bgopacity'>
       
    <div className='card p-3 border w-100 m-3  mx-auto shadow bg-light text-primary'  style={{maxWidth:"600px"}}>
        <h4 className='card-title text-center '>Create Account</h4>
        <div class="mb-3">
            <label htmlfor="email" class="form-label">email</label>
            <input type="email" onChange={(event)=>setForm({...form,email:event.target.value})} class="form-control border-0 shadow" id="email" placeholder="email 1"/>
        </div>

        <div class="mb-3">
            <label htmlfor="password" class="form-label">password</label>
            <input type="password" onChange={(event)=>setForm({...form,password:event.target.value})} class="form-control border-0 shadow" id="pass" placeholder="pass"/>
        </div>
       
        { error ? <div class="alert alert-danger alert-dismissible fade show" role="alert"> please fill all fields.</div> : null }

        { loading ? <div class="spinner-border text-primary mx-auto mt-5" role="status">
            <span class="visually-hidden">Loading...</span> </div> :
          <div className='row text-center'>
            <button onClick={submit} className='btn btn-primary rounded-pill  mx-auto w-50'>Log In</button>
            <h4 className='text-dark opacity-25'>or</h4>
            <button onClick={submit} className='btn btn-success rounded-pill  mx-auto w-50'>Create Account</button>
          </div>
        }

    </div>

</div>
  )
}
