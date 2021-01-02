import Background from './../images/Headerimage/Godfatherheader.jpg';
import "./../App.css";
import Sidebar from './../Component/sidebar.component';

var sectionStyle = {
  backgroundImage:  `url(${Background})`,
  backgroundSize:"100% 100%",
  height:"1000px"
};


function Main() {
  return (
    <div style={ sectionStyle }>
        <div className="backgroundStyle1"></div>
        <div className="backgroundStyle2"></div>
        <div className="leftholder">
            <Sidebar />
        </div>
    </div>
  );
}

export default Main;
