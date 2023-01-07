import React from '../react_nodes/react';
import { Outlet, Link } from '../react_nodes/react-router-dom';

const Contact = () => {
  return (
    <div style={{textAlign:"center"}}> 
    
          <h1>Contact Links</h1>
          <br />
      
          <div>
          <Link to="/contact/contactPage1"><button>Nested Contact Page 1</button></Link>&nbsp;&nbsp;&nbsp;
          
            
          <Link to="/contact/contactPage2"><button>Nested Contact Page 2</button></Link>&nbsp;&nbsp;&nbsp;
          
            
          <Link to="/contact/contactPage3"><button>Nested Contact Page 3</button></Link>
          </div>            
        

      <div style={{color:"blue"}}><Outlet /></div>
    </div>
  );
};

export default Contact;