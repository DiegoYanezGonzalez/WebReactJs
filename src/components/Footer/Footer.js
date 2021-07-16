import React from "react";
import IconButton from '@material-ui/core/IconButton';
import logo from "../../assets/cuttevents.png";

const footerStyle = {
    backgroundColor: " #363431",
    fontSize: "20px",
    color: "white",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "85px",
    width: "100%"
  };
  
  const phantomStyle = {
    display: "block",
    padding: "20px",
    height: "60px",
    width: "100%"
  };

  
  
  

function Footer({ children }) {
    return (
      <div> 
        <div style={phantomStyle} />
       <div style={footerStyle}>{children}
  
       <div >
         
       <section>
       <ul>
         <li> <a href="">Facebook</a> </li>
         <li> <a href="">Youtube </a></li>
         
       </ul>
       
     </section>
     

     {/* <section >
     <IconButton >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFd3p0SRM7LMPmsCwStzhQ8q9oX04Eg8Rvr1jFgIbQBTlsqP8BzbvADFnJR6nMEbbFvJM&usqp=CAU" />
          </IconButton>
     </section> */}
       </div>
       
       </div>
      </div>
    );
  }

  export default Footer;