
// import axios from 'axios'
// import React, { useState } from 'react'
// import { useSelector } from 'react-redux'

import createStyle from '../styles/create.module.css'
function Create() {
  
//   const User =useSelector((state:any)=>state.user)
//   const [title,setTiltle]=useState("")
//   const [description,setDescription]=useState("")
//   const [file,setFile]=useState(null)
//   const [categories,setCategories]=useState("")
//   const [error,setError]=useState(false)
//   const [plus,setPlus]=useState("")
// const Role =useSelector((state:any)=>state.role)
// const handleSubmit = async(e:any)=>{
//   e.preventDefault()
//   const newPost ={
//     username:User.username,
//     title,
//     categories,
//     description,
//   };
//   if(file){
//     const data = new FormData();
//     const filename = Date.now() + file.name;
//     data.append("name",filename);
//     data.append("file",file);
//     newPost.photo = filename;
//     try {
//       await axios.post("/upload",data);
//     } catch (error) {}
//   }
//   if(categories){
//     try {
//       if(Role==="admin"){
//         try {
//           await axios.post("/categories",{name:categories})
//         } catch (error) {}
//       }
//     } catch (error) {}
    
//   }
//   try {
//     const res =  await axios.post("/posts",newPost);
//     setPlus(res.data.photo)
//     console.log("write",plus)
   
//       window.location.replace("/details/" + res.data._id);
//    } catch (error) {setError(true)};
// }




  return (
    <div className={createStyle.write}>
      {/* {
      file && (plus.includes("jpg") ||plus.includes("png")||plus.includes("jpeg"))&&(
       <Card.Img
           className='writeImg hreaderImg'
           src={URL.createObjectURL(file)}
           alt=""
           /> 
           ) }  */}
          <img
          className={`${createStyle.writeImg} ${createStyle.hreaderImg}`}
          src="/img/registerCar.jpg"
           alt=""
           /> 

      {/* <form className="writeForm" onSubmit={(e)=>handleSubmit(e)}> */}
      <form className="writeForm" >
  <div className='writeFormGroup'>
    <label htmlFor='fileInput'>
       <i className={`${createStyle.writeIcon} ${createStyle.fas} ${createStyle.fa}`}></i>
       
       </label>

   <input type="file" 
    id="fileInput" 
    style={{display:"none"}}
    // onChange={(e)=>setFile(e.target.files[0])}
    />

   <input 
   type="text"  
   placeholder='Titre' 
   className={createStyle.writeInput} 
//    utoFocus={true}
//    onChange={(e)=>setTiltle(e.target.value)}
   />
    {/* {error &&<div style={{color:"red",margin:"10px"}}>le titre de votre article doit être unique !</div>} */}
   <input 
   type="text"  
   placeholder='Category ( Politique ,Sport ,Economie...)' 
   className={createStyle.writeInput} 
   //utoFocus={true}
   style={{fontSize:"20px"}}
   //onChange={(e)=>setCategories(e.target.value)}
   />

  </div>
  <div className={createStyle.writeFormGroup}>
    <textarea 
   // onChange={(e)=>setDescription(e.target.value)}
    placeholder='Ecrire votre article...' 
     
    className={`${createStyle.writeText} ${createStyle.writeInput}`}
    > </textarea>
    
    <button className={createStyle.writeSubmit} type='submit'>Publier</button>
  </div>
      </form>
    </div>
  )
}

export default Create