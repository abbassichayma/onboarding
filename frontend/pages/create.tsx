


import createStyle from '../styles/create.module.css'
function Create() {

  return (
    <div className={createStyle.write}>
      
          <img
          className={`${createStyle.writeImg} ${createStyle.hreaderImg}`}
          src="/img/registerCar.jpg"
           alt=""
           /> 
      <form className="writeForm" >  
  <div className='writeFormGroup'>
    <label htmlFor='fileInput'>
       <i className={`${createStyle.writeIcon} ${createStyle.fas} ${createStyle.fa}`}></i>
       
       </label>

   <input type="file" 
    id="fileInput" 
    style={{display:"none"}}
    
    />

   <input 
   type="text"  
   placeholder='Name of the car' 
   className={createStyle.writeInput} 

   />
  
   <input 
   type="text"  
   placeholder='Type of  your car...' 
   className={createStyle.writeInput} 
   
   style={{fontSize:"20px"}}
   />

  </div>
  <div className={createStyle.writeFormGroup}>
    <textarea 
    placeholder='Describe your car ...' 
     
    className={`${createStyle.writeText} ${createStyle.writeInput}`}
    > </textarea>
    
    <button className={createStyle.writeSubmit} type='submit'>Create</button>
  </div>
      </form>
    </div>
  )
}

export default Create