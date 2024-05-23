import React from "react";
import "../../App.css"

function ContactCard({handleDelete, handleEdit, handleStarring, index, contact}) {
  return (
    <div className="contacts">
      <div class="contact-details">
        <h5>{contact.name}</h5>
        <p>{contact.number}</p>
      </div>
      <button class="icon-holder" onClick={()=>handleDelete(index)}>
        <span>Delete</span><i class="delete fa fa-trash"></i>
      </button>
      <button class="icon-holder" onClick={()=>handleEdit(index)}>
        <span>Edit</span><i class="fas fa-edit"></i>
      </button>
      <button class="icon-holder" onClick={()=>handleStarring(index)}>
        <span>Star</span>{contact.starred ? <i class="fas fa-star"></i> : <i class="far fa-star"></i>} 
      </button>
      <hr />
    </div>
  )
}

export default ContactCard