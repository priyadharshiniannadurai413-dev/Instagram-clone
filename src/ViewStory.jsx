import React, { useEffect, useState } from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom'

function ViewStory() {

    const {id,tot}=useParams();

    const [story,setStory]=useState(null);

    const navigate=useNavigate();
  

    useEffect(()=>{
        
        if (id <=0){
        navigate('/');
        return;
        }
       
        fetch(`http://localhost:3000/story/${id}`)
        .then(data=>data.json())
        .then(data=>setStory(data))
        .catch(err=>console.log(err))
    },[id,tot,navigate])

 
  return (
    <div>
        {story?<div className='d-flex justify-content-center align-items-center'>
            
            <Link to={`http://localhost:5174/story/${Number(id)-1}/${tot}`} ><i className="bi bi-arrow-left-circle-fill"></i></Link>
            <img  className="vh-100" src={story.image} alt="story"/>
        
            <Link to={`http://localhost:5174/story/${Number(id)+1}/${tot}`}><i className="bi bi-arrow-right-circle-fill"></i></Link>
            
           </div>:<p>loading</p>}
    </div>
  )
}

export default ViewStory