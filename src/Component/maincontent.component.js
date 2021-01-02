import React ,{useState} from 'react';
import "./../App.css";
import data from "./../EmployeeData.json";
import userimagepath from "./../images/Profilepics/VitoCorleone.jpg";


function Maincontent(props) {
    console.log(props);
    var filterdata= data.employees.filter(function (e) {
        return e.name==props.name;
    }); 
    
    var userphoto = {
        backgroundImage:`url(${userimagepath})`,
        backgroundSize:"100%",
        backgroundRepeat:"norepeat",
        height:"150px",
        width:"150px",
        float:"left"
    };
    
    console.log("imgag path", userimagepath);
    return (
        <div >
            <div>
                <div style={userphoto}></div>
                <div className="userName">{props.name}</div>
            </div>
            <br/>
            <div className="popularity">
                <h3>Popularity </h3>&nbsp;&nbsp;&nbsp;<input type="range" id="vol" name="vol" min="0" max="5" value={filterdata[0].popularity}/>
            </div>
            <br/>
            <div className="biography">
                <p>
                    {filterdata[0].biography}
                </p>
            </div>
        </div>
    );
}

export default Maincontent;