import React from "react";
import { SiGooglekeep } from "react-icons/si";
import { HiMenu } from "react-icons/hi";
import { IoRefresh } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { TfiViewList } from "react-icons/tfi";
import { CiGrid41 } from "react-icons/ci";
import { MdGridOn } from "react-icons/md";
import { IoBulbOutline } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineArchive } from "react-icons/md";
import { MdDeleteSweep } from "react-icons/md";

function Header() {
  return (
 <div>
    <div className="header">
        
        <div style={{display:"flex",alignItems:"center"}}>
             <HiMenu  style={{fontSize:"30px"}}/>
            <SiGooglekeep  style={{color:"orange" ,fontSize:"50px"}}/>
            <h2>Google-Keep-Clone</h2>
        </div>
       
           <input type="text" placeholder="Search"/>
        <div className="right-icons">
            <div><IoRefresh /></div>
            <div><CiGrid41 /></div>
            <div><IoSettingsOutline /></div>
            <div><MdGridOn /></div>

        </div>
        </div>
            <hr/>

       {/* <div className="drop-down">
            <div><IoBulbOutline />Notes</div>
            <div><IoNotifications />Reminder</div>
            <div><FaRegEdit />EditNote</div>
            <div><MdOutlineArchive />Archive</div>
                <div><MdDeleteSweep />Trash</div>
       </div> */}

</div>
  )
}

export default Header;