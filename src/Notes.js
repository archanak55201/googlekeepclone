import React, { useState } from 'react'
import { TbChecklist } from "react-icons/tb";
import { IoMdBrush } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";
import { MdDisplaySettings, MdNotificationAdd } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { IoIosColorPalette } from "react-icons/io";
import { FaRegImage } from "react-icons/fa";
import { MdOutlineArchive } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import { LuUndo2 } from "react-icons/lu";
import { LuRedo2 } from "react-icons/lu";

function Notes() {
    const [hide,setHide] = useState("hide");
    const [input,setInput] = useState("");
    const [textarea,setTextarea] = useState("");
    const [placeholder,setPlaceholder] = useState("Create note");
    const opentextarea=()=>{
     setHide("show");
     setPlaceholder("Title");
    }
    const closetextarea=()=>{
       
        if(input!=="" ){
                console.log(input);
                // show 
        }
       
    }

               
  return (
    <div  className="add-note" >
       <div className='add-div' onBlur={closetextarea} >
        <div className="create_note" onClick={opentextarea} >
            <input type="text" placeholder ={`${placeholder}`} autoComplete='off' onChange={(e)=>{
                setInput(e.target.value)
            }}/>
            <div><TbChecklist /></div>
            <div><IoMdBrush /></div>
            <div>  <CiImageOn /></div>      
        </div>
        <div className={`textarea ${hide}`}>
            <textarea name='Create note' rows="" cols="" placeholder='Create note' onChange={(e)=>{
                setInput(e.target.value)
            }}/>
            <div className='textarea-icons'>
                <div><MdNotificationAdd /></div>
                <div><FaUserPlus /></div>
                <div><IoIosColorPalette /></div>
                <div><FaRegImage /></div>
                <div><MdOutlineArchive /></div>
                <div><HiDotsVertical /></div>
                <div><LuUndo2 /></div>
                <div><LuRedo2 /></div>
                    <span><button>Done</button></span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Notes;
