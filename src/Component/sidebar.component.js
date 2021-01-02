import React, {useState} from 'react';
import "./../App.css";
import GodfatherheaderIcon from './../images/the-godfather.svg';
import data from "./../EmployeeData.json";
import Maincontent from "./../Component/maincontent.component";

function Sidebar() {
    const [selectedName, setselectedName]= useState("Vito Corleone");
    const selectName = (e) => {
        setselectedName(e.target.innerHTML);
    };
    var godicon = {
        backgroundImage:  `url(${GodfatherheaderIcon})`,
        backgroundRepeat:"no-repeat",
        height:"178px",
        width:"183px",
        margin: "6rem 0px 0px 2rem"
    };
  return (
    <div >
        <div style={godicon}>
        </div>
        <div className="nameholder">
            {
                 data.employees.map((item, index) =>{
                    return(
                    <div key={index} onClick={selectName}>{item.name}</div>
                    )
                 }
               )
            }
        </div>
        <div className="rightholder">
            <Maincontent name={selectedName}/>
        </div>
    </div>
  );
}

export default Sidebar;