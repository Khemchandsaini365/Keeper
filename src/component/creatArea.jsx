import { useState } from "react";

function CreateArea(props) {
    const [Note,setPost]=useState({
        title:"",
        content:""
    })
    function handleChange(event){
        const {name,value}=event.target
        setPost( (preValue) => {
                return {
                    ...preValue,
                    [name]:value
                }
        } )
    }
   function handleClick(event){
    event.preventDefault();
    props.add(Note)
    setPost({
        title:"",
        content:""
    }

    )
   }
    return (
      <div>
        <form  >
          <input onChange={handleChange} name="title" placeholder="Title"  value={Note.title}/>
          <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={Note.content} />
          <button onClick={handleClick} >Add</button>
        </form>
      </div>
    );
  }
  
  export default CreateArea;
  
  