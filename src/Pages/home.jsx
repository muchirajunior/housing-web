import React, { useEffect, useState } from 'react';
import { collection, getDocs, doc, deleteDoc} from "firebase/firestore";
import { db, imgUrl } from '../firebase-config';
import Navbar from '../components/navbar.';
import Footer from '../components/footer';
import Message from '../components/message';
import UpdateModal from '../components/updateModal';

function Home() {
  const [houses, setHouses] = useState([])
  const housesCollection = collection(db, "posts")
  const [data,setData]=useState({ house:"",description:"",id:""})
  useEffect(() => {
    const getData = async () => {
      const hs = await getDocs(housesCollection);
      setHouses(hs.docs.map((doc) => ({ ...doc.data(), id:doc.id })))
    }

    getData();
  }, [housesCollection])

  
  const deleteHouse= async (id)=>{
    var house=doc(db,"posts",id);
    if ( window.confirm("are you sure you want to delete this object ..?")){
      await deleteDoc(house);
      window.location.reload()
    }
  }

  const updateHouse=(house,description,id)=>{
    setData({house,description,id})

  }


  return (
    <div className='bg-light '>

      <Message/>
      < Navbar />
      < UpdateModal house={data.house} description={data.description} id={data.id} />
      <div className='container-fluid row'>

        { houses.length > 1 ? houses.map((house) =>
            <div key={house.id} className="card m-1 border mx-auto p-0" style={{ "width": "20rem" }}>
              <img src={imgUrl(house.image)} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{house.house}</h5>
                <p className="card-text h-50">{house.description}</p>
                
                <div className='col d-flex justify-content-between '>
                 { house.username==="Junior"?  <button className="btn btn-primary" onClick={()=> updateHouse(house.house,house.description,house.id)} data-bs-toggle="modal" data-bs-target="#updateModal">update House</button> :
                     <button className="btn btn-primary">Book Now</button>   }
                  { house.username==="Junior" ? <button onClick={()=> deleteHouse(house.id)} className="btn btn-primary">Delete</button> :
                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Chat Owner</button>}
                </div>
                
              </div>
            </div>) : <div className="spinner-border text-primary mx-auto mt-5" role="status">
            <span className="visually-hidden">Loading...</span>

          </div> }        
      </div>
      < Footer />
    </div>
  )
}

export default Home;