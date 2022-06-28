import React ,{ useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth-context';
export default function SignUp() {

  const [form,setForm]=useState({ email:"", password:""});
  const [loading, setLoading]=useState(false)
  const [error, setError]=useState("")
  const { signup, login }= useAuth()
  const navigate=useNavigate()
  const submit= async(method)=>{
      setLoading(true);
      setError("");
      if (form.email !=="" && form.password !== ""){
        try {
         const feedback= method==="register" ? await signup(form.email,form.password) : login(form.email,form.password)
         console.log(feedback);
         navigate("/");
        } catch (error) {
          setError(error)
          
        }
      }
      setLoading(false)
  }



  return (
    <div className='position-fixed end-0 d-flex align-items-center w-100 h-100 bg-primary bgopacity'>
       
    <div className='card p-3 border w-100 m-3  mx-auto shadow bg-light text-primary'  style={{maxWidth:"600px"}}>
        <h4 className='card-title text-center '>Create Account</h4>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">email</label>
            <input type="email" onChange={(event)=>setForm({...form,email:event.target.value})} className="form-control border-0 shadow" id="email" placeholder="email 1"/>
        </div>

        <div className="mb-3">
            <label htmlFor="password" className="form-label">password</label>
            <input type="password" onChange={(event)=>setForm({...form,password:event.target.value})} className="form-control border-0 shadow" id="pass" placeholder="pass"/>
        </div>
       
        { error!=="" ? <div className="alert alert-danger alert-dismissible fade show" role="alert"> error sign up, please try again</div> : null }

        { loading ? <div className="spinner-border text-primary mx-auto mt-5" role="status">
            <span className="visually-hidden">Loading...</span> </div> :
          <div className='row text-center'>
            <button onClick={()=>submit("login")} className='btn btn-primary rounded-pill  mx-auto w-50'>Log In</button>
            <h4 className='text-dark opacity-25'>or</h4>
            <button onClick={()=>submit("register")} className='btn btn-success rounded-pill  mx-auto w-50'>Create Account</button>
          </div>
        }

    </div>

</div>
  )
}
