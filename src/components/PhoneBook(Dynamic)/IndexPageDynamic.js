import ContactCard from "./ContactCard";
import {axios} from "@bundled-es-modules/axios";
import React, { useState, useEffect } from "react";

const IndexPageDynamic = () => {
  const [contacts, setContacts] = useState([]);

    const fetchData = async () => {
      await axios.get('http://localhost:3001/list').then((data)=>{
        const receivedData = data.data
        console.log("receivedData:", receivedData);

        setContacts(receivedData)
        console.log("contacts:", contacts);
      })
    };
    useEffect(()=>{fetchData()}, [])
  const [showForm, setShowForm] = useState(false);
  const [number, setNumber] = useState("")
  const [name, setName] = useState("")
  const [editContact, setEditContact] = useState(false)
  const [editIndex, setEditIndex] = useState(0)
  const [displayStarred, setDisplayStarred] = useState(false)

  const handleStarring = (index) => {
    const updatedContacts = [...contacts]
    updatedContacts[index] = {
      ...updatedContacts[index],
      starred: !updatedContacts[index].starred, // Toggle the starred value
    };
    setContacts(updatedContacts)
    console.log("contacts[index].starred:", contacts[index].starred);
  }

  const handleDisplayStarred =() => {
    setDisplayStarred(!displayStarred)
  }
  const handleAdd = async () => {
    let specialChars = /[`!@#$%^&*()_\-=\[\]{};':"\\|,.<>\/?~]/;
    let numbers = /[0-9]/;
    let alphabets = /[a-zA-Z]/;
    if (numbers.test(name)) {
      alert("Name cannot contain any number.");
      return;
    } else if (specialChars.test(name)) {
      alert("Name cannot contain any special character.");
      return;
    } else if (name.length === 0) {
      alert("Name can't be empty.");
      return;
    } else if (name.length > 20) {
      alert("Name shouldn't exceed 20 characters.");
      return;
    } else if (specialChars.test(number)) {
      alert("Number cannot contain any special character.");
      return;
    } else if (alphabets.test(number)) {
      alert("Number cannot contain any alphabet.");
      return;
    } else if (number.length === 0) {
      alert("Number can't be empty.");
      return;
    } else if (number.length > 13) {
      alert("Number shouldn't exceed 13 characters.");
      return;
    }

    const newContact = {name: name, number: number}
    setName("")
    setNumber("")
    if (editContact) {
      // contacts[editIndex] = newContact
      // setContacts(contacts)
      // setEditContact(false)
      const id = contacts[editIndex]._id
      console.log(id);
      await axios.put(`http://localhost:3001/update/${id}`, newContact)
      fetchData()
    } else {
      await axios.post("http://localhost:3001/create", newContact)
    }
    setShowForm(false)
    fetchData()
  }
  
  contacts.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  const handleEdit = async (index) => {
    console.log("edit clicked");
    console.log("index:", index);
    setShowForm(true)
    setName(contacts[index].name)
    setNumber(contacts[index].number)
    setEditContact(true)
    setEditIndex(index)
  }
  const handleDelete = async (index) => {
    console.log("index:", index);
    const id = contacts[index]._id
    console.log("id:", id);

    await axios.delete(`http://localhost:3001/delete/${id}`, contacts[index])
    fetchData()
  }

  return (
    <div id="main">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2"></div>

          <div className="col-md-8">
            <div className="App">
              <h2 className="header">PhoneBook</h2>
              <div className="flex justify-content-between">
                <span
                  style={{
                    cursor: "pointer",
                    color: "blue",
                    textDecoration: "underline",
                  }}
                  onClick={() => setShowForm(!showForm)}
                >
                  {showForm ? "Hide Contact Form" : "Create New Contact"}
                </span>
                <span onClick={()=>handleDisplayStarred()}>Starred</span>
              </div>

              {showForm && (
                <div className="container">
                  <form className="form">
                    <div class="form-group">
                      <input
                        type="text"
                        value={name}
                        className="form-control"
                        placeHolder="Name"
                        onChange={(e)=>{
                          // e.target.value
                          setName(e.target.value)
                          // console.log("e.target.value:", e.target.value);  
                        }}
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        value={number}
                        className="form-control"
                        placeHolder="Number"
                        onChange={(e)=>{
                          // e.target.value
                          setNumber(e.target.value)
                          // console.log("e.target.value:", e.target.value);  
                        }}
                      />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={()=>handleAdd()}>
                      {!editContact ? "Add" : "Update"}
                    </button>
                  </form>
                </div>
              )}

              {contacts.map((contact, index) => (
                (displayStarred ? 
                  (contact.starred ?
                    <ContactCard {...{ handleDelete, handleStarring, handleEdit, index, contact }}/> 
                    : 
                    <div></div>) 
                :
                <ContactCard {...{ handleDelete, handleStarring, handleEdit, index, contact }}/>)
              ))}
            </div>
          </div>

          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  )

}

export default IndexPageDynamic