
import React, {useEffect, useState} from "react"
import {Link} from "react-router-dom"

import axios from "axios"

import "./index.css"

const BlogData = () =>{
    const [student, setStudent] = useState([])
    const [type, setType] = useState('')
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState('')
    const [date, setDate] = useState('')
    const [description, setDesc] = useState('')


    useEffect(() =>{
        axios.get('http://localhost:3001/transactions')
        .then(res => setStudent(res.data))
        .catch(err => console.log(err))
    }, [])

    const addPostDataToTable = async (e) =>{
         e.preventDefault()
         axios.post("http://localhost:3001/transactions", {type, category, amount, date, description})
         .then(res =>{
            console.log(res)
            window.location.reload()


         }).catch(err => console.log(err))
    }

   

  
    //  const showForm = () =>{
       

    //     var x = document.getElementById("addPostForm");
    //     if (x.style.display === "block") {
    //       x.style.display = "none";
    //     } else {
    //       x.style.display = "block";
        
    //     }
    //  }
   
 

    return(
        <div className="blog-container">
              <div className="total">
              <div className="add-post-container">
                <h1 className="add-text">Add User Data</h1>
                {/* <button type = "button" className="add-post-btn" onClick={showForm}>Add Post</button> */}
            </div>
            <form className="add-form" id="addPostForm" onSubmit={addPostDataToTable}>
             
            <label htmlFor="imagess" className="post-label">Type</label>
              <select className="input-element" id="imagess" onChange={e => setType(e.target.value)}>
                <option className="option-item">income</option>
                <option className="option-item">expense</option>
              </select>
              
              <label htmlFor="image" className="post-label">Category</label>
              <input type="text" className="input-element" onChange={e => setCategory(e.target.value)} placeholder="Enter category" />
              <label htmlFor="image" className="post-label">Amount</label>
              <input type="text" className="input-element" onChange={e => setAmount(e.target.value)} placeholder="Enter Amount" />
              <label htmlFor="image" className="post-label">Date</label>
              <input type="date" className="input-element" onChange={e => setDate(e.target.value)} />
              
              <label htmlFor="desc" className="post-label">Description</label>
              <textarea id="desc" className="desc-input" onChange={e => setDesc(e.target.value)} placeholder="Enter Description" rows="4" cols="50" />
              <button type="submit" className="save-btn" >Post</button>
            </form>
              </div>
            
            <ul className="blog-items-list">
            
                {student.map((each) => (
                    <Link to ={`/postdetailview/${each.id}`} className = "link">
                        <li key = {each.id} id = "hoverme" className="blog-item">
                          {each.amount}
                          
                          </li>
                    </Link>
                ))}
            </ul>
        </div>
        
    )
    
}


export default BlogData