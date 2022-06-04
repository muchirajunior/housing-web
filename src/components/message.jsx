import React from 'react'

export default function Message() {
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Message Landlord</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">               
            <textarea className="form-control border-0 shadow-lg" onChange={(event)=>{}} id="description" placeholder='your message' rows="3"></textarea>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          <button type="button" className="btn btn-primary">Send Message</button>
        </div>
      </div>
    </div>
  </div>
  )
}
