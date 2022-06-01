import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db, imgUrl } from '../firebase-config';
import Navbar from '../components/navbar.';
import Footer from '../components/footer';
import Message from '../components/message';

function Home() {
  const [houses, setHouses] = useState([])
  const housesCollection = collection(db, "posts")
  useEffect(() => {
    const getData = async () => {
      const hs = await getDocs(housesCollection);
      setHouses(hs.docs.map((doc) => ({ ...doc.data() })))
    }

    getData();
  }, [0])

  return (
    <div className='bg-light'>

     <Message/>
      < Navbar />
      <div className='row'>

        { houses.length > 1 ? houses.map((house) =>
            <div className="card m-3 border mx-auto" style={{ "width": "20rem" }}>
              <img src={imgUrl(house.image)} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{house.house}</h5>
                <p className="card-text">{house.description}</p>
                <div className='col d-flex justify-content-between '>
                  <button className="btn btn-primary">Book Now</button>
                  { house.username==="Junior" ? <button className="btn btn-primary">Delete</button> :
                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Chat Owner</button>}
                </div>
                
              </div>
            </div>) : <div class="spinner-border text-primary mx-auto mt-5" role="status">
            <span class="visually-hidden">Loading...</span>

          </div> }        
      </div>
      < Footer />
    </div>
  )
}

export default Home;