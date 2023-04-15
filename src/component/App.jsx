import React, { useState } from "react";
import Header from "./header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./creatArea";




function App(){
    const [postArray,setPostArray]=useState([])
    function onAdd(Note){
      
      setPostArray( (preValue) => {
        return [...preValue,Note]
      } )
    }
    function DeletNote(id){
        setPostArray( (preValue) => {
          return preValue.filter((itme,index) =>{
            return index!==id
          }
          ) 
        } )
    }
    return (<div>
    <Header></Header>
    <CreateArea add={onAdd} />
    {postArray.map( (item,index) => {
      return <Note key={index} id={index} title={item.title} content={item.content} deleteNote={DeletNote} /> 
    } )}
    <Footer></Footer>
    
    </div>)
}


export default App;