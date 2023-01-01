import React, {useState } from 'react'
import styleDetails from '../../styles/details.module.css'
import { faCoffee, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Post(props:any) {
const [post,setPost]=useState({})
// const User =useSelector(state=>state.user)
// const Role =useSelector(state=>state.role)
const [title,setTitle]=useState("")
const [desc,setDesc]=useState("") 
const [plus,setPlus]=useState("")

const [updateMode,setUpdateMode]=useState(false)


// const handleDelete = async()=>{
//  try {
//   await axios.delete(`/posts/${post._id}`,{
//     data:{username:User.username},
//   });
//   window.location.replace("/");
//  } catch (error) {}
// }

// const handleUpdate = async()=>{

//   try {
//     await axios.put(`/posts/${post._id}`,{
//       username:User.username,
//       title:title,
//       description:desc,
//     });
//     // window.location.reload();
//     setUpdateMode(false)
//    } catch (error) {}

// }
 
  return (
    <>
          {props.car.img && (
          <img style={{height:"290px",borderRadius:"10px" ,margin:"0 20% 0 10% ",width: "70vw" }} src={props.car.img} 
           alt=""
           />
            )}

             {updateMode ? (
             <input type="text" value={title} className={styleDetails.singlePostTitleInput} autoFocus onChange={(e)=>setTitle(e.target.value)}  />
             ) : (

              <h5  className={styleDetails.singlePostTitle}>{props.car.title}
             {/* {(post.username===User?.username || Role==="admin") && (
              */}
             <div className={styleDetails.singlePostEdit}>
             <FontAwesomeIcon icon={faEdit} className={styleDetails.singlePostIcon} onClick={()=>setUpdateMode(true)}/>  
             <FontAwesomeIcon icon={faTrashAlt} className={styleDetails.singlePostIcon} />  
             {/* <i className="singlePostIcon  far fa-trash-alt" onClick={()=>handleDelete()}></i>    */}
            </div>
            
            </h5>
            )}
              <div className={styleDetails.SinglePostInfo}>
                 <span className={styleDetails.singlePostAuthor}>Ecrivain:<>
                  {/* <Link to={`/?user=${post.username}`}>{post.username}</Link> */}
                  </></span>
                 <span className={styleDetails.singlePostDate}>
                  01/01/2023
                   {/* <>{new Date(post.createdAt).toDateString()}</> */}
                   </span>
              </div>
              {/* {updateMode ? (<Form.Control l as="textarea"   value={desc} className='singlePostDescInput' onChange={(e)=>setDesc(e.target.value)} />): ( */}
              {updateMode ? (<textarea   value={desc} className={styleDetails.singlePostDescInput} onChange={(e:any)=>setDesc(e.target.value)}  autoFocus/>): (
                <p  className={styleDetails.singlePostDesc}>
                  {props.car.description}
                </p>)}
            
          {updateMode &&
           <button className={styleDetails.singlePostButton}>modifier</button>
          //  <button className='singlePostButton' onClick={()=>handleUpdate()}>modifier</button>
          }
         
    </>
  );
}








export async function getStaticPaths() {
  const res= await fetch("http://localhost:3000/api/cars");
  const data = await res.json();
 
  const paths = data.map((el:any)=>{
 return{
  params:{id:`${el.id}`}
 }
})
return{
  paths:paths,
  fallback:false
}
}
//getServerSideProps
export async function getStaticProps(context:any) {
  const res = await fetch(`http://localhost:3000/api/cars/${context.params.id}`);
  const data = await res.json()
    
  return{
    props:{
      car:data
    }
  }
}